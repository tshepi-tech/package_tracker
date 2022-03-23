//NPM Packages
import React from "react";

export default function OrderItem({ item }) {
  const { eta, id, sender } = item;

  return (
    <section>
      <p>{sender}</p>
      <p>{eta}</p>
    </section>
  );
}
