import React from 'react'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    return (
        <div className="cart-item">
            <div className="item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
            </div>
            <div className="quantity-controls">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}><FaMinus /></button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}><FaPlus /></button>
            </div>
            <div className="remove-btn">
                <button onClick={() => onRemove(item.id)}><FaTrash /></button>
            </div>
        </div>
    )
}

export default CartItem