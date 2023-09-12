import { useTimeSeries } from "@/context/TimeSeriesContext";
import { HttpClient } from "@/httpClient/httpClient";
import { TimeSeriesServiceImpl } from "@/services/TimeSeriesService";
import React, { useEffect } from "react";

const TimeSeriesChartContainer = () => {
  const { timeSeries } = useTimeSeries();
  console.info('timeSeries: ', timeSeries);
  return (
    <>
      시계열 차트
    </>
  )
}

export default TimeSeriesChartContainer;
