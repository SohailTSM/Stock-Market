import React from "react";
import { useRecoilState } from "recoil";
import { currentMarketAtom, currentSettingAtom } from "../store/atoms";
import {
  fifteenMinute,
  fiveMinute,
  oneDay,
  oneHour,
  oneMinute,
  oneMonth,
  oneWeek,
  thirtyMinute,
} from "../store/chartData";
import CandlestickChart from "./CandlestickChart";
import ChartSettings from "./ChartSettings";

function Chart() {
  const [currentMarket, setCurrentMarket] = useRecoilState(currentMarketAtom);
  const [currentSetting, setCurrentSetting] =
    useRecoilState(currentSettingAtom);
  let data;
  switch (currentSetting) {
    case "1m":
      data = oneMinute[currentMarket].values;
      break;
    case "5m":
      data = fiveMinute[currentMarket].values;
      break;
    case "15m":
      data = fifteenMinute[currentMarket].values;
      break;
    case "30m":
      data = thirtyMinute[currentMarket].values;
      break;
    case "1H":
      data = oneHour[currentMarket].values;
      break;
    case "1D":
      data = oneDay[currentMarket].values;
      break;
    case "1W":
      data = oneWeek[currentMarket].values;
      break;
    case "1M":
      data = oneMonth[currentMarket].values;
      break;

    default:
      break;
  }
  return (
    <div className="bg-white flex-1 p-4 shadow rounded-lg">
      <h2 className="font-bold text-lg mb-4">{currentMarket}</h2>
      <div className="bg-gray-200rounded flex flex-col gap-12">
        {/* Insert your chart library here */}
        <CandlestickChart data={data} />
        <ChartSettings />
      </div>
    </div>
  );
}

export default Chart;
