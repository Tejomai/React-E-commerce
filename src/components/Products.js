import React, { Component } from 'react';

class Products extends Component {
    
    render() {
        const prodItems = this.props.products.map(product =>(
            <div className="col-md-4" key={product.uniq}>
                <div className="thumbnail text-center p-5">
                    <a href={`#${product.id}`} onClick={(e) => this.props.handleCart(e, product)} >
                    <img src={`products/${product.uniq}.jpg`} alt={product.title} />
                    <p>{product.title}</p>
                    </a>
                    <div>
                        <p> {product.description} </p>
                        <p> Price: Rs.{product.price} </p> 
                        <button className="btn btn-success" onClick={(e) => this.props.handleCart(e, product)}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        )
        );
        return (
            <div className="row">
                {prodItems}
            </div>
        );
    }
}

export default Products;
