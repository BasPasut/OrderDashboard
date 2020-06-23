import React from 'react'
import OrderList from '../order/OrderList'

function Dashboard() {
    return (
        <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6">
                <OrderList/>
            </div>
            <div className="col s12 m5 offset-m1">
                
            </div>
            
        </div>
    </div>
    )
}

export default Dashboard
