const getFirstThreeWords = (phrase) => {
  return phrase?.split(" ", 3).join(" ");
};

export default getFirstThreeWords;
