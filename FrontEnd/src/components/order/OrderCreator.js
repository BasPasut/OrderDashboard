import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createOrder } from '../../actions/orderActions'
import Select from 'react-select'
import { Button, Form } from 'react-bootstrap'
import styled from 'styled-components'

class OrderCreator extends Component {
    state = {
        customerName: '',
        time: '',
        location: '',
        menu: [
            {
                name: '',
                quantity: '',
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
                quantity: '',
                addOn_name: '',
                price: '',
                description: ''
            }],
        }))
    }

    onChangeHandler = (e) => {    
        if (["name", "quantity", "addOn_name", "price", "description"].includes(e.target.className)) {
            let menus = [...this.state.menu]
            menus[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ menus }, () => {
                console.log(menus);
            })
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    onDropDownHandler = (e) => {
        let menus = [...this.state.menu]
        
        menus[e.id][e.className] = e.value
        this.setState({menus}, () => {
            console.log(menus);
            
        })
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.props.createOrder(this.state)
    }

    render() {
        let { customerName, time, location, menu } = this.state
        
        return (
            <div className="container">
                <Form onChange={this.onChangeHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create Order</h5>
                    <div className="input-field">
                        <label htmlFor="title">Customer name</label>
                        <input type="text" name="customerName" id="customerName" value={customerName} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="title">Time</label>
                        <input type="text" name="time" id="time" value={time} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="title">Location</label>
                        <input type="text" name="location" id="location" value={location} />
                    </div>
                    <Button variant="dark" onClick={this.onAddMenu}>Add new menu</Button>
                    {                 
                        menu.map((val, idx) => {
                            let menuName_Id = `name-${idx}`,
                            quantity_Id = `quantity-${idx}`,
                            addOn_name_Id = `addOn_name-${idx}`,
                            price_Id = `price-${idx}`,
                            description_Id = `description-${idx}`;

                            let name = [
                                { value: 'Tok', label: 'Tok', id: idx, className: "name"},
                                { value: 'Chicken', label: 'Chicken', id: idx, className: "name"}
                              ];
                            
                            let addon_name = [
                                { value: 'Cheese', label: 'Cheese', id: idx, className: "addOn_name"},
                                { value: 'Egg', label: 'Egg',id: idx, className: "addOn_name"},
                                { value: 'ไชเท้าดอง', label: 'ไชเท้าดอง',id: idx, className: "addOn_name"},
                                { value: 'กิมจิ', label: 'กิมจิ',id: idx, className: "addOn_name"}
                              ];  
                            return(
                            <MenuContainer key={idx} className="container">
                                <SelectCSS>
                                <label htmlFor={menuName_Id}>{`Menu #${idx + 1}`}</label>
                                    <Select options={name} placeholder="Select Menu" onChange={this.onDropDownHandler} value={menu[idx].menu}/>
                                

                                {/* <input type="text" name={menuName_Id} data-id={idx} id={menuName_Id} value={menu[idx].name} className="name"></input> */}

                                <label htmlFor={quantity_Id}>{`Quantity`}</label>
                                <input type="number" name={quantity_Id} data-id={idx} id={quantity_Id} value={menu[idx].quantity} className="quantity"></input>

                                <label htmlFor={addOn_name_Id}>{`Add-on`}</label>
                                    <Select options={addon_name} placeholder="Select Add-On" onChange={this.onDropDownHandler} value={menu[idx].menu} />
                                {/* <input type="text" name={addOn_name_Id} data-id={idx} id={idx} value={menu[idx].addOn_name} className="addOn_name"></input> */}

                                <label htmlFor={price_Id}>{`Price`}</label>
                                <input type="number" name={price_Id} data-id={idx} id={price_Id} value={menu[idx].price} className="price"></input>

                                <label htmlFor={description_Id}>{`Description`}</label>
                                <input type="text" name={description_Id} data-id={idx} id={description_Id} value={menu[idx].description} className="description"></input>
                                </SelectCSS>
                            </MenuContainer>
                            )
                        }
                        )
                    }
                    <div className="input-field">
                        <Button variant="success" onClick={this.onSubmitHandler}>Create</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        createOrder: (order) => dispatch(createOrder(order))
    }
}

const MenuContainer = styled.div`
        border-style: solid;
        border-color: rgba(0, 0, 0, .5);
        padding: 20px;
        margin: 20px;
    `

const SelectCSS = styled.div`
    width: 50%;
    display: block;
    margin-right: auto 
`


export default connect(null, mapDispatchToProps)(OrderCreator)
