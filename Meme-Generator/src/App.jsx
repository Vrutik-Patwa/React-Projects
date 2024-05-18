import { useState } from "react";
import Display from "./Components/Display";
function App() {
  const [darkmode, setDarkmode] = useState(true);
  function Darkmode(e) {
    e.preventDefault();
    setDarkmode((prevState) => !prevState);
    console.log(darkmode);
  }
  const styles = {
    backgroundColor: darkmode ? "#000000" : "#FFFFFF",
  };
  return (
    <div className="h-screen w-screen flex justify-center" style={styles}>
      <Display func={Darkmode} />
    </div>
  );
}

export default App;
