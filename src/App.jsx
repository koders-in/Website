import React from "react";
import AnimatedCursor from "react-animated-cursor";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="app">
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="51, 223, 211"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
      <Header />
      <Main />
    </div>
  );
}

export default App;
