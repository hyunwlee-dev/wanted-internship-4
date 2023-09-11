import { HttpClient } from "@/httpClient/httpClient";
import { TimeSeriesServiceImpl } from "@/services/TimeSeriesService";
import React, { useEffect } from "react";

const httpClient = new HttpClient('http://localhost:4000');
const timeService = new TimeSeriesServiceImpl(httpClient);

const TimeSeriesChartContainer = () => {
  const testGetData = async () => {
    const response = await timeService.get();
    console.info(response);
  }
  useEffect(() => {
    testGetData();
  }, []);
  return (
    <>
      시계열 차트
    </>
  )
}

export default TimeSeriesChartContainer;
