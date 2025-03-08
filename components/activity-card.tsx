"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ActivityCardProps {
  dailyPaymentPercentage: number;
  hobbyPercentage: number;
  otherPercentage: number;
  chartPercentage: number;
  chartLabel: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  dailyPaymentPercentage,
  hobbyPercentage,
  otherPercentage,
  chartPercentage,
  chartLabel,
}) => {
  const data = [
    { name: "Daily Payment", value: dailyPaymentPercentage, color: "#6359E9" },
    { name: "Hobby", value: hobbyPercentage, color: "#64CFF6" },
    { name: "Other", value: otherPercentage, color: "#3A3A5A" },
  ];

  return (
    <div
      id="step-4"
      className="relative min-h-max w-full bg-custom-purple rounded-xl p-6 space-y-6"
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
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Activity</h3>
        <button className="border border-custom-purple-light text-custom-purple-light text-sm px-3 py-1 rounded flex items-center">
          {chartLabel}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="w-full flex flex-col px-12 space-y-8">
        <div className="flex justify-center">
          <div className="relative w-full">
            {" "}
            <ResponsiveContainer
              data-testid="responsive-container"
              width="100%"
              height={200}
            >
              <PieChart data-testid="pie-chart">
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={90}
                  fill="transparent"
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  stroke="none"
                  data-testid="pie"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      data-testid={`cell-${entry.color.replace("#", "")}`}
                      fill={entry.color}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-x-0 bottom-10 text-center">
              <span className="text-xl font-bold">{chartPercentage}%</span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-baseline">
              <div className="w-3 h-3 rounded-full bg-[#6359E9] mr-2"></div>
              <div className="text-sm">Daily payment</div>
            </div>
            <div className="text-lg font-medium">{dailyPaymentPercentage}%</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-baseline">
              <div className="w-3 h-3 rounded-full bg-[#64CFF6] mr-2"></div>
              <div className="text-sm">Hobby</div>
            </div>
            <div className="text-lg font-medium">{hobbyPercentage}%</div>
          </div>
        </div>

        <button className="w-full border border-custom-purple-light text-custom-purple-light text-center py-3 rounded-lg">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
