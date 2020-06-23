import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createOrder} from '../../actions/orderActions'

class OrderCreator extends Component {
    state = {
        customerName: '',
        date: '',
        menu: [{
            name: '',
            addOn_name: '',
            addOn_price: ''
        }]
    }


    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.createOrder(this.state)
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create Order</h5>
                    <div className="input-field">
                        <label htmlFor="title">Customer name</label>
                        <input type="text" id="customerName" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Menu</label>
                        <textarea id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.onChangeHandler}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>   
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createOrder: (order) => dispatch(createOrder(order))
    }
}

export default connect(null,mapDispatchToProps)(OrderCreator)
