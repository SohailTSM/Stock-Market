import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { balanceAtom } from "../store/atoms";
import AddMoneyModal from "./AddMoneyModal";

function Header() {
  const [balance, setBalance] = useRecoilState(balanceAtom);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      <header className="bg-blue-900 text-white flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">Stock Market App</span>
        </div>
        <div className="space-x-2 text-xl font-medium">
          Balance : {balance} Rs
        </div>
        <div className="space-x-2">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
            onClick={toggleModal}
          >
            Add Money
          </button>
        </div>
      </header>
      <AddMoneyModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default Header;
