import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import '../index.css'

// Dashboard mode: separate tabs (Visibility/Citation/Progress) and publish endpoint
window.__DASHBOARD_MODE__ = true
window.__PUBLISH_API__ = '/api/publish-dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
