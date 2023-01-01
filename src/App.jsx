import React, { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
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
import girl from "./assets/background/girl-deadlifting.jpg";
import Disable from "./components/Disable";

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
    <div className="min-h-screen">
      <div className="bg-purple-800 absolute w-full max-w-5xl">
        <img
          className="opacity-60 w-full aspect-auto"
          src={girl}
          alt="girl doing deadlift workout"
        />
      </div>
      <div className="relative top-36 lg:top-96 flex flex-col gap-8 p-4">
        <section>
          <h1 className={`text-3xl ${COLORS.PURPLE}`}>World Ranking</h1>
          <small className="block text-sm mb-4">Ordered By Weight</small>
          <Ranking rankingData={rankingData} />
        </section>
        <Disable isVisible={user}>
          <section>
            <h1 className={`text-3xl ${COLORS.PURPLE}`}>New Record</h1>
            <small className="block text-sm mb-4">Add your PR</small>
            <PersonalLiftings />
          </section>
        </Disable>
      </div>
    </div>
  );
}

export default App;
