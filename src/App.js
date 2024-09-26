import { HashRouter, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import Main from './pages/Main/Main'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { ThemeProvider } from './store/ThemeContext'
import RegistrationSuccess from './pages/RegistrationSuccess/RegistrationSuccess'
import Account from './pages/Account/Account'


const App = () => {
  return (
    <div className={styles.container}>
      <ThemeProvider>
        <HashRouter>
          <Routes>
            <Route path='/' element={ <Main /> }/>
            <Route path='sign-in' element={ <SignIn /> } />
            <Route path='sign-up' element={ <SignUp /> } />
            <Route path='/registration-success' element={ <RegistrationSuccess /> } />
            <Route path='/account' element={ <Account /> } />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </div>
  )
}

export default App