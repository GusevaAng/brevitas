import React, { useContext, useEffect, useRef } from 'react' 
import styles from './Welcome.module.css'
import { Link } from 'react-router-dom'
import { ScrollContext } from '../Navigation/ScrollContext'
import { ThemeContext } from '../ThemeSwitcher/ThemeContext'
import { cn } from '../../../../constants'


const Welcome = () => {

    const homeRef= useRef(null)
    const { setHomeRef } = useContext(ScrollContext)

    useEffect(() => {
        setHomeRef(homeRef.current)
    })

    const { theme } = useContext(ThemeContext)

    return (
        <div id='home' ref={homeRef} className={styles.welcome}>
            <div className={styles.container}>
                <h2 className={styles.greeting}> welcome </h2>
                <div className={styles.signUnUp}>
                    <Link 
                        to={'sign-in'}
                        className={cn(styles.signIn, styles[theme])}
                    > 
                        <span> sign in </span>
                    </Link>
                    <Link 
                        to={'sign-up'}
                        className={cn(styles.signUp, styles[theme])}
                    > 
                        <span> sign up </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome