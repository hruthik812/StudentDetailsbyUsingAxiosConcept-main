import React from "react";
import { Routes, Route } from "react-router-dom";
import Insert from "./Insert";
import Update from "./Update";
import Delete from "./Delete";
import GetAll from "./GetAll";
import GetOne from "./GetOne";
import "./body.css"; // Import CSS

const Body = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <Routes>
          <Route path="/" index element={<Insert />} />
          <Route path="/getall" element={<GetAll />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/get-one" element={<GetOne />} />
        </Routes>
      </div>
    </div>
  );
};

export default Body;
