import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './index.module.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className={styles.app}>
      <App />  
    </div>
  </React.StrictMode>
)

reportWebVitals()
