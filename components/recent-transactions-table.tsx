import Image from "next/image";
import React from "react";
import { GlowingEffect } from "./ui/glowing-effect";

interface Transaction {
  id: number;
  name: string;
  date: string;
  amount: string;
  status: string;
  iconUrl: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactionsTable: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => {
  return (
    <div
      id="step-3"
      className="relative bg-custom-purple rounded-xl p-6 col-span-2"
    >
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold">Recent transactions</h3>
        <button className="text-sm text-[#AEABD8] font-semibold">
          See All
        </button>
      </div>

      <div className="w-full overflow-x-scroll">
        <div className="min-w-[480px]">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-[#AEABD8] text-sm">
                <th className="pb-4 font-normal">Name</th>
                <th className="pb-4 font-normal">Date</th>
                <th className="pb-4 font-normal">Amount</th>
                <th className="pb-4 font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-t border-[#2e2a4a]">
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-2 overflow-hidden">
                        <Image
                          src={transaction.iconUrl}
                          alt={transaction.name}
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span>{transaction.name}</span>
                    </div>
                  </td>
                  <td className="py-4">{transaction.date}</td>
                  <td className="py-4">{transaction.amount}</td>
                  <td className="py-4">
                    <span className="text-xs flex items-center justify-center text-custom-success bg-custom-success-foreground rounded-full py-2">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactionsTable;
