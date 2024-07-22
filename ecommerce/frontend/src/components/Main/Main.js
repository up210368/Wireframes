import React from "react";
import productImages from "../productImages";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/images" render={productImages} />
      </Routes>
    </div>
  );
}

export default Main;
