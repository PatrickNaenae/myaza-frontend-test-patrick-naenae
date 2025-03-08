import { Plus, CircleEllipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import WalletCard from "@/components/wallet-card";
import TransactionTable from "@/components/transaction-table";
import { SectionHeader } from "@/components/section-header";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Page() {
  return (
    <div className="min-h-full pt-20 md:pt-4 lg:pt-8 w-full flex flex-col p-4 lg:p-8 space-y-8 bg-custom-purple-dark text-white">
      <SectionHeader
        title="My wallets"
        description="Manage all your wallets from here"
      />
      <div className="relative bg-custom-purple rounded-xl p-4 md:p-6">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-4">
          <div className="space-y-1">
            <p className="text-secondary-foreground">
              Your consolidated balance
            </p>
            <h2 className="text-[28px] font-bold">$34,780,267.08</h2>
          </div>
          <div className="self-end flex items-center">
            <Button className="bg-custom-purple-light hover:bg-custom-purple-dark hover:text-white text-custom-purple-dark rounded-lg flex items-center justify-center gap-2 p-3">
              <Plus className="size-4" />
              Add New Wallet
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <CircleEllipsis className="siz-6" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <WalletCard code="NGN" balance="245,800.89" flagSrc="/ngn-flag.svg" />
          <WalletCard code="GBP" balance="245,800.89" flagSrc="/gb-flag.svg" />
          <WalletCard code="USD" balance="245,800.89" flagSrc="/us-flag.svg" />
        </div>
      </div>

      <div className="relative bg-custom-purple rounded-xl p-6">
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
          <h2 className="text-2xl font-semibold">Recent transactions</h2>
          <Button
            variant="link"
            className="text-custom-purple-light hover:text-white"
          >
            See All
          </Button>
        </div>
        <TransactionTable />
      </div>
    </div>
  );
}
