import API_KEY from "../keys/giPhyKey";

const useCatGifAPIs = () => {
  const getCatGif = async (searchString) => {
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=${API_KEY}&limit=1`
      );
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getCatPhrase = async () => {
    try {
      const res = await fetch("https://catfact.ninja/fact");
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return { getCatGif, getCatPhrase };
};

export default useCatGifAPIs;
