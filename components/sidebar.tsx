"use client";

import React, { useState } from "react";
import {
  LayoutGrid,
  ChartNoAxesCombined,
  Wallet,
  Users,
  Settings,
  HelpCircle,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";

export default function Sidebar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-custom-purple rounded-lg md:hidden"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed min-h-full w-[250px] h-screen bg-custom-purple flex flex-col px-3 py-8 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-50`}
      >
        <nav className="flex-1 space-y-12">
          <Image src="logo.svg" alt="uifry logo" width={107} height={31.46} />
          <div className="flex flex-col gap-5">
            <NavItem
              icon={<LayoutGrid size={20} />}
              label="Dashboard"
              href="/dashboard"
              active={pathname === "/dashboard"}
            />
            <NavItem
              icon={<ChartNoAxesCombined size={20} />}
              label="Analytics"
              href="/#"
              active={pathname === "/analytics"}
            />
            <NavItem
              icon={<Wallet size={20} />}
              label="My Wallet"
              href="/wallet"
              active={pathname === "/wallet"}
            />
            <NavItem
              icon={<Users size={20} />}
              label="Accounts"
              href="/#"
              active={pathname === "/accounts"}
            />
            <NavItem
              icon={<Settings size={20} />}
              label="Settings"
              href="/#"
              active={pathname === "/settings"}
            />
          </div>
          <Separator />
          <div className="flex flex-col gap-5">
            <div id="step-5">
              <NavItem
                icon={<HelpCircle size={20} />}
                label="Help centre"
                href="/#"
                active={pathname === "/help"}
              />
            </div>
            <div className="w-full">
              <ModeToggle />
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-[#2a2a4a]">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-500 mr-3">
                <Image
                  src="/profile-img.svg"
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div className="text-white">
                <p className="font-medium text-sm">Ali Riaz</p>
                <p className="text-xs">Web Developer</p>
              </div>
            </div>
            <ChevronDown className="text-white size-4" />
          </div>
        </div>
      </div>
    </>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

function NavItem({ icon, label, href, active = false }: NavItemProps) {
  return (
    <Link href={href} passHref>
      <Button
        variant="ghost"
        className={`w-full justify-start cursor-pointer px-3 py-2 ${
          active
            ? "bg-custom-purple-light text-custom-purple-dark"
            : "text-white hover:bg-custom-purple-light"
        }`}
      >
        <span className="mr-3">{icon}</span>
        {label}
      </Button>
    </Link>
  );
}
