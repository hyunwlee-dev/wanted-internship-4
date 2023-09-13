import React, { useState } from "react";
import { Chart } from "@/components/Chart";
import { useTimeSeries } from "@/context/TimeSeriesContext";
import { GuButtons } from "@/components/Button";

const TimeSeriesChartContainer = () => {
  const { timeSeries } = useTimeSeries();
  const [pickedId, setPickedId] = useState(0);
  const pickGuButton = (index: number) => {
    setPickedId(index);
  }
  const barValues = timeSeries?.barValues
    .map(item =>
      (item.id !== timeSeries.guTable[pickedId]) ? item.value_bar : 0
    );
  const pickedBarValues = timeSeries?.barValues
    .map(item =>
      (item.id === timeSeries.guTable[pickedId]) ? item.value_bar : 0
    );
  return (
    <>
      {timeSeries &&
        <GuButtons
          guTable={timeSeries?.guTable}
          pickedId={pickedId}
          pickGuButton={pickGuButton}
        />
      }
      {timeSeries &&
        <Chart
          categories={timeSeries?.options}
          barValues={barValues || []}
          pickedBarValues={pickedBarValues || []}
          pickedSeriesCategory={timeSeries?.guTable[pickedId] || '해제'}
          areaValues={timeSeries?.areaValues}
        />
      }
    </>
  )
}

export default TimeSeriesChartContainer;
