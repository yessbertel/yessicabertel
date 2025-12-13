"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "#about",
  },
  {
    name: "Services",
    path: "#services",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Resume",
    path: "#resume",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-rose-300" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <VisuallyHidden>
          <SheetTitle>Navigation Mobile</SheetTitle>
        </VisuallyHidden>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Yess<span className="text-">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, i) => {
            return (
              <Link
                href={link.path}
                key={i}
                className={`${
                  link.path === pathname &&
                  "text-rose-300 border-b-2 border-rose-300"
                } capitalize font-medium hover:text-rose-300 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
