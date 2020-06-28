const express = require("express")
const router = express.Router()
const orderCtrl = require("../controllers/order_ctrl")

router.get('/', function (req, res, next) {
    res.send("Order API");
});

router.post('/add-order', orderCtrl.addOrder)
router.get('/get-order-list', orderCtrl.getOrderList)

module.exports = router