import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { GlowingEffect } from "./ui/glowing-effect";

export const SearchInput = () => {
  return (
    <div className="relative hidden md:flex self-end">
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        className="bg-custom-purple border-none pl-4 pr-4 py-2 md:w-[360px] rounded-lg focus:ring-2 focus:ring-purple-500 placeholder:text-[#AEABD8]"
        placeholder="Search for anything..."
      />
    </div>
  );
};
