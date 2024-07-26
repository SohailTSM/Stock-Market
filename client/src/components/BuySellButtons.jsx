import React from 'react';

function BuySellButtons({ onBuyClick, onSellClick }) {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      <button
        onClick={onBuyClick}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Buy Stock
      </button>
      <button
        onClick={onSellClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sell Stock
      </button>
    </div>
  );
}

export default BuySellButtons;
