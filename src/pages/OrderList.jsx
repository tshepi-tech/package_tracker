//NPM Packages
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";

//Project Files
import progress from "../Data/progress.json";
import OrderItem from "../components/OrderItem";
import bigImage from "../images/bigImage.jpg";

export default function OrderList({ orders }) {
  const { progressId } = useParams();

  //Properties
  const progressCategory = progress.find(
    (item) => item.progressId === progressId
  );

  const filteredOrders = orders.filter((item) => item.status === progressId);

  const Orders = filteredOrders.map((item) => (
    <OrderItem key={item.id} item={item} />
  ));
  const pageImage = bigImage;

  const navigate = useNavigate();

  // Safeguard
  if (progress === undefined) return <Link to="/">Page not found go home</Link>;

  return (
    <section>
      <h2 className="orderHeading">My Packages</h2>
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
