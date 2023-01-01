import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import Header from './components/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <main className='flex flex-col items-center w-full'>
        <div className='lg:max-w-5xl w-full'>
          <Header />
          <App />
        </div>
      </main>
    </Provider>
  </React.StrictMode>
)
