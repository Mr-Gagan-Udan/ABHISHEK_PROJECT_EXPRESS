// src/App.js
import React from "react";
import FormComponent from "./components/FormComponent";
import AnotherComponent from "./components/AnotherComponent";

function App() {
  return (
    <div>
      <h1>Custom Hooks Example</h1>
      <h2>Form Component</h2>
      <FormComponent />
      <h2>Another Component</h2>
      <AnotherComponent />
    </div>
  );
}

export default App;
