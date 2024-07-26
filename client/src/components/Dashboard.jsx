import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chart from "./Chart";
import BuySellButtons from "./BuySellButtons";
import BuyStockModal from "./BuyStockModal";
import SellStockModal from "./SellStockModal";
import AddMoneyModal from "./AddMoneyModal";

function Dashboard() {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleBuyModal = () => {
    setIsBuyModalOpen(!isBuyModalOpen);
  };

  const toggleSellModal = () => {
    setIsSellModalOpen(!isSellModalOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className="flex bg-gray-100 h-screen p-4 space-x-4">
      <Sidebar />
      <div className="flex-1">
        <Chart />
        <BuySellButtons
          onBuyClick={toggleBuyModal}
          onSellClick={toggleSellModal}
          onAddClick={toggleModal}
        />
      </div>
      <AddMoneyModal isOpen={isModalOpen} onClose={toggleModal} />
      <BuyStockModal isOpen={isBuyModalOpen} onClose={toggleBuyModal} />
      <SellStockModal isOpen={isSellModalOpen} onClose={toggleSellModal} />
    </main>
  );
}

export default Dashboard;
