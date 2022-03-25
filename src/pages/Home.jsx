//NPM Packages
import React from "react";

//Project Files
import progress from "../Data/progress.json";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProgressItem from "../components/ProgressItem";

export default function Home() {
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
