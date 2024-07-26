import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { balanceAtom } from "../store/atoms";

function Header() {
  const [balance, setBalance] = useRecoilState(balanceAtom);

  return (
    <>
      <header className="bg-blue-900 text-white flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">Stock Market App</span>
        </div>
        <div className="space-x-2 text-xl font-medium">
          Balance : {balance} Rs
        </div>
      </header>
    </>
  );
}

export default Header;
