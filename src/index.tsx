import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='bg-gradient-to-r from-[#342C46] via-[#534571] to-[#342C46]  h-screen w-full'>
        <App />
      </div>
    </Provider>
  </React.StrictMode>
)
