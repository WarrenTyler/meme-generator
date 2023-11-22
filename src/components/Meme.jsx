import { useEffect, useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const getMemes = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const memesData = await response.json();
      setAllMemes(memesData.data.memes);
    };
    getMemes();
  }, []);

  const getMemeImage = (event) => {
    event.preventDefault();

    const { url } = allMemes[Math.floor(Math.random() * allMemes.length)];

    setMeme((prevMeme) => ({
      // clear the text inputs
      topText: "",
      bottomText: "",
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
      <form className="grid grid-rows-form-layout md:grid-rows-md-form-layout sm:grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="topText"
          className="border rounded-md md:rounded-lg border-grayish pl-2"
          type="text"
          placeholder="Top text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          name="bottomText"
          className="border rounded-md md:rounded-lg border-grayish pl-2"
          type="text"
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="col-span-full text-white bg-gradient-purple md:text-xl rounded-md md:rounded-lg"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </form>
      <div className="relative pt-4">
        <img
          src={meme.randomImage}
          className="w-full rounded-md md:rounded-lg"
        />
        <h2 className="absolute w-80 text-center left-1/2 transform -translate-x-1/2 my-4 px-2 font-impact text-2xl md:text-3xl lg:text-4xl uppercase text-white tracking-wide top-0 text-shadow md:text-shadow-md lg:text-shadow-lg shadow-black">
          {meme.topText}
        </h2>
        <h2 className="absolute w-80 text-center left-1/2 transform -translate-x-1/2 my-4 px-2 font-impact text-2xl md:text-3xl lg:text-4xl uppercase text-white tracking-wide bottom-0 text-shadow md:text-shadow-md lg:text-shadow-lg shadow-black">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};
export default Meme;
