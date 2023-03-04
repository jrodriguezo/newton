import { useState } from 'react'
import { useSelector } from 'react-redux'
import { COLORS } from '../constants/colors'
import useAuthentication from '../hooks/useAuthentication'
import SettingsIcon from '../icons/Settings'
import { selectUser } from '../redux/features/user/userSlice'
import Settings from './Header/Settings'

function Header() {
  const { user } = useSelector(selectUser)
  const [openSettings, setOpenSettings] = useState(false)

  const { handleLogin, handleLogout } = useAuthentication()

  return (
    <div className="sticky flex top-0 z-10 justify-between items-center p-4 bg-slate-800 w-full">
      <div>
        <h1 className='tracking-widest'>Newton</h1>
        <h2 className={`tracking-tighter ${COLORS.PURPLE}`}>The power is your strength</h2>
      </div>
      <div className='flex gap-4'>
        <div className='relative'>
          <button onClick={() => setOpenSettings(prev => !prev)}>
            <SettingsIcon color='#a5673f' className='w-8 h-8 p-1 bg-orange-300 rounded-[50%] hover:opacity-90' />
          </button>
        </div>
        {user
          ? (
            <div className="flex gap-4">
              <img
                className="h-8 w-8 rounded-full"
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
      <Settings isOpen={openSettings} />
    </div>
  )
}

export default Header
