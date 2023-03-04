import { useState } from 'react'
import { useSelector } from 'react-redux'
import { COLORS } from '../constants/colors'
import { PANEL_SETTINGS } from '../constants/settings'
import useAuthentication from '../hooks/useAuthentication'
import Settings from '../icons/Settings'
import { selectUser } from '../redux/features/user/userSlice'
import Dropdown from './Structure/Dropdown'

function Header() {
  const { user } = useSelector(selectUser)
  const [openSettings, setOpenSettings] = useState(false)

  const { handleLogin, handleLogout } = useAuthentication()

  return (
    <div className="flex sticky top-0 z-10 justify-between items-center p-4 bg-slate-800 w-full">
      <div>
        <h1 className='tracking-widest'>Newton</h1>
        <h2 className={`tracking-tighter ${COLORS.PURPLE}`}>The power is your strength</h2>
      </div>
      <div className='flex gap-4'>
        <div className='relative text-[#a5673f]'>
          <button onClick={() => setOpenSettings(prev => !prev)}>
            <Settings color='#a5673f' className='w-8 h-8 p-1 bg-orange-300 rounded-[50%] hover:opacity-90' />
          </button>
          <div className={`absolute flex flex-col gap-2 transition-all duration-500 ${openSettings ? 'translate-y-[0%] opacity-1' : 'translate-y-[-20%] opacity-0 pointer-events-none'} top-16 right-0 min-w-[150px] bg-orange-300 border rounded-lg p-2`}>
            <div>
              <label>Language</label>
              <Dropdown id="language" options={Object.values(PANEL_SETTINGS.LANGUAGE)} />
            </div>
            <div>
              <label>Units</label>
              <Dropdown id="units" options={Object.values(PANEL_SETTINGS.UNITS)} />
            </div>
          </div>
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
    </div>
  )
}

export default Header
