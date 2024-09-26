import React, { useState } from 'react' 
import styles from './SignUp.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { ApiDataPostUsers } from '../../api/ApiDataUsers'
import background from '../../assets/sign-up-page/background-sign-up.jpg'


const SignUp = () => {

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.stopPropagation()
        event.preventDefault()

        const formElement = document.getElementById('createUser')
        const formData = new FormData(formElement)


        const requiredFields = [
            'user_name', 
            'user_surname', 
            'user_login', 
            'user_birthday', 
            'user_email', 
            'user_password'
        ]

        const newErrors = requiredFields.reduce((errors, field) => {
            if (!formData.get(field)) {
            errors[field] = `Поле "${field.replace('user_', '')}" обязательно для заполнения`
            }
            return errors
        }, {})
      
        if (Object.keys(newErrors).length > 0) {
          alert(Object.values(newErrors).join('\n'))
          return
        }
      

        const data = {
            user_name: formData.get('user_name'), 
            user_surname: formData.get('user_surname'), 
            user_login: formData.get('user_login'), 
            user_birthday: formData.get('user_birthday'),
            user_email: formData.get('user_email'), 
            user_password: formData.get('user_password')
        }

        try {
            await ApiDataPostUsers(data)
            navigate('/registration-success')
        } catch (error) {
            console.log('ошибка добавления нового пользователя', error)
        }
    }


    const [showPassword, setShowPassword] = useState(false)

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
                            <h5 className={styles.questionAboutAccount}> Already have an Account? </h5>
                            <Link to={'/sign-in'}> 
                                <p className={styles.signIn}> sign in </p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <form id='createUser' onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.name}>
                                <label for='user_name'> Name </label>
                                <input type='text' name='user_name' id='user_name' placeholder='Angelina' />
                            </div>
                            <div className={styles.surname}>
                                <label for='user_surname'> Surname </label>
                                <input type='text' name='user_surname' id='user_surname' placeholder='Guseva' />
                            </div>
                            <div className={styles.login}>
                                <label for='user_login'> Login </label>
                                <input type='text' name='user_login' id='user_login' placeholder='GusevaAng' />
                            </div>
                            <div className={styles.birthday}>
                                <label for='user_birthday'> Birthday </label>
                                <input type='date' name='user_birthday' id='user_birthday' />
                            </div>
                            <div className={styles.email}>
                                <label for='user_email'> Email </label>
                                <input type='email' name='user_email' id='user_email' placeholder='example@email.com' />
                            </div>
                            <div className={styles.password}>
                                <label for='user_password'> Password </label>
                                <div className={styles.passwordInput}>
                                    <input type={showPassword ? 'text' : 'password'} name='user_password' id='user_password' minLength='5' maxLength='45' />
                                    <button type='button' onClick={togglePasswordVisibility} className={styles.passwordButton}>
                                    {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>
                            <button type='submit' > Sign up </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp