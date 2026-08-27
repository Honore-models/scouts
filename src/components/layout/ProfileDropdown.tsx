"use client";

import { CreditCard, FileText, LogOut, Settings, User, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Profile {
  name: string;
  email: string;
  avatar: string;
  username?: string;
  subscription?: string;
}

interface MenuItem {
  label: string;
  value?: string;
  href: string;
  icon: React.ReactNode;
  badgeColor?: "blue" | "purple";
}

interface ProfileDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: Profile;
}

export default function ProfileDropdown({
  data,
  className,
  ...props
}: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const profile: Profile = data || {
    name: "Ivan Hirwa",
    email: "@ivanhirwa",
    avatar: "/avatar.png",
    username: "@ivanhirwa",
    subscription: "PRO",
  };

  const menuItems: MenuItem[] = [
    {
      label: "Profile",
      href: "/profile/2",
      icon: <User className="h-4 w-4" />,
    },
    {
      label: "My Projects",
      href: "/dashboard",
      icon: <Palette className="h-4 w-4" />,
    },
    {
      label: "Subscription",
      value: profile.subscription,
      href: "/pricing",
      icon: <CreditCard className="h-4 w-4" />,
      badgeColor: "purple",
    },
    {
      label: "Settings",
      href: "#",
      icon: <Settings className="h-4 w-4" />,
    },
    {
      label: "Terms & Policies",
      href: "#",
      icon: <FileText className="h-4 w-4" />,
    },
  ];

  return (
    <div className={cn("relative", className)} {...props}>
      <DropdownMenu onOpenChange={setIsOpen}>
        <div className="group relative">
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/60 p-2 pr-3 transition-all duration-200 hover:border-white/70 hover:bg-white/80 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#315BFF]/20"
              type="button"
            >
              <div className="relative">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#315BFF] via-[#8B5CF6] to-[#EC4899] p-[2px]">
                  <div className="h-full w-full overflow-hidden rounded-full bg-white">
                    <Image
                      alt={profile.name}
                      className="h-full w-full rounded-full object-cover"
                      height={34}
                      src={profile.avatar}
                      width={34}
                    />
                  </div>
                </div>
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-[13px] font-semibold text-[#111] leading-tight">
                  {profile.name}
                </div>
                <div className="text-[11px] text-[#888] leading-tight">
                  {profile.email}
                </div>
              </div>
              <svg
                aria-hidden="true"
                className={cn(
                  "h-4 w-4 transition-all duration-200",
                  isOpen
                    ? "rotate-180 text-[#315BFF]"
                    : "text-[#888] group-hover:text-[#555]"
                )}
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M2 4C6 8 6 16 2 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-64 origin-top-right rounded-2xl border border-white/50 bg-white/95 p-2 shadow-xl shadow-[#315BFF]/5 backdrop-blur-xl"
            sideOffset={8}
          >
            {/* Profile header */}
            <div className="px-3 py-2.5 mb-1">
              <div className="text-[13px] font-semibold text-[#111] leading-tight">
                {profile.name}
              </div>
              <div className="text-[11px] text-[#888] leading-tight">
                {profile.email}
              </div>
            </div>

            <div className="space-y-0.5">
              {menuItems.map((item) => (
                <DropdownMenuItem asChild key={item.label}>
                  <Link
                    className="group flex cursor-pointer items-center rounded-xl border border-transparent p-3 transition-all duration-150 hover:border-[#e8e6f0] hover:bg-[#f8f7ff]"
                    href={item.href}
                  >
                    <div className="flex flex-1 items-center gap-2.5">
                      <span className="text-[#999] group-hover:text-[#315BFF] transition-colors">
                        {item.icon}
                      </span>
                      <span className="whitespace-nowrap font-medium text-[13px] text-[#333] leading-tight">
                        {item.label}
                      </span>
                    </div>
                    {item.value && (
                      <span
                        className={cn(
                          "rounded-lg px-2.5 py-1 font-medium text-[11px]",
                          item.badgeColor === "purple"
                            ? "bg-[#f5f3ff] text-[#8B5CF6] border border-[#8B5CF6]/10"
                            : "bg-[#f0f4ff] text-[#315BFF] border border-[#315BFF]/10"
                        )}
                      >
                        {item.value}
                      </span>
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>

            <DropdownMenuSeparator className="my-2 bg-gradient-to-r from-transparent via-[#e8e6f0] to-transparent" />

            <DropdownMenuItem asChild>
              <button
                className="group flex w-full cursor-pointer items-center gap-3 rounded-xl border border-transparent bg-red-50 p-3 transition-all duration-150 hover:border-red-200 hover:bg-red-100"
                type="button"
              >
                <LogOut className="h-4 w-4 text-red-400 group-hover:text-red-500" />
                <span className="font-medium text-red-400 text-[13px] group-hover:text-red-500">
                  Sign Out
                </span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
}
