import { useSelector, useDispatch } from 'react-redux'
import { selectUser, setUser } from './redux/features/user/userSlice'
import googleAuth from './utils/googleAuth'
import './App.css'

function App () {
  const dispatch = useDispatch()
  const { user } = useSelector(selectUser)

  const handleLogin = async () => {
    const userDetails = await googleAuth()
    const { user } = userDetails
    const { providerData } = user
    dispatch(setUser(providerData[0]))
    localStorage.setItem('user', JSON.stringify(providerData[0]))
  }

  const handleLogout = () => {
    dispatch(setUser(null))
    localStorage.removeItem('user')
  }

  return (
    <div className="App">
      { user
        ? <>
            <img src={user.photoURL} alt={user.displayName} referrerPolicy="no-referrer" />
            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        : <button onClick={handleLogin}>
            Login
          </button>
      }
    </div>
  )
}

export default App
