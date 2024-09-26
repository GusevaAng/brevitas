import React, { useContext } from 'react' 
import styles from './Main.module.css'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import AboutUs from './components/AboutUs/AboutUs'
import OurServices from './components/OurServices/OurServices'
import SomeSection from './components/SomeSection/SomeSection'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import { ScrollProvider } from '../../store/ScrollContext'
import { ThemeContext } from '../../store/ThemeContext'
import { cn } from '../../constants'


const Main = () => {

    const { theme } = useContext(ThemeContext)
    
    return (
        <div className={cn(styles.main, styles[theme])}>
            <ScrollProvider>
                <Header />
                <section id='home'>
                    <Welcome /> 
                </section>
                <AboutUs />
                <OurServices />
                <SomeSection />
                <section id="contacts">
                    <Contacts />
                </section>
                <Footer />
            </ScrollProvider>
        </div>
    )
}

export default Main