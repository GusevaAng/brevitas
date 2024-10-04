import React, { useContext, useState } from 'react' 
import styles from './OurServices.module.css'
import { ThemeContext } from '../ThemeSwitcher/ThemeContext'
import { cn } from '../../../../constants'
import services_one from '../../../../assets/main-page/services-one.jpg'
import services_two from '../../../../assets/main-page/services-two.jpg'


const OurServices = () => {

    const [learnMoreOne, setLearnMoreOne] = useState(false)
    const [learnMoreTwo, setLearnMoreTwo] = useState(false)

    const { theme } = useContext(ThemeContext)
    

    return (
        <div className={cn(styles.ourServices, styles[theme])}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h4 className={cn(styles.title, styles[theme])}> Services </h4>
                    <p className={cn(styles.description, styles[theme])}> This is some text inside of a div block. </p>
                </div>
                <div className={styles.cards}>
                    <div className={cn(styles.servicesOne, styles[theme])}>
                        <img src={services_one} alt="services one" />
                        <h5> Services one </h5>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, et! Veritatis molestias quod facere, architecto at ea saepe, rerum odio harum non nobis sed totam voluptates quasi deserunt sequi quidem! </p>
                        <div className={styles.learnMore}>
                            <button onClick={(() => setLearnMoreOne(!learnMoreOne))}> Learn more </button>
                            { learnMoreOne && 
                                <ul className={cn(styles.hidden, styles[theme])}>
                                    <li> Lorem ipsum dolor sit amet consectetur. </li>
                                    <li> Lorem ipsum dolor sit amet. </li>
                                    <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laboriosam! </li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className={cn(styles.servicesTwo, styles[theme])}>
                        <img src={services_two} alt="services two" />
                        <h5> Services two </h5>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, et! Veritatis molestias quod facere, rerum odio harum non nobis sed totam voluptates quasi deserunt sequi quidem! Lorem ipsum dolor sit amet.</p>
                        <div className={styles.learnMore}>
                            <button onClick={(() => setLearnMoreTwo(!learnMoreTwo))}> Learn more </button>
                            { learnMoreTwo && 
                                <ul className={cn(styles.hidden, styles[theme])}>
                                    <li> Lorem ipsum dolor sit amet consectetur. </li>
                                    <li> Lorem ipsum dolor sit amet. </li>
                                    <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laboriosam! </li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices