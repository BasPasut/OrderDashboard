import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createOrder} from '../../actions/orderActions'
import MenuInputs from './MenuInputs'

class OrderCreator extends Component {
    state = {
        customerName: '',
        date: '',
        menu: [
            {
            name: '',
            quantity:'',
            addOn_name: '',
            price: '',
            description: ''
            }
        ]
    }

    onAddMenu = (e) => {
        this.setState(prevState => ({
            menu: [...prevState.menu, {
                name: '',
                quantity:'',
                addOn_name: '',
                price: '',
                description: ''
            }],
        }))
    }

    onChangeHandler = (e) => {
        if(["name", "quantity","addOn_name", "price", "description"].includes(e.target.className)){
            let menus = [...this.state.menu]
            menus[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({menus}, () => {})
        }
        else{
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.props.createOrder(this.state)
    }

    render() {
        let {customerName, date, menu} = this.state
        return (
            <div className="container">
                <form onSubmit={this.onSubmitHandler} onChange={this.onChangeHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create Order</h5>
                    <div className="input-field">
                        <label htmlFor="title">Customer name</label>
                        <input type="text" name="customerName" id="customerName" value={customerName}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Date</label>
                        <input type="text" name="date" id="date" value={date}/>
                    </div>                  
                    <button onClick={this.onAddMenu}>Add new menu</button>
                    <MenuInputs menu={menu}/>
                    <div className="input-field">             
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>   
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        createOrder: (order) => dispatch(createOrder(order))
    }
}

export default connect(null,mapDispatchToProps)(OrderCreator)
