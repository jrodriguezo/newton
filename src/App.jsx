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
import { COLORS } from "./constants/colors";
import {
  selectUser,
  setIsRankingUpdated,
} from "./redux/features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  const isRankingUpdated = useSelector((prev) => prev.user.isRankingUpdated);
  const [rankingData, setRankingData] = useState([]);

  const getRanking = async () => {
    const dbRef = collection(db, "ranking");
    const docSnap = await getDocs(dbRef);
    setRankingData(docSnap.docs);
    dispatch(setIsRankingUpdated(false));
  };

  useEffect(() => {
    getRanking();
  }, [isRankingUpdated]);

  return (
    <div className="bg-slate-700 min-h-screen">
      <Header />
      <div className="flex flex-col gap-8 p-4">
        <Ranking rankingData={rankingData} />
        {user && (
          <section>
            <h1 className={`text-3xl ${COLORS.PURPLE}`}>New Record</h1>
            <small className="block text-sm mb-4">Add your PR</small>
            <PersonalLiftings />
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
