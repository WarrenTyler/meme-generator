const Meme = () => {
  return (
    <main className="p-9">
      <form className="grid grid-rows-form-layout grid-cols-2 gap-4">
        <input
          className="border rounded-md border-grayish pl-2"
          type="text"
          placeholder="Top text"
        />
        <input
          className="border rounded-md border-grayish pl-2"
          type="text"
          placeholder="Bottom text"
        />
        <button className="col-span-full text-white bg-gradient-purple">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
};
export default Meme;
