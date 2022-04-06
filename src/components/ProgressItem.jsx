//NPM Packages
import React from "react";
import { Link } from "react-router-dom";

//Project files
import logo from "../images/logo.png";

export default function ProgressItem({ item }) {
  const { alt, progressId, progress, progressThumbURL } = item;

  // Properties
  let imageURL = "";

  // Safeguard
  try {
    imageURL = require(`../images/${progressThumbURL}`);
  } catch {
    imageURL = logo;
  }

  return (
    <Link className="progress_button" to={`/progress/${progressId}`}>
      <img src={imageURL} alt={alt} />
      <h3>{progress}</h3>
    </Link>
  );
}
