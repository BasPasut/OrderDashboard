import Axios from "axios"

export const createOrder = (order) => {
    return (dispatch) => {
        const orderObj = {
            customerName: order.customerName,
            date: order.date,
            menu: [{
                name: order.menu.name,
                addOn_name: order.menu.addOn_name,
                addOn_price: order.menu.addOn_price
            }]
        }
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