import React, { useContext, useEffect, useRef } from 'react' 
import styles from './Contacts.module.css'
import { Link } from 'react-router-dom'
import { ScrollContext } from '../Navigation/ScrollContext'
import { ThemeContext } from '../ThemeSwitcher/ThemeContext'
import { cn } from '../../../../constants'
import icon_telegram from '../../../../assets/main-page/icon-telegram.svg'
import icon_vk from '../../../../assets/main-page/icon-vk.svg'
import icon_tiktok from '../../../../assets/main-page/icon-tiktok.svg'
import icon_google from '../../../../assets/main-page/icon-google.svg'


const Contacts = () => {

    const contactsRef= useRef(null)
    const { setContactsRef } = useContext(ScrollContext)

    useEffect(() => {
        setContactsRef(contactsRef.current)
    })

    const { theme } = useContext(ThemeContext)

    return (
        <section id='contacts' ref={contactsRef} className={styles.container}>
            <div className={styles.informations}>  
                <h4 className={cn(styles.title, styles[theme])}> About brevitas </h4>
                <p className={cn(styles.description, styles[theme])}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur eaque aspernatur saepe adipisci sunt nam voluptatibus dolores quaerat nesciunt vel molestias libero inventore illum dicta corporis, labore dignissimos. Nihil. </p>
            </div>
            <div className={cn(styles.socials, styles[theme])}>
                <h4> Social </h4>
                <div className={styles.telegram}>
                    <img src={icon_telegram} alt="icon telegram" />
                    <Link to={'https://t.me'}> Telegram </Link>
                </div>
                <div className={styles.vk}>
                    <img src={icon_vk} alt="icon vk" />
                    <Link to={'https://vk.com'}> VKontakte </Link>
                </div>
                <div className={styles.tiktok}>
                    <img src={icon_tiktok} alt="icon tiktok" />
                    <Link to={'https://www.tiktok.com'}> TikTok </Link>
                </div>
                <div className={styles.google}>
                    <img src={icon_google} alt="icon google+" />
                    <Link to={'https://plus.google.com'}> Google+ </Link>
                </div>
            </div>
        </section>
    )
}

export default Contacts