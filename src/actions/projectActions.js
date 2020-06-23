import { Order } from "../components/order/Order"

import Order from '../components/order/Order'
import Axios from "axios"

export const createOrder = (order) => {
    return (dispatch) => {
        const orderObj = new Order(order.customerName, order.date, order.orders)
        Axios.post(``, {orderObj}).then(() => {
            dispatch({
                type: 'CREATE_ORDER_SUCCESS',
                orderObj
            })
        }).catch((error) => {
            dispatch({
                type: 'CREATE_ORDER_FAILED',
                error
            })
        })
    }
}