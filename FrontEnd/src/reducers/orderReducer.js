const initialState = {
    order: 
        {
            customerName: '',
            date: '',
            menu: [{
                name: '',
                quantity:'',
                addOn_name: '',
                price: '',
                description: ''
                }]
        }
}

const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case "CREATE_ORDER_SUCCESS":
            console.log("Order created", action.order);
            return state;
        case "CREATE_ORDER_FAILED":
            console.log("Order created failed", action.error);
            return state;
        default: return state
        
    }
}

export default orderReducer