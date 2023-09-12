import React from "react"
import ReactChart from 'react-apexcharts'

interface IProps {
  categories: string[];
  data: number[];
}

export const Chart = ({
  categories,
  data,
}: IProps) => {
  const options = {
    xaxis: {
      categories,
    },
    dataLabels: {
      enabled: false,
    }
  };
  const series = [
    {
      name: "all",
      data: data,
    },
  ];
  return (
    <ReactChart
      options={options}
      series={series}
      type="bar"
    />
  )
}
