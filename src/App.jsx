//NPM Packages
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

//Project Files
import Home from "./pages/Home";
import OrderList from "./pages/OrderList";

export default function App() {
  useEffect(() => {
    fetchOrders();
  }, []);

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const data = await fetch(
      "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
    );

    const orders = await data.json();
    setOrders(orders);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/progress/:progressId"
          element={<OrderList orders={orders} />}
        />
      </Routes>
    </div>
  );
}
