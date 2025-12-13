"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name:"Home",
        path: "/"
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

const Nav = () => {
  const pathname = usePathname();  

  return (
    <nav className="flex gap-8">
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
  );
};

export default Nav;
