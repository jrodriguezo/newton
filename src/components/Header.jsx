import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUser } from '../redux/features/user/userSlice'
import googleAuth from '../utils/googleAuth'

function Header () {
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
    <div className="flex justify-between items-center p-4 bg-slate-800">
      <div>
        <h1 className='tracking-widest'>Newton</h1>
        <h2 className='tracking-tighter text-purple-300'>The power is your strength</h2>
      </div>
      {user
        ? (
        <div className="flex gap-4">
          <img
            className="h-12 w-12 rounded-full"
            src={user.photoURL}
            alt={user.displayName}
            referrerPolicy="no-referrer"
          />
          <button className="hover:text-slate-300" onClick={handleLogout}>
            Logout
          </button>
        </div>
          )
        : <button onClick={handleLogin}>Login</button>
        }
    </div>
  )
}

export default Header
