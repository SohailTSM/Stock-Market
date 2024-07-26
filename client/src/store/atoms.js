import { atom } from "recoil";

export const isLoggedInAtom = atom({
  key: "isLoggedInAtom",
  default: false,
});

export const viewAtom = atom({
  key: "viewAtom",
  default: "signup",
});

export const balanceAtom = atom({
  key: "balanceAtom",
  default: 0.0,
});

export const marketsAtom = atom({
  key: "marketsAtom",
  default: [
    {
      name: "AAPL",
      price: 217.49,
      change: -1.05,
      percentageChange: -0.48046,
    },
    {
      name: "INFY",
      price: 22.01,
      change: 0.15,
      percentageChange: 0.68618,
    },
    {
      name: "TRP",
      price: 41.49,
      change: 0.09,
      percentageChange: 0.21739,
    },
    {
      name: "IXIC",
      price: 17181.72,
      change: -160.69,
      percentageChange: -0.92657,
    },
    {
      name: "EUR/USD",
      price: 1.0857,
      change: 0.00115,
      percentageChange: 0.10631,
    },
    {
      name: "USD/JPY",
      price: 154.675,
      change: 0.735,
      percentageChange: 0.47746,
    },
    {
      name: "BTC/USD",
      price: 67274.06,
      change: 1478.64,
      percentageChange: 2.24733,
    },
    {
      name: "ETH/BTC",
      price: 0.04826,
      change: 0.00001,
      percentageChange: 0.01658,
    },
  ],
});

export const currentMarketAtom = atom({
  key: "currentMarketAtom",
  default: "AAPL",
});

export const currentSettingAtom = atom({
  key: "currentSettingAtom",
  default: "5m",
});
