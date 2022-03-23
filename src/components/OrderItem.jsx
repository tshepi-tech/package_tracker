//NPM Packages
import React from "react";

export default function OrderItem({ item }) {
  const { eta, id, sender, status } = item;

  return (
    <section>
      <h2>{status}</h2>
      <p>{sender}</p>
      <p>{eta}</p>
    </section>
  );
}
