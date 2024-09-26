import React, { createContext, useState } from 'react' 


export const ScrollContext = createContext()

export const ScrollProvider = ({ children }) => {

    const [homeRef, setHomeRef] = useState()

    const scrollToHome = () => {
        if (homeRef) {
            homeRef.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const [contactsRef, setContactsRef] = useState()

    const scrollToContacts = () => {
        if (contactsRef) {
            contactsRef.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <ScrollContext.Provider value={{ scrollToHome , setHomeRef , scrollToContacts , setContactsRef }}>
            { children }
        </ScrollContext.Provider>
    )
}