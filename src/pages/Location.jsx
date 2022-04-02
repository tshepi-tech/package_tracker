// NPM packages
import { Link, useParams } from "react-router-dom";
import React from "react";

//Project Files
import OrderItem from "../components/OrderItem";
import Map from "../components/Map";

export default function Location({ orders }) {
  const { id } = useParams();

  // Properties
  const order = orders.filter((item) => item.id === Number(id))[0];
  console.log(order);
  // Safeguard
  if (order === undefined) return <p>The order {id} is not longer available</p>;

  return (
    <div>
      <p>{id}</p>
      {/*  <Map
        latitude={order.location_coordinate_latitude}
        longiture={order.location_coordinate_longitude}
      /> */}
    </div>
  );
}
