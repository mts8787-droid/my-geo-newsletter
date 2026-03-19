import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../index.css'

// Dashboard mode flags are set in dashboard.html inline script (before ESM imports)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
