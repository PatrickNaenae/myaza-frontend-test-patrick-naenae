import Image from "next/image";

interface WalletCardProps {
  code: string;
  balance: string;
  flagSrc: string;
}

export default function WalletCard({
  code,
  balance,
  flagSrc,
}: WalletCardProps) {
  return (
    <div className="bg-custom-purple rounded-lg p-4 border border-[#8477FF]">
      <div className="flex items-start gap-3">
        <div className="h-8 w-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
          <Image
            src={flagSrc || "/placeholder.svg"}
            alt={`${code} flag`}
            width={24}
            height={24}
            className="h-6 w-6 object-cover"
          />
        </div>
        <div className="flex flex-col justify-between space-y-1">
          <span className="font-normal">{code} Wallet</span>
          <span className="text-xs font-medium text-secondary-foreground">
            {" "}
            Balance: {balance}
          </span>
        </div>
      </div>
    </div>
  );
}
