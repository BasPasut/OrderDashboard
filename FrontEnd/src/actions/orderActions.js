import Axios from "axios"

export const createOrder = (order) => {
    return (dispatch) => {
        const orderObj = {
            customerName: order.customerName,
            date: order.date,
            menu: order.menu
            
        }
        Axios.post(`Add link here pi`, {orderObj}).then(() => {
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