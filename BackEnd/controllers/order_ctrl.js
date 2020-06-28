const orderModel = require('../models/order_model')

exports.addOrder = async function (req, res) {
    try {
        console.log(req.body)
        results = await orderModel.addOrder(req.body.customerName, req.body.customerTel, req.body.customerLocation,  req.body.menu)
        res.send(results)
    } catch (error) {
        console.log(error)
        res.status(500)
        res.send(error)
    }
}

exports.getOrderList = async function (req, res) {
    try {
        results = await orderModel.getOrderList()
        res.send(results)
    } catch (error) {
        console.log(error)
        res.status(500)
        res.send(error)
    }
}