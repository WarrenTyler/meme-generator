import { useEffect, useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((memesData) => setAllMemes(memesData.data.memes));
  }, []);

  const getMemeImage = (event) => {
    event.preventDefault();

    const { url } = allMemes[Math.floor(Math.random() * allMemes.length)];

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="p-9">
      <form className="grid grid-rows-form-layout grid-cols-2 gap-4">
        <input
          name="topText"
          className="border rounded-md border-grayish pl-2"
          type="text"
          placeholder="Top text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          name="bottomText"
          className="border rounded-md border-grayish pl-2"
          type="text"
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="col-span-full text-white bg-gradient-purple"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </form>
      <div className="relative pt-4">
        <img src={meme.randomImage} className="w-full rounded-sm" />
        <h2 className="absolute w-80 text-center left-1/2 transform -translate-x-1/2 my-4 px-2 font-impact text-2xl uppercase text-white tracking-wide top-0 text-shadow shadow-black">
          {meme.topText}
        </h2>
        <h2 className="absolute w-80 text-center left-1/2 transform -translate-x-1/2 my-4 px-2 font-impact text-2xl uppercase text-white tracking-wide bottom-0 text-shadow shadow-black">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};
export default Meme;
