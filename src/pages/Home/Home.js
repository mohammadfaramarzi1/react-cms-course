import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";
import WidgetSm from "../../components/WidgetSm/WidgetSm";

function Home() {
  return (
    <diV className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="sale" />
      <div className="home-widgets">
        <WidgetSm />
      </div>
    </diV>
  );
}

export default Home;
