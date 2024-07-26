import React from "react";
import { useRecoilState } from "recoil";
import { currentSettingAtom } from "../store/atoms";

const ChartSettings = () => {
  const [currentSetting, setCurrentSetting] =
    useRecoilState(currentSettingAtom);
  return (
    <div className="ml-24 text-2xl">
      {["1m", "5m", "15m", "30m", "1H", "1D", "1W", "1M"].map((v) => {
        return <Button key={v}>{v}</Button>;
      })}
    </div>
  );
};

function Button({ children }) {
  const [currentSetting, setCurrentSetting] =
    useRecoilState(currentSettingAtom);
  return (
    <button
      className={`m-5 shadow rounded-full p-4 ${
        children === currentSetting ? "bg-gray-500 text-extrabold text-white" : ""
      }`}
      onClick={(e) => {
        setCurrentSetting(children);
      }}
    >
      {children}
    </button>
  );
}

export default ChartSettings;
