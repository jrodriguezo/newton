import { BACKGROUNDS, COLORS } from "../constants/colors";
import Trophy from "../icons/Trophy";

function Ranking({ rankingData }) {
  if (!rankingData.length) return null;

  const getRank = (index) => {
    const className = 'h-8 w-8 mx-auto rotate-6'
    if(index === 0) return <Trophy className={className} />
    if(index === 1) return <Trophy className={className} color="#C0C0C0" />
    if(index === 2) return <Trophy className={className} color="#CD7F32" />
    return index + 1
  }

  const BG_ROW = {
    0: 'bg-purple-300',
    1: 'bg-purple-200',
    2: 'bg-purple-100'
  }

  return (
    <section>
      <h1 className={`text-3xl ${COLORS.PURPLE}`}>World Ranking</h1>
      <small className="block text-sm mb-4">Ordered By Weight</small>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg border-purple-600 border-2">
      <table className="w-full">
        <tr className={BACKGROUNDS.PURPLE}>
          <th scope="col" class="py-3 px-6">
            Rank
          </th>
          <th scope="col" class="py-3 px-6">
            Training
          </th>
          <th scope="col" class="py-3 px-6">
            PR - Weight
          </th>
          <th scope="col" class="py-3 px-6">
            User
          </th>
        </tr>
        <tbody className="text-center">
          {rankingData.map((data, index) => {
            return Object.entries(data.data().lifts).sort((a, b) => b[1] - a[1]).map(([key, value], rank) => {
              const ranking = getRank(rank);
              const background = BG_ROW[rank] ?? 'bg-white'
              return (
                <tr
                  key={index}
                  class={`text-zinc-900 ${background}`}
                >
                  <th
                    scope="row"
                    class="py-4 px-6"
                  >
                    {ranking}
                  </th>
                  <td class="py-4 px-6">{key}</td>
                  <td class="py-4 px-6">{value} Kg</td>
                  <td class="py-4 px-6">{data.data().user}</td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
      </div>
    </section>
  );
}

export default Ranking;
