// NPM packages
import { Navigate, useParams } from "react-router-dom";
import React from "react";

//Project Files
import Map from "../components/Map";

export default function Location({ orders }) {
  const { id } = useParams();

  // Properties
  const order = orders.filter((item) => item.id === Number(id))[0];

  // Safeguard
  if (order === undefined) return <p>The order {id} is not longer available</p>;

  return (
    <div>
      <Map
        latitude={order.location_coordinate_latitude}
        longitude={order.location_coordinate_longitude}
      />
      <h3>Notes</h3>
      <p>{order.notes}</p>
    </div>
  );
}
