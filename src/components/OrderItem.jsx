//NPM Packages
import React from "react";

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
        <p>{eta}</p>
      </div>
    </section>
  );
}
