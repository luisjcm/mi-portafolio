import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// @ts-ignore: Implicit CSS module import
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)