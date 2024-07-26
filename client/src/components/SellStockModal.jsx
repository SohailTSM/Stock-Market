import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentMarketAtom } from "../store/atoms";

function SellStockModal({ isOpen, onClose }) {
  const currentMarket = useRecoilValue(currentMarketAtom);
  const [quantity, setQuantity] = useState(1);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Sell {currentMarket}</h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              placeholder="Enter quantity"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            onClick={(e) => {
              e.preventDefault();
              onClose()
              alert(`You sold ${quantity} ${currentMarket}`);
            }}
          >
            Sell
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-red-500 hover:text-red-700 font-semibold focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SellStockModal;
