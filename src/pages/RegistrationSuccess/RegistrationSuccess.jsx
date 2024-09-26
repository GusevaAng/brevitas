import React from 'react'
import styles from './RegistrationSuccess.module.css'
import { useNavigate } from 'react-router-dom'


const RegistrationSuccess = () => {

    const navigate = useNavigate()

    const handleReturnToMain = () => {
        navigate('/')
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h4 className={styles.registrationSuccess}> Thank you for registering! </h4>
                <p className={styles.textInformation}> Follow the instructions in the mail </p>
                <p className={styles.textInformation}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui fugiat sit dicta dolore at perspiciatis voluptates et vel? Repellat commodi quas quos voluptates cum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus repudiandae doloribus!</p>
                <button onClick={handleReturnToMain} className={styles.buttonToMain}> return to main page </button>
            </div>
        </div>
       
    )
}

export default RegistrationSuccess