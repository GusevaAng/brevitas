import React, { useState } from 'react' 
import styles from './SignIn.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { ApiDataSignIn } from '../../api/ApiDataUsers'
import background from '../../assets/sign-in-page/background-sign-in.jpg'


const SignIn = () => {

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.stopPropagation()
        event.preventDefault()

        const formElement = document.getElementById('signIn')
        const formData = new FormData(formElement)

        const requiredFields = [
            'user_email', 
            'user_password'
        ]

        const newErrors = requiredFields.reduce((errors, field) => {
            if (!formData.get(field)) {
            errors[field] = `Field "${field.replace('user_', '')}" is required`
            }
            return errors
        }, {})
      
        if (Object.keys(newErrors).length > 0) {
          alert(Object.values(newErrors).join('\n'))
          return
        }

        const data = {
             user_email: formData.get('user_email'), 
             user_password: formData.get('user_password')
        }

        try {
            const token = await ApiDataSignIn(data)

            if (token) {
                localStorage.setItem('token', token)
                navigate('/account')
            }
        } catch (error) {
            console.log('error', error)
        }
    }


    const [ showPassword, setShowPassword ] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <img src={background} alt="background" />
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <h4 className={styles.greetingTitle}> Welcome! </h4>
                        <div className={styles.question}>
                            <h5 className={styles.questionAboutAccount}> Don't have an account yet? </h5>
                            <Link to={'/sign-up'}> 
                                <p className={styles.signUp}> sign up </p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <form id='signIn' onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.email}>
                                <label htmlFor='user_email'> Email </label>
                                <input type='email' name='user_email' id='user_email' placeholder='example@email.com' />
                            </div>
                            <div className={styles.password}>
                            <label htmlFor='user_password'> Password </label>
                                <div className={styles.passwordInput}>
                                    <input type={showPassword ? 'text' : 'password'} name='user_password' id='user_password' minLength='5' maxLength='45' />
                                    <button type='button' onClick={togglePasswordVisibility} className={styles.passwordButton}>
                                    {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>
                            <button type='submit'> Sign in </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn