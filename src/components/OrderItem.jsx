//NPM Packages
import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function OrderItem({ item }) {
  const { eta, id, sender, location_name } = item;

  return (
    <section className="order_box">
      <div className="order_boxTop">
        <p>Sender</p>
        <h3>{sender}</h3>
        <Link to={`/order/${id}`}>Location</Link>
        <h3>{location_name}</h3>
      </div>
      <div className="order_boxBottom">
        <p>
          <Moment date={eta} format="MMM Do YYYY" />
        </p>
      </div>
    </section>
  );
}
