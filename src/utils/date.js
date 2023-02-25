export const generateDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = (today.getMonth() + 1).toString()
  const mmTransformed = mm.length === 2 ? mm : `0${mm}`
  let dd = today.getDate();

  return `${yyyy}/${mmTransformed}/${dd}`
};
