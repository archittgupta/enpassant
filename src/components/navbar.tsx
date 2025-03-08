"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconCalendarEvent, IconChartBar, IconHome, IconInfoCircle } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Stats",
      link: "/stats",
      icon: (
        <IconChartBar className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
        name: "Events",
        link: "/events",
        icon: (
          <IconCalendarEvent className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
     
    </div>
  );
}

