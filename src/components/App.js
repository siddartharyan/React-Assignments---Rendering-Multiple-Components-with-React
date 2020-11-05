import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <div>
        <h2 data-ns-test="project-name">Animals</h2>
        <p data-ns-test="project-description">Cow, Lion, Tiger</p>
      </div>
      <div>
        <h2 data-ns-test="project-name">Pets</h2>
        <p data-ns-test="project-description">Dog, Cat</p>
      </div>
    </>
  );
};

export default App;
