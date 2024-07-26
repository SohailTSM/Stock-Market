import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { balanceAtom } from "../store/atoms";

function AddMoneyModal({ isOpen, onClose }) {
  const [balance, setBalance] = useRecoilState(balanceAtom);
  const [amount, setAmount] = useState(100);
  if (!isOpen) return null;

  function handleAddMoney(e) {
    e.preventDefault();
    setBalance((bal) => parseInt(bal) + parseInt(amount));
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Add Money</h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={amount}
              onChange={(e) => {
                e.preventDefault();
                setAmount(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            onClick={handleAddMoney}
          >
            Add Money
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

export default AddMoneyModal;
