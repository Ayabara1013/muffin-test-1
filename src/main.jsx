import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootswatch/dist/morph/bootstrap.min.css'; // Added this :boom:
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
