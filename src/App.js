import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { RoutesWidget } from "./components/RoutesWidget";
import { Footer } from "./components/Footer";

const App = () => {
  const [darkTheme, setdarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setdarkTheme}/>
        <RoutesWidget /> 
        <Footer />
      </div>
    </div>
  );
};

export default App;
