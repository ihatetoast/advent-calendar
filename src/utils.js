export const checkDay = (mo, day) => {
  const today = new Date();
  return today.getDate() >= day && today.getMonth() + 1 >= mo;
};
// testing it without ... you know ... tests.
// export const checkDayTest = (mo, day) => {
//   return day <= 15 && mo === 4;
// };
export const randoNummo =()=>{
 return Math.floor(Math.random() * 256);
}

//FUNCTIONS TO BUILD THE TREE
// the tree  is 24 days. 25th is the star. not dealt with in the tree.
// get a range of days 1-24 and shuffle those so that thy're not in the same div every day
// 21 of those days are green fir days.
// 3 of those days are for trunk and stand.
// split the shuffled array into two: 3 and 21
export const shuffle = arr => {
  return [...arr].sort(() => Math.random() - 0.5);
};
// range builder for any range. ... in case i want it later
export const buildRange = (size, startAt = 0) => {
  return [...Array(size).keys()].map(i => i + startAt);
};
//uses range and shuffle. returns one.
export const shuffleRange = () => {
  const range = buildRange(24, 1);
  return shuffle(range);
};

export const splitTree = () => {
  const wholeTree = shuffleRange();
  const fir = wholeTree.slice(3);
  const trunk = wholeTree.slice(0, 3);
  return [fir, trunk];
};
export const buildTree = () => {
  let rowLength = 1;
  let rowCounter = 0;

  for (let i = 1; i <= 21; i++) {
    document.write(i + " ");

    rowCounter++;

    if (rowCounter === rowLength) {
      rowLength++;
      rowCounter = 0;
      document.write("<br>");
    }
  }
};
