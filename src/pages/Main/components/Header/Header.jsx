import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-scroll'
import { ScrollContext } from '../Navigation/ScrollContext'
import { ThemeContext } from '../ThemeSwitcher/ThemeContext'
import { Switch } from '@mui/material'
import { cn } from '../../../../constants'
import icon_light_theme from '../../../../assets/main-page/icon-light-theme.png'
import icon_dark_theme from '../../../../assets/main-page/icon-dark-theme.png'


const Header = () => {

    const { scrollToHome } = useContext(ScrollContext)
    const { scrollToContacts } = useContext(ScrollContext)

    const { theme , setTheme } = useContext(ThemeContext)

    const switchStyles = {
        '& .MuiSwitch-thumb': {
            color: theme === 'light' ? 'white' : 'black',
            boxShadow: theme === 'light' ? '0 1px 1px 0 rgba(0, 0, 0, 0.1)' : '0 1px 1px 0 rgba(0, 0, 0, 0.1)',
            border: theme === 'light' ? '1px solid #676770' : '1px solid white',
            backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
            backgroundImage: theme === 'light' ?  `url(${icon_light_theme})` : `url(${icon_dark_theme})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        },
        '& .MuiSwitch-track': {
            backgroundColor: theme === 'light' ? '#69b9ff' : '#ce96fb',
            boxShadow: theme === 'light' ? '0 2px 4px 0 #0000001a' : '0 2px 4px 0 #ffffff1a',
        },
    }
    
    return (
        <div className={cn(styles.container, styles[theme])}>
            <div className={styles.header}>
                <h1 className={cn(styles.logo, styles[theme])}> brevitas </h1>
                <nav className={styles.navigation}>
                    <Link 
                        to={'home'} 
                        smooth={true} 
                        duration={500} 
                        onClick={scrollToHome}
                        className={styles.home}
                    >
                        <h3 className={cn(styles[theme])}>Home</h3>
                    </Link>
                    <Link  
                        to={'contacts'} 
                        smooth={true} 
                        duration={500} 
                        onClick={scrollToContacts}
                        className={styles.contacts}
                    >
                        <h3 className={cn(styles[theme])}>Contacts</h3>
                    </Link>
                    <div className={styles.themeSwitch}>
                        <Switch 
                            onClick={ () => setTheme(theme === 'light' ? 'dark' : 'light') } 
                            color='primary'
                            size='medium'
                            defaultChecked={false}
                            sx={switchStyles}
                        />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header