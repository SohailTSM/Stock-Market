import { atom } from "recoil";

export const isLoggedInAtom = atom({
  key: "isLoggedInAtom",
  default: false,
});

export const viewAtom = atom({
  key: "viewAtom",
  default: "main",
});

export const balanceAtom = atom({
  key: "balanceAtom",
  default: 0.0,
});

export const marketsAtom = atom({
  key: "marketsAtom",
  default: [
    { name: "AAPL", price: 100, change: -1, percentageChange: -1 },
    { name: "INFY", price: 0, change: 0, percentageChange: 0 },
    { name: "TRP", price: 0, change: 0, percentageChange: 0 },
    { name: "IXIC", price: 0, change: 0, percentageChange: 0 },
    { name: "EUR/USD", price: 0, change: 0, percentageChange: 0 },
    { name: "USD/JPY", price: 0, change: 0, percentageChange: 0 },
    { name: "BTC/USD", price: 0, change: 0, percentageChange: 0 },
    { name: "ETH/BTC", price: 0, change: 0, percentageChange: 0 },
  ],
});

export const currentMarketAtom = atom({
  key: "currentMarketAtom",
  default: "AAPL",
});
