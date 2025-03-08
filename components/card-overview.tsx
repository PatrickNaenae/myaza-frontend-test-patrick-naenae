"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Eye, EyeOff } from "lucide-react";

interface CardOverviewProps {
  cardBalance: string;
  currentBalance: string;
  cardNumber: string;
  expirationDate: string;
}

const CardOverview: React.FC<CardOverviewProps> = ({
  cardBalance,
  currentBalance,
  cardNumber,
  expirationDate,
}) => {
  const [isCardBalanceVisible, setCardBalanceVisible] = useState(false);
  const [isCurrentBalanceVisible, setCurrentBalanceVisible] = useState(false);
  const [isExpirationDateVisible, setExpirationDateVisible] = useState(false);

  const maskedCardNumber = cardNumber
    ? cardNumber.slice(0, 12).replace(/\d/g, "*") + cardNumber.slice(12)
    : "";

  return (
    <div id="step-2" className="relative bg-custom-purple rounded-xl p-6">
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <h3 className="text-2xl font-semibold mb-4">My Card</h3>

      <div className="mb-2">
        <span className="text-[#8C89B4] text-base">Card Balance</span>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold" data-testid="card-balance">
            {isCardBalanceVisible ? cardBalance : "****"}
          </h2>
          <button
            onClick={() => setCardBalanceVisible(!isCardBalanceVisible)}
            className="ml-2 text-sm text-[#8C89B4] focus:outline-none cursor-pointer"
            aria-label="Toggle card balance visibility"
            data-testid="toggle-card-balance"
          >
            {isCardBalanceVisible ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-y-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl p-8 mt-6 relative overflow-hidden">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <span className="text-sm opacity-80">Current Balance</span>
            <div className="flex items-center lg:flex-col lg:items-start">
              <h3 className="text-2xl font-bold" data-testid="current-balance">
                {isCurrentBalanceVisible ? currentBalance : "****"}
              </h3>
              <button
                onClick={() =>
                  setCurrentBalanceVisible(!isCurrentBalanceVisible)
                }
                className="ml-2 text-sm text-[#8C89B4] focus:outline-none cursor-pointer"
                aria-label="Toggle current balance visibility"
                data-testid="toggle-current-balance"
              >
                {isCurrentBalanceVisible ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
          </div>
          <Image
            src="/mastercard.svg"
            alt="master card"
            width={55.86}
            height={38.57}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">{maskedCardNumber}</div>
          <div className="text-sm">
            {isExpirationDateVisible ? expirationDate : "**/**"}
            <button
              onClick={() => setExpirationDateVisible(!isExpirationDateVisible)}
              className="ml-2 text-sm text-[#8C89B4] focus:outline-none cursor-pointer"
              data-testid="toggle-expiration-date"
              aria-label="Toggle expiration date visibility"
            >
              {isExpirationDateVisible ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>
        <Image
          src="/curve-1.svg"
          alt="curve"
          width={398.45}
          height={242.7}
          className="absolute -right-24 -top-16 "
        />

        <Image
          src="/curve-2.svg"
          alt="curve"
          width={398.45}
          height={242.7}
          className="absolute -left-24 -bottom-16"
        />
      </div>

      <div className="flex justify-center mt-5 mb-4">
        <div className="w-6 h-1.5 bg-white rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <button className="bg-custom-purple-light text-custom-purple-dark text-center py-3 rounded-lg">
          Manage Cards
        </button>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-custom-purple-light bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Transfer
        </button>
      </div>
    </div>
  );
};

export default CardOverview;
