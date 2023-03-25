import { useSelector } from "react-redux";
import { BACKGROUNDS } from "../constants/colors";
import { TRANSLATE_LIFTINGS } from "../constants/translations/variables";
import Trophy from "../icons/Trophy";
import { selectUnit } from "../redux/features/settings/selectors";
import { selectUser } from "../redux/features/user/userSlice";
import DisableValue from "./HideContent/DisableValue";

function Ranking({ rankingData }) {
  const { user } = useSelector(selectUser);
  const unit = useSelector(selectUnit);

  if (!rankingData.length) return null

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
    <div className="overflow-x-auto relative shadow-md rounded-md border-purple-600 border-2">
      <table className="w-full">
        <tr className={BACKGROUNDS.PURPLE}>
          <th scope="col" className="py-3 px-6">
            Rank
          </th>
          <th scope="col" className="py-3 px-6">
            Training
          </th>
          <th scope="col" className="py-3 px-6">
            <DisableValue isVisible={user} isLocked={true}>
              PR ({unit})
            </DisableValue>
          </th>
          <th scope="col" className="py-3 px-6">
            <DisableValue isVisible={user} isLocked={true}>
              User
            </DisableValue>
          </th>
          <th scope="col" className="py-3 px-6">
            <DisableValue isVisible={user} isLocked={true}>
              Date
            </DisableValue>
          </th>
        </tr>
        <tbody className="text-center">
          {rankingData.map((data, index) => {
            return Object.entries(data.data().lifts)
              .sort((a, b) => (b[1]?.weight ?? b[1]) - (a[1]?.weight ?? a[1]))
              .map(([key, value], rank) => {
                const ranking = getRank(rank);
                const background = BG_ROW[rank] ?? "bg-white";
                return (
                  <tr key={`ranking-${rank}`} className={`text-zinc-900 ${background}`}>
                    <th scope="row" className="py-4 px-6">
                      {ranking}
                    </th>
                    <td className="py-4 px-6">{TRANSLATE_LIFTINGS[key] ?? key}</td>
                    <td className={`py-4 px-6`}>
                      <DisableValue isVisible={user}>{typeof value === 'number' ? value : value.weight}</DisableValue>
                    </td>
                    <td className={`py-4 px-6`}>
                      <DisableValue isVisible={user}>
                        {data.data().user}
                      </DisableValue>
                    </td>
                    <td className={`py-4 px-6`}>
                      <DisableValue isVisible={user}>
                        {value.date}
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
