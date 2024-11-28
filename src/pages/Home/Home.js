import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

function Home() {
  return (
    <diV className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="sale" />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </diV>
  );
}

export default Home;
