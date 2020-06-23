import React from 'react';

const MenuInputs = ({menu}) => {
    return (
        menu.map((val,idx) => {
            let menuName_Id = `name-${idx}`, 
            quantity_Id = `quantity-${idx}`,
            addOn_name_Id = `addOn_name-${idx}`,
            price_Id = `price-${idx}`,
            description_Id = `description-${idx}`
            return(
                <div key={idx}>
                    <label htmlFor={menuName_Id}>{`Menu #${idx+1}`}</label>
                    <input type="text" name={menuName_Id} data-id={idx} id={menuName_Id} value={menu[idx].name} className="name"></input>

                    <label htmlFor={quantity_Id}>{`Quantity`}</label>
                    <input type="number" name={quantity_Id} data-id={idx} id={quantity_Id} value={menu[idx].quantity} className="quantity"></input>

                    <label htmlFor={addOn_name_Id}>{`Add-on`}</label>
                    <input type="text" name={addOn_name_Id} data-id={idx} id={addOn_name_Id} value={menu[idx].addOn_name} className="addOn_name"></input>

                    <label htmlFor={price_Id}>{`Price`}</label>
                    <input type="number" name={price_Id} data-id={idx} id={price_Id} value={menu[idx].price} className="price"></input>

                    <label htmlFor={description_Id}>{`Description`}</label>
                    <input type="text" name={description_Id} data-id={idx} id={description_Id} value={menu[idx].description} className="description"></input>
                </div>
            )
        })
    )
}

export default MenuInputs
