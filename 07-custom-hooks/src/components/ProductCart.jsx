import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
function ProductCart({ product, onAddToCart }) {

    return (
        <div className="product-cart">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product)}><FaShoppingCart /> Add to Cart</button>
        </div>
    )
}

export default ProductCart