import { BACKGROUNDS, COLORS } from "../constants/colors";

function Ranking({ rankingData }) {
  if (!rankingData.length) return null;

  return (
    <section>
      <h1 className={`text-3xl ${COLORS.PURPLE}`}>World Ranking</h1>
      <small className="block text-sm mb-4">Ordered By Weight</small>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full">
        <tr className={BACKGROUNDS.PURPLE}>
          <th scope="col" class="py-3 px-6">
            Pos
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
            console.log(data.data())
            return Object.entries(data.data().lifts).sort((a, b) => b[1] - a[1]).map(([key, value], rank) => {
              return (
                <tr
                  key={index}
                  class={`bg-white text-zinc-900`}
                >
                  <th
                    scope="row"
                    class="py-4 px-6"
                  >
                    {rank + 1}
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
