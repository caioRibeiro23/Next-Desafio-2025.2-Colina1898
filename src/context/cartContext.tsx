"use client";

import { ProdutoType } from "@/types/data";
import { createContext, useState, useContext, ReactNode } from "react";
import { set } from "zod";

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
    desconto: number | null;
    frete: number | null;
    setDesconto: (desconto: number | null) => void;
    setFrete: (frete: number | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [frete, setFrete] = useState<number|null>(null);
    const [desconto, setDesconto] = useState<number|null>(0);  

    const addToCart = (produto: ProdutoType) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === produto.id && item.title === produto.title);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === produto.id && item.title === produto.title ? { ...item, quantity: item.quantity + 1 } : item
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
        setFrete(null);
        setDesconto(null);
    }

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price ?? 0) * item.quantity, 0);
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, clearCart, getTotalItems, getTotalPrice, desconto, frete, setDesconto, setFrete }}>
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