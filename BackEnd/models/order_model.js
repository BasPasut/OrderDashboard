var connection = require("../utils/mysqlConnection");

exports.addOrder = async function (customerName, customerTel, customerLocation, menus) {
    return new Promise(async function (resolve, reject) {
        connection.getConnection(async function (err, conn) {
            try {
                var sql = "select c.customerName, c.customerId from Customer c\
                where c.customerName = ?"
                var params = [customerName]
                await conn.query(sql, params, async (err, res) => {
                    if (err != null) {
                        reject({
                            result: "err",
                            error: err
                        })
                    }
                    if (res.length == 0) { //Add new customer into table
                        sql = "insert into Customer (customerName, customerTel, customerLocation)\
                            value (?, ?, ?)"
                        params = [customerName, customerTel, customerLocation]
                        await conn.query(sql, params, async (err, res) => {
                            if (err != null) {
                                reject({
                                    result: "err",
                                    error: err
                                })
                            }
                            addOrderAfterCheckCustomer(conn, res.insertId, menus).then(err => {
                                reject(err)
                            })
                        })
                    }
                    else { //customer has already existed in database
                        var results = JSON.parse(JSON.stringify(res))
                        addOrderAfterCheckCustomer(conn, results[0]['customerId'], menus).then(err => {
                            reject(err)
                        })
                    }

                })
                resolve({ result: "OK" })
            } catch (error) {
                reject({
                    result: "err",
                    error: error
                })
            } finally {
                conn.release();
            }
        });
    })
}

async function addOrderAfterCheckCustomer(conn, customerId, menus) {
    return new Promise(async function (resolve, reject) {
        try {
            var sql = "insert into orders (orderDate, customerId)\
                    value (?, ?)"
            var params = [new Date(), customerId]
            await conn.query(sql, params, async (err, res) => {
                if (err != null) {
                    console.log('error')
                    reject({
                        result: "err",
                        error: err
                    })
                }
                else{
                    menus.forEach(async menu => {
                        var sql = "insert into menu (menuName, menuPrice, quantity, description, orderId)\
                                value (?, ?, ?, ?, ?)"
                        var params = [menu['menuName'], menu['menuPrice'], menu['quantity'], menu['description'], res.insertId]
                        await conn.query(sql, params, async (err, res) => {
                            if (err != null) {
                                reject ({
                                    result: "err",
                                    error: err
                                })
                            }
                            else if (menu['addOn'] != null) { //Have addon
                                menu['addOn'].forEach(async addOn => {
                                    var sql = "insert into addon (addOnName, addOnPrice, menuId)\
                                    value (?, ?, ?)"
                                    var params = [addOn['addOnName'], addOn['addOnPrice'], res.insertId]
                                    await conn.query(sql, params, async (err, res) => {
                                        if (err != null) {
                                            reject ({
                                                result: "err",
                                                error: err
                                            })
                                        }
                                    });
                                })
                            }
                        });
                    })
                    resolve({ result: "OK" })
                }
                
            });
            
        } catch (error) {
            reject ({
                result: "err",
                error: error
            })
        }
    })

}