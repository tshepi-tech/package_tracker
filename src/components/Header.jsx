//NPM Packages
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to="/">
      <h2 className="header">InstaPacket</h2>
    </Link>
  );
}
