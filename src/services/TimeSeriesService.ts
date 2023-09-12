// TimeSeries Interface
//
// get(): Promise<TimeSeries>

import { HttpClient } from "@/httpClient/httpClient";

// TimeSeries
// {
//   [timestamp: string]: {
//     id: string;
//     value_area: number;
//     value_bar: number;
//   }
// }

export class TimeSeriesServiceImpl {
  httpClient;
  constructor(httpClient = new HttpClient('')) {
    this.httpClient = httpClient;
  }

  async get() {
    const response = await this.httpClient.fetch({ headers: {} }).get(`/data`);
    return response.data.response;
  }
}
