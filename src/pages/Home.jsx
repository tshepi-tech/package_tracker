//NPM Packages
import React from "react";

//Project Files
import progress from "../Data/progress.json";
import Hero from "../components/Hero";
import ProgressItem from "../components/ProgressItem";

export default function Home() {

  //Properties
  const Progress = progress.map((item) => (
    <ProgressItem key={item.id} item={item} />
  ));

  return (
    <section>
      <Hero />
      <div>{Progress}</div>
    </section>
  );
}
