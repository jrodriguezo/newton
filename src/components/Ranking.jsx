function Ranking ({ rankingData }) {
  if (!rankingData.lenght) return null

  return (
    <section>
      <h1>Ranking</h1>
      <ul>
        {rankingData.map((data, index) => {
          return (
            <li key={index} className="flex items-center gap-4">
              <span>Bench Press:</span>
              <h1>{data.data().benchPress} Kg</h1>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Ranking
