//NPM Packages
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";

//Project Files
import progress from "../Data/progress.json";
import OrderItem from "../components/OrderItem";
import bigImage from "../images/bigImage.jpg";

export default function OrderList({ orders }) {
  const { id } = useParams();
  const navigate = useNavigate();

  //Properties
  const progressCategory = progress.find((item) => item.progressId === id);
  const filteredOrders = orders.filter((item) => item.status === id);
  const pageImage = bigImage;

  // Components
  const Orders = filteredOrders.map((item) => (
    <OrderItem key={item.id} item={item} />
  ));

  // Safeguard
  if (progress === undefined) return <Link to="/">Page not found go home</Link>;

  return (
    <section>
      <h1 className="orderHeading">My Packages</h1>
      <div className="orderList">
        <div>
          <h2 className="category">{progressCategory.progress}</h2>
          <div>{Orders}</div>
          <button className="btn_back" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
        <img src={pageImage} />
      </div>
    </section>
  );
}
