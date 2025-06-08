import { useEffect, useState } from "react";
import useCatGifAPIs from "../hooks/useCatGifAPIs";
import getFirstThreeWords from "../utils/getFirstThreeWords";

const CatGif = () => {
  const [fullPhrase, setFullPhrase] = useState("");
  const [gif, setGif] = useState("");
  const { getCatGif, getCatPhrase } = useCatGifAPIs();

  const getPhrase = async () => {
    const phraseData = await getCatPhrase();
    const { fact } = phraseData;
    setFullPhrase(fact);
  };

  const getGif = async () => {
    const threeFirstWords = getFirstThreeWords(fullPhrase);
    const gif = await getCatGif(threeFirstWords);
    setGif(gif?.data[0]?.images?.original);
  };

  useEffect(() => {
    getPhrase();
  }, []);

  useEffect(() => {
    getGif();
  }, [fullPhrase]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignContent: "center",
      }}
    >
      {gif?.url && (
        <img
          src={gif?.url}
          height={200}
          width={200}
          style={{ objectFit: "contain" }}
        />
      )}
      <p style={{ alignContent: "center" }}>{fullPhrase}</p>
    </div>
  );
};

export default CatGif;
