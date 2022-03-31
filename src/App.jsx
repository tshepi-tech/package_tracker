//NPM Packages
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

//Project Files
import Location from "./pages/Location";
import Home from "./pages/Home";
import OrderList from "./pages/OrderList";
import ErrorScreen from "./screens/ErrorScreen";
import LoadingScreen from "./screens/LoadingScreen";
import "./styles/styles.css";

export default function App() {
  //Local state
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error.

  //Properties
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  //Methods

  useEffect(() => loadOrders(url, setOrders, setStatus), []);

  async function loadOrders(url, setState, setStatus) {
    try {
      const response = await fetch(url);
      const orders = await response.json();

      setState(orders);
      setStatus(1);
    } catch (error) {
      console.error(`Cannot load the todos from ${url}. Error: ${error}`);
      setStatus(2);
    }
  }

  return (
    <div className="App">
      <Routes>
        {status === 1 && <Route path="/" element={<Home />} />}
        <Route
          path="/progress/:progressId"
          element={<OrderList orders={orders} />}
        />
        <Route
          path="/location/:parcel_id"
          element={<Location orders={orders} />}
        />
      </Routes>
      {status === 0 && <LoadingScreen />}
      {status === 2 && <ErrorScreen />}
    </div>
  );
}
