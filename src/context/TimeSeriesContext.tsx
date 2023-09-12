import { TimeSeriesServiceImpl } from "@/services/TimeSeriesService";
import { TimeSeriesResponse } from "@/types/TimeSeries";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ITimeSeriesProvider {
  children: ReactNode;
  timeSeriesService: TimeSeriesServiceImpl;
}

const TimeSeriesContext = createContext<{ timeSeries: TimeSeriesResponse | null }>({ timeSeries: null });
export const useTimeSeries = () => useContext(TimeSeriesContext);

export const TimeSeriesProvider = ({ children, timeSeriesService }: ITimeSeriesProvider) => {
  const [timeSeries, setTimeSeries] = useState<TimeSeriesResponse | null>(null);
  useEffect(() => {
    timeSeriesService.get().then((timeSeries) => setTimeSeries(timeSeries));
  }, [timeSeriesService, setTimeSeries]);
  return (
    <TimeSeriesContext.Provider
      value={{
        timeSeries
      }}>
      {children}
    </TimeSeriesContext.Provider>
  )
}
