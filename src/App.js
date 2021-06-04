import React from "react";

import "./App.css";
import Dropzone from "./dropzone/Dropzone";

function App() {
  return (
    <div>
      <p className="title">Drag and Drop</p>
      <div className="content">
        <Dropzone />
      </div>
    </div>
  );
}

export default App;
