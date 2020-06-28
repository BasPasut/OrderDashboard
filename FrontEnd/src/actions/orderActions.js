import Axios from "axios"

export const createOrder = (order) => {
    return (dispatch) => {
        const orderObj = {
            customerName: order.customerName,
            time: order.time,
            location: order.location,
            menu: order.menu
            
         }
        // Axios({
        //     method: 'post',
        //     url: '/api/order/add-order',
        //     headers: {}, 
        //     data: orderObj
        //   }).then((res) => {
        //       console.log(res)
        //   });

        Axios.post('/api/order/add-order', {orderObj}).then((res) => {
            console.log(res.data)
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

// export const getOrderList = () => {
//     return (dispatch) => {
//         Axios.get()
//     }
// }


// export const getMenu = () => {
//     return (dispatch) => {
//         Axios.get()
//     }
// }