import React from 'react' 
import styles from './Account.module.css'
import { useNavigate } from 'react-router-dom'


const Account = () => {

    const navigate = useNavigate()

    const handleReturnToMain = () => {
        navigate('/')
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h4 className={styles.greetings}> Welcome! </h4>
                <p className={styles.textInformation}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi inventore corporis error dolores fugiat, quibusdam alias consequuntur perspiciatis corrupti vitae.</p>
                <button onClick={handleReturnToMain} className={styles.buttonToMain}> return to main page </button>
            </div>
        </div>
    )
}

export default Account