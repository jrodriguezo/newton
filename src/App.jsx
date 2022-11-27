import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import Header from "./components/Header";
import PersonalLiftings from "./components/PersonalLiftings";
import Ranking from "./components/Ranking";
import { setIsRankingUpdated } from "./redux/features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const isRankingUpdated = useSelector(prev => prev.user.isRankingUpdated)
  const [rankingData, setRankingData] = useState([]);

  const getRanking = async () => {
    const dbRef = collection(db, "ranking");
    const docSnap = await getDocs(dbRef);
    setRankingData(docSnap.docs);
    dispatch(setIsRankingUpdated(false))
  };

  useEffect(() => {
    getRanking();
  }, [isRankingUpdated]);

  return (
    <div className="bg-slate-700 min-h-screen">
      <Header />
      <div className="p-4">
        <Ranking rankingData={rankingData} />
        <PersonalLiftings />
      </div>
    </div>
  );
}

export default App;
