import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";

function Home() {
  return (
    <diV className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="sale" />
    </diV>
  );
}

export default Home;
