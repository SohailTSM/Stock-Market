import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentMarketAtom, marketsAtom } from "../store/atoms";
import "../App.css";

function Sidebar() {
  const markets = useRecoilValue(marketsAtom);
  const [currentMarket, setCurrentMarket] = useRecoilState(currentMarketAtom);

  function handleMarket(e, marketName) {
    setCurrentMarket(marketName);
  }

  

  return (
    <aside className="bg-gray-100 w-64 p-4 space-y-2">
      <h2 className="font-bold text-lg">Markets</h2>
      {markets.map((market, index) => (
        <div
          key={index}
          className="flex justify-between bg-white p-2 rounded shadow"
          onClick={(e) => {
            handleMarket(e, market.name);
          }}
        >
          <div className="flex flex-col no-selection">
            <span>{market.name}</span>
            <span>{market.price}</span>
          </div>
          <div
            className={`font-bold flex flex-col justify-center items-center ${
              parseFloat(market.change) >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            <span>
              {parseFloat(market.percentageChange) >= 0
                ? market.percentageChange
                : market.percentageChange * -1}
              %
            </span>
            <span>
              {parseFloat(market.change) >= 0
                ? "+" + market.change
                : market.change}
            </span>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
