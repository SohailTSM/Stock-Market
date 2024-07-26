import React from "react";
import { useRecoilState } from "recoil";
import { currentMarketAtom } from "../store/atoms";
import { oneMinute } from "../store/chartData";
import CandlestickChart from "./CandlestickChart";

function Chart() {
  const [currentMarket, setCurrentMarket] = useRecoilState(currentMarketAtom);
  return (
    <div className="bg-white flex-1 p-4 shadow rounded-lg">
      <h2 className="font-bold text-lg mb-4">{currentMarket}</h2>
      <div className="bg-gray-200rounded">
        {/* Insert your chart library here */}
        <CandlestickChart data={oneMinute[currentMarket].values} />
      </div>
    </div>
  );
}

export default Chart;
