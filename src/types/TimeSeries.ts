export type TimeSeriesResponse = {
  [timestamp: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  }
}
