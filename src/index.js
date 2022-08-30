import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'styles/main.css'
import { AppWrapper } from 'utils/context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>
)
