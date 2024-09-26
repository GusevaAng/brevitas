import React, { createContext, useEffect, useState } from 'react' 


export const ThemeContext = createContext()

const themes = {
    light: 'light',
    dark: 'dark'
}

export const ThemeProvider = ({ children }) => {

    const [theme , setTheme] = useState(
        localStorage.getItem('theme') || themes.light
    )

    useEffect(() => {
        localStorage.setItem('theme' , theme)
    }, [theme])


    return (
        <ThemeContext.Provider value={{ theme , setTheme }} >
            { children }
        </ThemeContext.Provider>
    )
}