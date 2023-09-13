// TimeSeries Interface
//
// get(): Promise<TimeSeriesResponse>

import { HttpClient } from "@/httpClient/httpClient";
import { formatDate } from "@/utils/formatDate";

// TimeSeries
// {
//   [timestamp: string]: {
//     id: string;
//     value_area: number;
//     value_bar: number;
//   }
// }
//
// TimeSeriesResponse = {
//   options: string[];
//   barValues: number[];
//   areaValues: number[];
// }

export class TimeSeriesServiceImpl {
  httpClient;
  constructor(httpClient = new HttpClient('')) {
    this.httpClient = httpClient;
  }

  async get() {
    const response = await this.httpClient.fetch({ headers: {} }).get(`/data`);
    const timeSeries = response.data.response;
    const options = Object.keys(timeSeries).map((key) => formatDate(key));
    const barValues = Object.keys(timeSeries).map((key) => ({ id: timeSeries[key].id, value_bar: timeSeries[key].value_bar }));
    const areaValues = Object.keys(timeSeries).map((key) => timeSeries[key].value_area * 100);
    const guTable: string[] = ['해제'];
    Object.keys(timeSeries).forEach(key => {
      if (!guTable.includes(timeSeries[key].id))
        guTable.push(timeSeries[key].id);
    })
    return {
      options: options,
      barValues,
      areaValues,
      guTable,
    }
  }
}
