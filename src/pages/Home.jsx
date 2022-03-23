//NPM Packages
import React from "react";

//Project Files
import progress from "../Data/progress.json";
import Header from "../components/Header";
import ProgressItem from "../components/ProgressItem";

export default function Home() {
  const Progress = progress.map((item) => (
    <ProgressItem key={item.id} item={item} />
  ));

  return (
    <section>
      <Header />
      <div>{Progress}</div>
    </section>
  );
}
