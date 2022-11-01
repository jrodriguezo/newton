import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setUser, setUserAsync } from './redux/features/user/userSlice'
import googleAuth from './utils/googleAuth'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const handlerClick = async () => {
    const userDetails = await googleAuth();
    dispatch(setUserAsync(userDetails))
  }

  // TODO: manage user
  console.log({user})

  return (
    <div className="App">
      <button onClick={handlerClick}>
        Login
      </button>
    </div>
  )
}

export default App
