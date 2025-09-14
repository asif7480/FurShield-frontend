import React, { createContext, useState } from 'react';
import sampleProducts from '../data/products';

export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [products, setProducts] = useState(sampleProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [pets, setPets] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const addPet = (pet) => {
    setPets(prev => [...prev, pet]);
  };

  return (
    <AppContext.Provider value={{
      products, searchQuery, setSearchQuery, cart, setCart, addToCart, removeFromCart, pets, addPet
    }}>
      {children}
    </AppContext.Provider>
  );
}
