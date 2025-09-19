"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="text-[24px] font-bold tracking-tight text-black">
            Abhishek chaudhary
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-black font-[20px] ">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-blue-600">
                {l.label}
              </Link>
            ))}
            <Link
              href="https://drive.google.com/file/d/196VwNkfL7fouKBengJDhxrXb7BRIxP7u/view?usp=drivesdk"
              className="px-3 py-1.5 rounded-lg border hover:bg-blue-500"
            >
              Resume
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Simple hamburger / close */}
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-black transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-black transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-black transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-3 text-black font-[20px]">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
            href="https://drive.google.com/file/d/196VwNkfL7fouKBengJDhxrXb7BRIxP7u/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1"
            onClick={() => setOpen(false)}
            >
            Resume
           </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
