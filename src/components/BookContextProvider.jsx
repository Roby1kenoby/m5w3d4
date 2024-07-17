import { createContext, useState } from "react";

export const BookContext = createContext()

export function BookContextProvider({children}) {
    const [selectedBook, setSelectedBook] = useState(null)
    const value = [selectedBook, setSelectedBook]
    return ( 
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    );
}

