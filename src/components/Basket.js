import React, { Component } from 'react'

class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "Basket is empy" : <div> You have {cartItems.length} products in cart </div>}
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item=>
                                <li>
                                    <b> {item.title}  </b> x {item.count/2} = {item.price * item.count/2}
                                    <button className="btn btn-danger ml-3" id="remove-item" onClick={(e)=> this.props.handleRemoveFromCart(e, item)}>
                                        X
                                    </button>
                                </li>)}
                        </ul>
                    </div>
                }
                <br/>
                {cartItems.length === 0 ? "Add Products to Cart" : <button className="btn btn-warning" onClick={()=> alert("Sample Checkout !!! ")}> Checkout</button>}
                
            </div>
        )
    }
}

export default Basket;

