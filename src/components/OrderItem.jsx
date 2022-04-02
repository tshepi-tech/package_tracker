//NPM Packages
import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function OrderItem({ item }) {
  const { eta, id, sender, location_name } = item;

  return (
    <section className="order_box">
      <div className="order_boxTop">
        <h3>{sender}</h3>
        <p>
          <Moment date={eta} format="MMM Do YYYY" />
        </p>
      </div>
      <div className="order_boxBottom">
        <Link to={`/order/${id}`}>More information</Link>
      </div>
    </section>
  );
}
