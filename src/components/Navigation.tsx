"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLiks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/account", label: "Account" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {NavLiks.map(({ href, label }) => (
          <li key={href}>
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? "text-teal-400"
                  : "hover:text-teal-400 transition-colors text-white"
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
