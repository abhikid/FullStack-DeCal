
import './App.css'
import Image from "./Image.tsx";

function handleFormSubmit() {
  return "from"
}

function App() {
  // React only allows you to return on element or div

  return (
      <div>
        <h1>Scrambled Eggs</h1>
        <h2>Eggs that are scrambled</h2>
        <h3>Take some eggs, scramble them</h3>

        <Image></Image>
      </div>
 
  );
}

export default App;
