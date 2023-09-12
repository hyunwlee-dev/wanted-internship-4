import React, { useState } from "react";
import { Chart } from "@/components/Chart";
import { useTimeSeries } from "@/context/TimeSeriesContext";

const TimeSeriesChartContainer = () => {
  const { timeSeries } = useTimeSeries();
  console.info(timeSeries?.barValues)
  return (
    <>
      시계열 차트
      {timeSeries &&
        <Chart categories={timeSeries?.options} data={timeSeries?.barValues} />
      }
    </>
  )
}

export default TimeSeriesChartContainer;
