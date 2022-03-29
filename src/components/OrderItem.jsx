//NPM Packages
import React from "react";
import Moment from "react-moment";

export default function OrderItem({ item }) {
  const { eta, sender, location_name } = item;

  return (
    <section className="order_box">
      <div className="order_boxTop">
        <p>Sender</p>
        <h3>{sender}</h3>
        <p>Location</p>
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
