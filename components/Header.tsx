
"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 z-[6000] flex items-start px-8 py-3"
      style={{
        boxShadow:
          "0 4px 24px rgba(0,0,0,0.08), 0 1.5px 0px 0px rgba(25,28,33,0.02), 0 0px 0px 1px rgba(25,28,33,0.08)",
      }}
    >
      {/* Logo */}
      <a
        href="https://drive.google.com/file/d/19BJUcxj8TWNJtZW0AaeBm51NQh7XAxYX/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 cursor-pointer"
      >
        <span className="text-xl font-bold transition-colors text-neutral-400 hover:text-white m-3.5 sm:m-8">
          MA
        </span>
      </a>
    </header>
  );
}
