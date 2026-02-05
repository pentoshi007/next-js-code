import { useState, useEffect, useMemo } from "react";

export function useCart() {

    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error('Error saving cart to localStorage:', error);
        }
    }, [cart]);
    //sync across tabs
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'cart') {
                try {
                    const newCart = JSON.parse(event.newValue);
                    setCart(newCart);
                } catch (error) {
                    console.error('Error parsing cart from localStorage:', error);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const addToCart = (product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === product.id);
            if (existingItem) {
                return currentCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...currentCart, { ...product, quantity: 1 }];
        })
    };

    const removeFromCart = (productId) => {
        setCart(currentCart => {
            return currentCart.filter(item => item.id !== productId);
        })
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCart(currentCart => {
            return currentCart.map(item => item.id === productId ? { ...item, quantity } : item);
        })
    };

    //this is not required in react 19 or later
    const total = useMemo(() => {
        return Number((cart.reduce((sum, item) => sum + item.price * item.quantity, 0)).toFixed(2));
    }, [cart]);

    return { cart, addToCart, removeFromCart, updateQuantity, total };
}
