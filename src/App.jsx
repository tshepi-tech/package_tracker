//NPM Packages
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

//Project Files
import Home from "./pages/Home";
import OrderList from "./pages/OrderList";

export default function App() {
  //Local state
  const [orders, setOrders] = useState([]);

  //Properties
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  //Methods

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const data = await fetch(url);

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
