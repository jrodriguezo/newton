import { useSelector } from "react-redux";
import { BACKGROUNDS } from "../constants/colors";
import { NUMBER_PLACEHOLDER_USER_NO_LOGGED } from "../constants/placeholders";
import Trophy from "../icons/Trophy";
import { selectUser } from "../redux/features/user/userSlice";
import Disable from "./HideContent/Disable";
import DisableValue from "./HideContent/DisableValue";
import Loader from "./Loader";

function Ranking({ rankingData }) {
  const { user } = useSelector(selectUser);

  if (!rankingData.length) return <Loader />;

  const getRank = (index) => {
    const className = "h-8 w-8 mx-auto rotate-6";
    if (index === 0) return <Trophy className={className} />;
    if (index === 1) return <Trophy className={className} color="#C0C0C0" />;
    if (index === 2) return <Trophy className={className} color="#CD7F32" />;
    return index + 1;
  };

  const BG_ROW = {
    0: "bg-purple-300",
    1: "bg-purple-200",
    2: "bg-purple-100",
  };

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg border-purple-600 border-2">
      <table className="w-full">
        <tr className={BACKGROUNDS.PURPLE}>
          <th scope="col" class="py-3 px-6">
            Rank
          </th>
          <th scope="col" class="py-3 px-6">
            Training
          </th>
          <th scope="col" class="py-3 px-6">
            <DisableValue isVisible={user} isLocked={true}>
              PR (Kg)
            </DisableValue>
          </th>
          <th scope="col" class="py-3 px-6">
            <DisableValue isVisible={user} isLocked={true}>
              User
            </DisableValue>
          </th>
        </tr>
        <tbody className="text-center">
          {rankingData.map((data, index) => {
            return Object.entries(data.data().lifts)
              .sort((a, b) => b[1] - a[1])
              .map(([key, value], rank) => {
                const ranking = getRank(rank);
                const background = BG_ROW[rank] ?? "bg-white";
                return (
                  <tr key={index} className={`text-zinc-900 ${background}`}>
                    <th scope="row" className="py-4 px-6">
                      {ranking}
                    </th>
                    <td className="py-4 px-6">{key}</td>
                    <td className={`py-4 px-6`}>
                      <DisableValue isVisible={user}>{value} Kg</DisableValue>
                    </td>
                    <td className={`py-4 px-6`}>
                      <DisableValue isVisible={user}>
                        {data.data().user}
                      </DisableValue>
                    </td>
                  </tr>
                );
              });
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Ranking;
