"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "首頁", href: "/" },
  { name: "良野 7-Eleven", href: "/cases/liangye-7eleven" },
  { name: "Insurance Bot", href: "/cases/insurance-bot" },
  { name: "TOEIC Snack", href: "/cases/toeic-snack" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight text-primary">
            <span className="text-ai-purple">Josh Kuei</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-ai-purple"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="mailto:kuei790802@gmail.com"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            聯絡我
          </Link>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="開啟選單"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai-purple"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80 flex flex-col">
              <SheetHeader>
                <SheetTitle className="font-heading text-lg font-bold text-ai-purple text-left">
                  Josh Kuei
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 pt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium transition-colors",
                      pathname === item.href
                        ? "bg-ai-purple/10 text-ai-purple"
                        : "text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto border-t border-slate-200 p-4">
                <Link
                  href="mailto:kuei790802@gmail.com"
                  onClick={closeMobile}
                  className="flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  聯絡我
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
