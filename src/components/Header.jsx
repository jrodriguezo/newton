import { useSelector } from 'react-redux'
import { COLORS } from '../constants/colors'
import useAuthentication from '../hooks/useAuthentication'
import { selectUser } from '../redux/features/user/userSlice'

function Header () {
  const { user } = useSelector(selectUser)

  const { handleLogin, handleLogout } = useAuthentication()

  return (
    <div className="flex justify-between items-center p-4 bg-slate-800 w-full">
      <div>
        <h1 className='tracking-widest'>Newton</h1>
        <h2 className={`tracking-tighter ${COLORS.PURPLE}`}>The power is your strength</h2>
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
