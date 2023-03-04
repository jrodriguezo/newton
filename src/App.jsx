import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import PersonalLiftings from "./components/PersonalLiftings";
import Ranking from "./components/Ranking";
import {
  selectIsRankingUpdated,
  selectUser,
  setIsRankingUpdated,
} from "./redux/features/user/userSlice";
import girl from "@assets/background/girl-deadlifting.jpg";
import Disable from "@components/HideContent/Disable";
import { COLORS } from "@constants/colors";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  const { user } = useSelector(selectUser);
  const isRankingUpdated = useSelector(selectIsRankingUpdated);

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
    <div className="relative z-[1] flex flex-col gap-8 bg-[#0f191e] min-h-screen">
      <div className=" inset-0 absolute z-[-1]">
        <figure className="bg-purple-800">
          <img
            className=" opacity-60 w-full aspect-auto"
            src={girl}
            alt="girl doing deadlift workout"
          />
        </figure>
      </div>
      <section className="flex flex-col gap-8 p-4 mt-32 lg:mt-96">
        <article>
          <h1 className={`text-3xl ${COLORS.PURPLE}`}>World Ranking</h1>
          <small className="block text-sm mb-4">Ordered By Weight</small>
          <Ranking rankingData={rankingData} />
        </article>
        <Disable isVisible={user}>
          <article>
            <h1 className={`text-3xl ${COLORS.PURPLE}`}>New Record</h1>
            <small className="block text-sm mb-4">Add your PR</small>
            <PersonalLiftings />
          </article>
        </Disable>
      </section>
    </div>
  );
}

export default App;
