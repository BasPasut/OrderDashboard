import React from 'react'
import styled from "styled-components";
import {connect} from 'react-redux'

function OrderDetail(props) {
    const {orders} = props
    return (
        <div className="card z-depth-1 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Order of: {orders.customerName}</span>
                    {
                            orders.menu.map(menu => {
                                return(
                                    <div>
                                        <Menu>Hello</Menu>
                                        <Menu>Count</Menu>
                                        <Menu>Value</Menu>
                                    </div>
                                )
                            }
                        )
                    }
                    
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(OrderDetail)

const Menu = styled.p`
display: inline
`