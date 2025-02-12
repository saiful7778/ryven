"use client";

import {
  ArrowIcon1,
  ChartIcon1,
  LogoutIcon1,
  MessageIcon1,
  NotificationIcon1,
  ProfileIcon1,
} from "@/assets/icons";
import SiteLogo from "../SiteLogo";
import ThemeToggle from "../ThemeToggle";
import Image from "next/image";
import avatarImage from "@/assets/images/avatar.png";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="py-8 px-4 border-b border-b-border shadow-[0px_1px_15px_0px_rgba(2,29,79,0.05)]">
      <div className="container mx-auto flex items-center justify-between gap-2">
        <SiteLogo />
        <div className="flex items-center">
          <ThemeToggle className="mr-[60px]" />
          <div className="flex items-center gap-[20px]">
            <button
              type="button"
              className="inline-flex bg-none border-none cursor-pointer items-center justify-center gap-1 size-12 [&_svg]:size-full flex-shrink-0 [&_svg]:flex-shrink-0"
            >
              <MessageIcon1 />
            </button>
            <button
              type="button"
              className="inline-flex bg-none border-none cursor-pointer items-center justify-center gap-1 size-12 [&_svg]:size-full flex-shrink-0 [&_svg]:flex-shrink-0"
            >
              <NotificationIcon1 />
            </button>
            <UserDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDropdown: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current) {
        if (
          dropdownTriggerRef.current &&
          !dropdownTriggerRef.current.contains(event.target as Node)
        ) {
          setOpenDropdown(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        ref={dropdownTriggerRef}
        onClick={() => setOpenDropdown((prev) => !prev)}
        className="inline-flex items-center justify-center gap-2 bg-none border border-border cursor-pointer h-12 flex-shrink-0 rounded-full overflow-hidden"
      >
        <Image
          className="h-full aspect-square rounded-full overflow-hidden"
          src={avatarImage}
          width={48}
          height={48}
          alt="User image"
        />
        <span className="flex-shrink-0 h-12 w-12 inline-flex items-center justify-center">
          <ArrowIcon1 />
        </span>
      </button>
      {openDropdown && (
        <div
          ref={dropdownRef}
          className="absolute top-[100%] right-0 z-50 bg-secondary text-foreground space-y-[10px]"
        >
          <Link
            href="/"
            className="inline-flex w-full items-center gap-1.5 py-1 px-1.5"
          >
            <ProfileIcon1 />
            <span>Profile</span>
          </Link>
          <Link
            href="/"
            className="inline-flex w-full items-center gap-1.5 py-1 px-1.5"
          >
            <ChartIcon1 />
            <span>Rank</span>
          </Link>
          <button
            type="button"
            className="inline-flex w-full items-center gap-1.5 py-1 px-1.5"
          >
            <LogoutIcon1 />
            <span>Log out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Topbar;
