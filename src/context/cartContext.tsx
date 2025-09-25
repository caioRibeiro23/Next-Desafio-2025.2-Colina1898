"use client";

import { ProdutoType } from "@/types/data";
import { createContext, useState, useContext, ReactNode } from "react";

export interface CartItem extends ProdutoType {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: ProdutoType, quantity?: number) => void;
    removeFromCart: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (produto: ProdutoType) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === produto.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === produto.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            else {
                return [...prevCart, { ...produto, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    }
    const decreaseQuantity = (id: number | undefined) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            else {
                return prevCart.filter(item => item.id !== id);
            }
        });
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price ?? 0) * item.quantity, 0);
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, clearCart, getTotalItems, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}