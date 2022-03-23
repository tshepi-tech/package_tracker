//NPM Packages
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";

//Project Files
import progress from "../Data/progress.json";
import OrderItem from "../components/OrderItem";

export default function OrderList({ orders }) {
  const { progressId } = useParams();

  //Properties
  const orderProgress = progress.find((item) => item.progressId === progressId);
  console.log("orderProgress", orderProgress);

  const filteredOrders = orders.filter((item) => item.status === progressId);
  console.log("filteredorders", filteredOrders);

  const Orders = filteredOrders.map((item) => (
    <OrderItem key={item.id} item={item} />
  ));

  const navigate = useNavigate();

  // Safeguard
  if (progress === undefined) return <Link to="/">Page not found go home</Link>;

  return (
    <section>
      <h2>OrderList</h2>
      <div>{Orders}</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </section>
  );
}
