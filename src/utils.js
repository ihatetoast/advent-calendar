export const checkDay = (mo, day) => {
  const today = new Date();
  console.log("i am from utils");
  return today.getDate() === day && today.getMonth() + 1 === mo;
};
