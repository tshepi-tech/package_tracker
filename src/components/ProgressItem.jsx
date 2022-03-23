//NPM Packages
import React from "react";
import { Link } from "react-router-dom";

//Project Files
import progress from "../Data/progress.json";

export default function ProgressItem({ item }) {
  const { progressId, progress } = item;

  return (
    <section>
      <h2>progress:{progress}</h2>
      <Link to={`/progress/${progressId}`}>View {progress}</Link>
    </section>
  );
}
