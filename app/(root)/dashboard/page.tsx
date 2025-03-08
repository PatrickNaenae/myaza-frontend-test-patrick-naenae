"use client";

import RecentTransactionsTable from "@/components/recent-transactions-table";
import { SectionHeader } from "@/components/section-header";
import { StatCard } from "@/components/stats-card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { transactions } from "@/lib/data";
import CardOverview from "@/components/card-overview";
import ActivityCard from "@/components/activity-card";
import AnalyticsCard from "@/components/analytics-card";
import { useEffect, useState } from "react";

const incomeData = [
  { month: "Jan", value: 24000 },
  { month: "Feb", value: 32000 },
  { month: "Mar", value: 20000 },
  { month: "Apr", value: 50000 },
  { month: "May", value: 28000 },
  { month: "Jun", value: 16000 },
  { month: "Jul", value: 20000 },
  { month: "Aug", value: 24000 },
];

const outcomeData = [
  { month: "Jan", value: 16000 },
  { month: "Feb", value: 28000 },
  { month: "Mar", value: 12000 },
  { month: "Apr", value: 24000 },
  { month: "May", value: 20000 },
  { month: "Jun", value: 32000 },
  { month: "Jul", value: 28000 },
  { month: "Aug", value: 16000 },
];

const year = "2020";

export default function Page() {
  const [showTooltip, setShowTooltip] = useState<boolean | null>(null);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour") === "true";

    if (hasSeenTour) {
      setShowTooltip(false);
      return;
    }

    const storedShowTooltip = sessionStorage.getItem("showTooltip");
    if (storedShowTooltip === "false") {
      setShowTooltip(false);
    } else {
      setShowTooltip(true);
    }

    const handleStorageChange = () => {
      const storedShowTooltip = sessionStorage.getItem("showTooltip");
      if (storedShowTooltip === "false") {
        setShowTooltip(false);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="w-full pt-20 md:pt-4 lg:pt-8 flex flex-col p-4 lg:p-8  space-y-8 min-h-screen bg-custom-purple-dark text-white">
      <SectionHeader
        title="Welcome Back, Ali 👋"
        description="Here's what's happening with your store today."
      />
      <div className="w-full min-h-full flex flex-col lg:flex-row gap-6">
        <div className="min-h-full w-full lg:w-7/12 flex flex-col gap-6">
          <div className="relative">
            <div id="step-0" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <StatCard
                title="Total Income"
                value="$632.000"
                percentageChange="+1.29%"
                icon={<ArrowDownRight className="h-6 w-6 text-white" />}
                iconBgColor="bg-[#64CFF6]"
                percentageChangeColor="text-custom-success"
                percentageBgColor="bg-custom-success-foreground"
              />
              <StatCard
                title="Total Outcome"
                value="$632.000"
                percentageChange="-1.29%"
                icon={<ArrowUpRight className="h-6 w-6 text-white" />}
                iconBgColor="bg-[#6359E9]"
                percentageChangeColor="text-destructive"
                percentageBgColor="bg-destructive-foreground"
              />
            </div>
            {showTooltip && (
              <div className="absolute -top-5 left-10 bg-custom-purple-dark flex items-center gap-2 text-white text-sm px-3 py-1 rounded tooltip">
                <span className="text-2xl">👈</span> Click here to start the
                tour!
              </div>
            )}
          </div>
          <div className="flex-1">
            <AnalyticsCard
              incomeData={incomeData}
              outcomeData={outcomeData}
              year={year}
            />
          </div>
          <div className="flex-1">
            <RecentTransactionsTable transactions={transactions} />
          </div>
        </div>

        <div className="min-h-full w-full lg:w-5/12 flex flex-col gap-6">
          <div className="flex-1">
            <CardOverview
              cardBalance="$15,595.015"
              currentBalance="$5,750.20"
              cardNumber="5282 3456 7890 1289"
              expirationDate="09/25"
            />
          </div>
          <div className="flex-1">
            <ActivityCard
              dailyPaymentPercentage={55}
              hobbyPercentage={20}
              otherPercentage={25}
              chartPercentage={75}
              chartLabel="Month"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
