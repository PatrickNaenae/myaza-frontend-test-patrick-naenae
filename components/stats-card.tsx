import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface StatCardProps {
  title: string;
  value: string;
  percentageChange: string;
  icon: React.ReactNode;
  iconBgColor: string;
  percentageChangeColor: string;
  percentageBgColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  percentageChange,
  icon,
  iconBgColor,
  percentageChangeColor,
  percentageBgColor,
}) => {
  return (
    <div className="relative bg-custom-purple flex items-end justify-between rounded-2xl p-5">
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex items-center ">
        <div
          className={`w-12 h-12 rounded-md ${iconBgColor} flex items-center justify-center mr-3`}
        >
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-custom-purple-light font-normal text-sm">
            {title}
          </span>
          <h2 className="text-2xl font-semibold">{value}</h2>
        </div>
      </div>
      <div className="flex ">
        <span
          className={`text-xs ml-2 px-2 py-1.5 rounded-full ${percentageChangeColor} ${percentageBgColor} text-sm`}
        >
          {percentageChange}
        </span>
      </div>
    </div>
  );
};
