"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipProps,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

interface AnalyticsCardProps {
  incomeData: { month: string; value: number }[];
  outcomeData: { month: string; value: number }[];
  year: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length >= 2) {
    const incomeValue = payload[0].value;
    const outcomeValue = payload[1].value;

    const income =
      typeof incomeValue === "number" ? incomeValue.toFixed(2) : "N/A";
    const outcome =
      typeof outcomeValue === "number" ? outcomeValue.toFixed(2) : "N/A";

    return (
      <div className="bg-custom-purple-light p-3 rounded-lg shadow-lg text-sm">
        <p className="font-medium">{label}</p>
        <p className="text-[#6359E9]">Income: ${income}</p>
        <p className="text-[#64CFF6]">Outcome: ${outcome}</p>
      </div>
    );
  }
  return null;
};

export const formatYAxisLabel = (value: number) => {
  return `${value / 1000}k`;
};

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  incomeData,
  outcomeData,
  year,
}) => {
  const chartData = incomeData.map((item, index) => ({
    month: item.month,
    income: item.value,
    outcome: outcomeData[index]?.value || 0,
  }));

  return (
    <div
      id="step-1"
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
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-0 mb-6">
        <h3 className="text-xl font-semibold">Analytics</h3>
        <div className="self-end flex items-center">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 rounded-full bg-[#6359E9] mr-2"></div>
            <span className="text-sm">Income</span>
          </div>
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 rounded-full bg-[#64CFF6] mr-2"></div>
            <span className="text-sm">Outcome</span>
          </div>
          <button className="border border-custom-purple-light text-custom-purple-light text-sm px-3 py-1 rounded flex items-center">
            {year}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="h-64 relative">
        <ResponsiveContainer
          data-testid="responsive-container"
          width="100%"
          height="100%"
        >
          <BarChart
            data-testid="bar-chart"
            data={chartData}
            barCategoryGap={12}
            barGap={8}
          >
            <CartesianGrid
              data-testid="cartesian-grid"
              strokeDasharray="8 4"
              vertical={false}
              stroke="#8C89B4"
            />
            <XAxis
              dataKey="month"
              data-testid="x-axis"
              stroke="#8C89B4"
              tick={{ fill: "#8C89B4" }}
            />
            <YAxis
              stroke="transparent"
              data-testid="y-axis"
              tick={{ fill: "#8C89B4" }}
              tickFormatter={formatYAxisLabel}
              domain={[10000, 50000]}
            />
            <Tooltip
              data-testid="tooltip"
              content={<CustomTooltip />}
              cursor={false}
            />
            <Bar
              dataKey="income"
              data-testid="bar"
              fill="#64CFF6"
              barSize={8}
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="outcome"
              data-testid="bar"
              fill="#6359E9"
              barSize={8}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsCard;
