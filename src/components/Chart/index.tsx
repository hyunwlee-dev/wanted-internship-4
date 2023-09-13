import React from "react"
import ReactChart from 'react-apexcharts'

interface IProps {
  categories: string[];
  barValues: number[];
  pickedBarValues: number[];
  pickedSeriesCategory: string;
  areaValues: number[];
}

export const Chart = ({
  categories,
  barValues,
  pickedBarValues,
  pickedSeriesCategory,
  areaValues
}: IProps) => {
  const options = {
    xaxis: {
      categories,
    },
    dataLabels: {
      enabled: false,
    },
  };
  const series = [
    {
      name: "value_bar",
      data: barValues,
      type: 'bar'
    },
    {
      name: pickedSeriesCategory,
      data: pickedBarValues,
      type: 'bar'
    },
    {
      name: 'value_area',
      data: areaValues,
      type: 'area',
    }
  ];
  return (
    <ReactChart
      options={options}
      series={series}
    />
  )
}
