import Image from "next/image";

export default function TransactionTable() {
  const transactions = [
    {
      id: 1,
      name: "Adobe After Effect",
      date: "Sat,20 Apr 2020",
      description: "Adobe after Virtual Card top-up",
      amount: "$80.09",
      status: "Deposited",
    },
    {
      id: 2,
      name: "Adobe After Effect",
      date: "Sat,20 Apr 2020",
      description: "Adobe after Virtual Card top-up",
      amount: "$80.09",
      status: "Deposited",
    },
    {
      id: 3,
      name: "Adobe After Effect",
      date: "Sat,20 Apr 2020",
      description: "Adobe after Virtual Card top-up",
      amount: "$80.09",
      status: "Deposited",
    },
    {
      id: 4,
      name: "Adobe After Effect",
      date: "Sat,20 Apr 2020",
      description: "Adobe after Virtual Card top-up",
      amount: "$80.09",
      status: "Deposited",
    },
    {
      id: 5,
      name: "Adobe After Effect",
      date: "Sat,20 Apr 2020",
      description: "Adobe after Virtual Card top-up",
      amount: "$80.09",
      status: "Deposited",
    },
  ];

  return (
    <div className="w-full overflow-x-scroll">
      <div className="min-w-[480px]">
        <table className="w-full">
          <thead>
            <tr className="text-left text-custom-purple-light">
              <th className="pb-3 font-normal">Name</th>
              <th className="pb-3 font-normal">Date</th>
              <th className="pb-3 font-normal">Description</th>
              <th className="pb-3 font-normal">Amount</th>
              <th className="pb-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-[#3a3a5a] last:border-0"
              >
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#EAE5FA] flex items-center justify-center">
                      <Image
                        src="/adobe.svg"
                        alt="Adobe logo"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </div>
                    <span className="text-sm">{transaction.name}</span>
                  </div>
                </td>
                <td className="py-4 text-sm">{transaction.date}</td>
                <td className="py-4 text-sm">{transaction.description}</td>
                <td className="py-4 text-sm">{transaction.amount}</td>
                <td className="py-4 text-sm">
                  <span className="bg-[#1A3527] text-[#02B15A] px-2 py-1.5 rounded-full">
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
