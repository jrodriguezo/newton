import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase.config";
import { COLORS } from "../constants/colors";
import { WEIGHT_TRAININGS } from "../constants/trainings";
import { selectUser, setIsRankingUpdated } from "../redux/features/user/userSlice";

function PersonalLiftings() {
  const dispatch = useDispatch()
  const { user } = useSelector(selectUser);
  
  const saveWorkout = ({ training, weight }) => {
    const dbRef = collection(db, 'ranking')
    const data = {
      uid: user.uid,
      user: user.displayName.split(' ')[0],
      lifts: {
        [training]: Number(weight),
      },
    };
    addDoc(dbRef, data)
      .then((docRef) => {
        dispatch(setIsRankingUpdated(true))
        console.log('Document has been added successfully')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const updateWorkout = ({ training, weight }) => {
    const dbRef = doc(db, "ranking", user.uid);
    const data = {
      uid: user.uid,
      user: user.displayName.split(' ')[0],
      lifts: {
        [training]: Number(weight),
      },
    };
    setDoc(dbRef, data, { merge: true })
      .then((docRef) => {
        dispatch(setIsRankingUpdated(true))
        console.log("Document has been updated successfully");
      })
      .catch((error) => {
        // if we cannot update the fields introduced by user,
        // that means the user is the first time using app
        saveWorkout({training, weight})
      });
  };

  const [weightNumber, setWeightNumber] = useState(0);
  const [trainingSelected, setTrainingSelected] = useState(
    Object.values(WEIGHT_TRAININGS)[0]
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    updateWorkout({ training: trainingSelected, weight: weightNumber });
  };

  const handleSelect = (event) => {
    const { value } = event.target;
    setTrainingSelected(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        for="trainings"
        className={`block my-2 text-sm font-medium ${COLORS.PURPLE} dark:text-white`}
      >
        Select lift
      </label>
      <select
        onChange={handleSelect}
        value={trainingSelected}
        id="trainings"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-purple-300 block w-full p-2.5"
      >
        {Object.values(WEIGHT_TRAININGS).map((training) => (
          <option className="text-xl py-4" value={training}>
            {training}
          </option>
        ))}
      </select>
      <label
        for="weight"
        className={`block my-2 text-sm font-medium ${COLORS.PURPLE} dark:text-white`}
      >
        Add your weight
      </label>
      <input
        value={weightNumber}
        onChange={(event) => setWeightNumber(event.target.value)}
        type="number"
        id="weight"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-purple-300 block w-full p-2.5"
        placeholder=""
        required
      />
      <div className="flex justify-end my-2">
        <button
          type="submit"
          disabled={weightNumber === 0}
          className="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default PersonalLiftings;
