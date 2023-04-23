export const generateDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = (today.getMonth() + 1).toString()
  const mmTransformed = mm.length === 2 ? mm : `0${mm}`
  const dd = today.getDate();
  const ddTransformed = dd.length === 2 ? mm : `0${mm}`

  return `${yyyy}/${mmTransformed}/${ddTransformed}`
};
