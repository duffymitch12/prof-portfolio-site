// @/ui/components/nav.tsx
"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const NAV_LINKS = [
  { label: "education", targetId: "hero" },
  { label: "experience", targetId: "experience" },
  { label: "projects", targetId: "projects" },
  { label: "skills", targetId: "skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (target: string) => {
    if (target.startsWith("/")) {
      router.push(target);
    } else {
      if (pathname !== "/") {
        router.push(`/#${target}`);
      } else {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 border-b border-gray-200 bg-[#fefefe]">
      <div className="flex items-center justify-between px-6 py-3">

        <h1 className="text-xl font-semibold text-[#000101] underline underline-offset-[6px] decoration-[#277986] decoration-[3px]">
          Mitchell Duffy
        </h1>

        {/* Desktop — div controls visibility, not NavigationMenu itself */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row space-x-2">
              {NAV_LINKS.map(({ label, targetId }) => (
                <NavigationMenuItem key={targetId}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={() => handleNav(targetId)}
                    style={{ cursor: "pointer" }}
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile — SheetTrigger button hidden on md+ */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="text-[#1B1B1B] focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 pt-10">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col space-y-1 mt-4">
                {NAV_LINKS.map(({ label, targetId }, i) => (
                  <div key={targetId}>
                    <button
                      onClick={() => handleNav(targetId)}
                      className="w-full text-left px-4 py-4 text-lg font-semibold text-[#1B1B1B] hover:text-[#0f4570] transition-colors duration-200"
                    >
                      {label}
                    </button>
                    {i < NAV_LINKS.length - 1 && (
                      <div className="border-t border-gray-200 mx-4" />
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}