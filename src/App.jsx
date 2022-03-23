//NPM Packages
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

//Project Files
import Home from "./pages/Home";
import OrderList from "./pages/OrderList";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/progress/:progressId"
          element={<OrderList orders={orders} />}
        />
      </Routes>
    </div>
  );
}
