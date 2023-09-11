import React from "react";
import { BaseLayout } from "@/components/BaseLayout";
import TimeSeriesChartContainer from "@/container/TimeSeriesChartContainer";

const Home = ({ }) => {
  return (
    <BaseLayout
      headerText="시계열 차트"
    >
      <TimeSeriesChartContainer />
    </BaseLayout>
  )
}

export default Home;
