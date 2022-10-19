import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("Sample Test", () => {
  it("Should be true", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
