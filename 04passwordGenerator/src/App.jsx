import { useState } from "react";
import "./App.css";

function App() {
  const [length, stelength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [PassWord, setPassword] = useState("");
  return (
    <>
      <h1 className="text-2xl test-center text-white">PassWord Generator</h1>
    </>
  );
}

export default App;
