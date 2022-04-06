//NPM Packages
import { Routes, Route } from "react-router";

// Project files
import Location from "./pages/OrderDetail";
import Home from "./pages/Home";
import OrderList from "./pages/OrderList";

export default function Path({ orders }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/progress/:id" element={<OrderList orders={orders} />} />
      <Route path="/order/:id" element={<Location orders={orders} />} />
    </Routes>
  );
}
