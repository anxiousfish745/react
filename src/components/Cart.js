import { Card, Button, Row, Col, CloseButton, } from 'react-bootstrap';
import React, { Component } from 'react'

const Cart = ({ cart, name, count, total, removeItem, resetCart }) => {

    return (
        <div>
            <ul class="list-group">
                
                <p>*{count} {name} <CloseButton className="close" onClick={() => removeItem(name)}></CloseButton></p>
            </ul>
            {/* <p><b>Total:</b> ${total}</p> */}

              
        </div>

    )
}

export default Cart;
