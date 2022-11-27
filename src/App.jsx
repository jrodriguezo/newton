import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc
} from 'firebase/firestore'
import { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { db } from '../firebase.config'
import Header from './components/Header'
import Ranking from './components/Ranking'
import { selectUser } from './redux/features/user/userSlice'

function App () {
  // const { user } = useSelector(selectUser)
  const [rankingData, setRankingData] = useState([])
  // const [benchPress, setBenchPress] = useState('')

  /*
  const updateWorkout = ({ text }) => {
    console.log(text)
    const dbRef = doc(db, 'ranking', user.uid)
    const data = {
      uid: user.uid,
      benchPress: text
    }
    updateDoc(dbRef, data)
      .then((docRef) => {
        console.log('Document has been updated successfully')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const saveWorkout = ({ text }) => {
    console.log(text)
    const dbRef = collection(db, 'ranking')
    const data = {
      uid: user.uid,
      benchPress: text
    }
    addDoc(dbRef, data)
      .then((docRef) => {
        console.log('Document has been added successfully')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  */

  const getRanking = async () => {
    const dbRef = collection(db, 'ranking')
    const docSnap = await getDocs(dbRef)
    setRankingData(docSnap.docs)
  }

  useEffect(() => {
    getRanking()
  }, [])

  /*
  const handleInput = (event) => {
    setBenchPress(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      updateWorkout({ text: benchPress })
    }
  }
  */

  return (
    <div className="bg-slate-700 min-h-screen">
      <Header />
      <Ranking rankingData={rankingData} />
    </div>
  )
}

export default App
