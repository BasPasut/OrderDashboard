import React, { Component } from 'react';
import styled from 'styled-components'
import Select from 'react-select'

class MenuInputs extends Component {


    constructor(props) {
        super(props)
    }

    onChangeHandler(){
        
    }


    render() {
        const { menu } = this.props

        const name = [
            { value: 'Tok', label: 'Tok' },
            { value: 'Chicken', label: 'Chicken' }
          ]

        return (
            menu.map((val, idx) => {
                let menuName_Id = `name-${idx}`,
                    quantity_Id = `quantity-${idx}`,
                    addOn_name_Id = `addOn_name-${idx}`,
                    price_Id = `price-${idx}`,
                    description_Id = `description-${idx}`
                return (
                    <MenuContainer key={idx} className="container">
                        <label htmlFor={menuName_Id}>{`Menu #${idx + 1}`}</label>

                        <Select options={name} defaultValue="Select Menu" data-id={idx} id={menuName_Id} onChange={} value={menu[idx].menu} className="name"/>

                        {/* <input type="text" name={menuName_Id} data-id={idx} id={menuName_Id} value={menu[idx].name} className="name"></input> */}

                        <label htmlFor={quantity_Id}>{`Quantity`}</label>
                        <input type="number" name={quantity_Id} data-id={idx} id={quantity_Id} value={menu[idx].quantity} className="quantity"></input>

                        <label htmlFor={addOn_name_Id}>{`Add-on`}</label>
                        <input type="text" name={addOn_name_Id} data-id={idx} id={idx} value={menu[idx].addOn_name} className="addOn_name"></input>

                        <label htmlFor={price_Id}>{`Price`}</label>
                        <input type="number" name={price_Id} data-id={idx} id={price_Id} value={menu[idx].price} className="price"></input>

                        <label htmlFor={description_Id}>{`Description`}</label>
                        <input type="text" name={description_Id} data-id={idx} id={description_Id} value={menu[idx].description} className="description"></input>
                    </MenuContainer>
                )
            })
        )
    }
}

export default MenuInputs

const MenuContainer = styled.div`
        border-style: solid;
        border-color: rgba(0, 0, 0, .5);
        padding: 20px;
        margin: 20px;
    `