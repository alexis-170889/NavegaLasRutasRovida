import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);


    const agregarAlCarrito = (producto, cantidad = 1) => {
        setCarrito((prev) => {
            const existe = prev.find((item) => item.id === producto.id);
            if (existe) {
                return prev.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                );
            }
            return [...prev, { ...producto, cantidad }];
        });
    };

    const eliminarDelCarrito = (id) => {
        setCarrito((prev) => prev.filter((item) => item.id !== id));
    };

    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);

    return (
        <AppContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                eliminarDelCarrito,
                numero: totalItems,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};