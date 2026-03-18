import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../index.css'

// Dashboard mode: publish to separate endpoint with different slugs
window.__PUBLISH_API__ = '/api/publish-dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
