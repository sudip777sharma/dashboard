import React from "react";

import AreaChart from "~/components/Charts/AreaChart";
import AreaChart2 from "~/components/Charts/AreaChart2";
import BubbleChart from "~/components/Charts/BubbleChart";
import CandleStickChart from "~/components/Charts/CandleStickChart";
import DonutChart from "~/components/Charts/DonutChart";
import HeatmapChart from "~/components/Charts/HeatMapChart";
import HorizontalBarChart from "~/components/Charts/HorizontalBarChart";
import HorizontalBarChart2 from "~/components/Charts/HorizontalBarChart2";
import LineChart from "~/components/Charts/LineChart";
import LineChart2 from "~/components/Charts/LineChart2";
import PolarChart from "~/components/Charts/PolarChart";
import RadarChart from "~/components/Charts/RadarChart";
import RadarChart2 from "~/components/Charts/RadarChart2";
import RadialBarChart from "~/components/Charts/RadialBarChart";
import ScatterChart from "~/components/Charts/ScatterChart";
import ScatterChart2 from "~/components/Charts/ScatterChart2";
import StackedBarChart from "~/components/Charts/StackedBarChart";
import VerticalBarChart from "~/components/Charts/VerticalBarChart";
const Chartjs = () => {
  return (
    <div
      className={`flex w-full flex-col items-center gap-6 px-1 py-2 md:px-6
      `}
    >
      <div
        className={` w-full rounded-lg border-[1px] border-[#454960]
        p-1 md:p-4
      `}
      >
        <LineChart />
      </div>
      <div
        className={`flex h-fit w-full flex-col gap-6 rounded-lg md:flex-row 
      `}
      >
        <RadarChart />
        <PolarChart />
      </div>
      <div
        className={` h-full w-full rounded-lg border-[1px] border-[#454960]
        p-1 md:p-4
      `}
      >
        <BubbleChart />
      </div>
      <div
        className={` h-full w-full rounded-lg border-[1px] border-[#454960]
        p-1 md:p-4
      `}
      >
        <ScatterChart />
      </div>
      <div
        className={` h-full w-full rounded-lg border-[1px] border-[#454960]
        p-1 md:p-4
      `}
      >
        <AreaChart />
      </div>
      <div
        className={`flex h-fit w-full flex-col gap-6 rounded-lg md:flex-row 
      `}
      >
        <VerticalBarChart />
        <HorizontalBarChart />
      </div>
    </div>
  );
};

export default Chartjs;
