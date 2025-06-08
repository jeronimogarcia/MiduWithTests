const API_KEY = "eElB0rl3ZExq5fate3zMzAPuV0HjZfQn";

export const getGif = async (searchString) => {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=${API_KEY}&limit=1`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
