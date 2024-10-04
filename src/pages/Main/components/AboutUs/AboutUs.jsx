import React, { useContext } from 'react' 
import styles from './AboutUs.module.css'
import { ThemeContext } from '../ThemeSwitcher/ThemeContext'
import { cn } from '../../../../constants'
import icon_qr from '../../../../assets/main-page/icon-qr.png'
import icon_discount from '../../../../assets/main-page/icon-discount.png'
import icon_wallet from '../../../../assets/main-page/icon-wallet.png'


const AboutUs = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={cn(styles.container, styles[theme])}>
            <div className={cn(styles.ourOffers, styles[theme])}> 
                <h4> what we do  </h4>
                <p> This is some text inside of a div block. </p>
            </div>
            <div className={cn(styles.ourAdvantages, styles[theme])}>
                <div className={styles.qr}>
                    <img src={icon_qr} alt="icon-qr" />
                    <h5> Payment by QR-code   </h5>
                    <p> Non tam praeclarum est scire Latine, quam turpe nescire </p>
                </div>
                <div className={styles.discount}>
                    <img src={icon_discount} alt="icon-discount" />
                    <h5> Discount </h5>
                    <p> Ecce spectaculum dignum, ad quod respiciat intentus operi suo Deu </p>
                </div>
                <div className={styles.wallet}>
                    <img src={icon_wallet} alt="icon-wallet" />
                    <h5> Save to wallet </h5>
                    <p> Beatae plane aures, quae non vocem foris sonantem, sed intus auscultant veritatem docentem  </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs