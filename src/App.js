import React, { useState, useEffect } from "react";

import { GlobalStyle } from "./theme/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [theme, setTheme] = useState("dark");
  const [hideSidebar, setHideSidebar] = useState(false);

  const handHideSidebar = () => {
    setHideSidebar(!hideSidebar);
  };

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  //
  const windowResize = () => {
    if (window.innerWidth > 966) {
      setHideSidebar(true);
    } else {
      setHideSidebar(false);
    }
  };

  useEffect(() => {
    windowResize();
  }, []);

  window.addEventListener("resize", windowResize);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <BrowserRouter>
          <GlobalStyle />
          <Navbar
            handHideSidebar={handHideSidebar}
            handleTheme={handleTheme}
            theme={theme}
          />
          <Sidebar hideSidebar={hideSidebar} />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
