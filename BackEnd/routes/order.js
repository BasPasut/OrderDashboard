const express = require("express")
const router = express.Router()
// const orderCtrl = require("../controllers/order_ctrl")

router.get('/', function (req, res, next) {
    res.send("Order API");
});

// router.post('/add-order', orderCtrl.addOrder)

module.exports = router