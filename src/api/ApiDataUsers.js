import axios from 'axios' 

const axiosInstance = axios.create( {baseURL: 'http://localhost:3000'} )

// 1) POST /users - регистрация нового пользователя
export const ApiDataPostUsers = async(dataUser) => {
    try {
        const response = await axiosInstance.post('/api/users', dataUser)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

// 2) POST /signIn - авторизация пользователя
export const ApiDataSignIn = async(dataUser) => {
    try {
        const response = await axiosInstance.post('/api/signIn', dataUser)
        return response.data
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // @TODO: продумать вместо alert выводить ошибку о неверном логине/пароле в виде всплывающего окна (или что-нибудь другое)
            alert('Incorrect login or password')
        } else {
            console.log('Error during authorization', error)
        }
    }
}
