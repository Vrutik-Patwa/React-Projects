import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [theme, setTheme] = useState(true);
  let styles_app, styles_nav;
  if (theme) {
    styles_app = {
      backgroundColor: "white",
      color: "black",
    };

    styles_nav = {
      backgroundColor: "#000000",
      color: "white",
    };
  } else {
    styles_nav = {
      backgroundColor: "white",
      color: "black",
    };

    styles_app = {
      backgroundColor: "black",
      color: "white",
    };
  }

  function changeTheme() {
    setTheme((prevState) => !prevState);
    console.log(theme);
  }
  return (
    <div className="h-screen " style={styles_app}>
      <Navbar theme={changeTheme} style={styles_nav} />
    </div>
  );
}

export default App;
