//NPM Packages
import { useEffect, useState } from "react";

//Project Files
import Path from "./components/Path";
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
      {status === 0 && <LoadingScreen />}
      {status === 1 && <Path orders={orders} />}
      {status === 2 && <ErrorScreen />}
    </div>
  );
}
