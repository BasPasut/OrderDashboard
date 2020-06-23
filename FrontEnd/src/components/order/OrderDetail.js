import React from 'react'
import Menu from '../style/Menu'
import styled from "styled-components";

function OrderDetail() {

    const Menu = styled.p`
        display: inline
    `

    return (
        <div className="card z-depth-1 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Order of: Pi</span>
                    <Menu>Item 1</Menu>
                    <Menu>Count</Menu>
                    <Menu>Value</Menu>
            </div>
        </div>
    )
}

export default OrderDetail
