export type TimeSeriesResponse = {
  options: string[];
  barValues: { id: string, value_bar: number }[];
  areaValues: number[];
  guTable: string[];
}
