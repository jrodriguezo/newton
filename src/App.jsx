import './App.css'
import googleAuth from './utils/googleAuth'

function App() {
  return (
    <div className="App">
     
        <button onClick={googleAuth}>
          Login
        </button>
        
    </div>
  )
}

export default App
