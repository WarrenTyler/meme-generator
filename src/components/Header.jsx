const Header = () => {
  return (
    <header className="flex items-center h-16 p-5 text-white bg-gradient-purple">
      <img className="h-full w-auto mr-1.5" src="./images/troll-face.svg" />
      <h2 className="text-xl font-bold mr-auto">Meme Generator</h2>
      <h4 className="text-sm font-medium">Let the meme magic begin!</h4>
    </header>
  );
}
export default Header