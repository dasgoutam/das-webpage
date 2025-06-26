"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-48 py-5 flex justify-between items-center">
        <div className="flex justify-start">
          <div className="text-gray-600 text-sm">
            Personal Website
          </div>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className={`text-gray-600 ${
              pathName === "/" ? "font-semibold" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/cv"
            className={`text-gray-600 ${
              pathName === "/cv" ? "font-semibold" : ""
            }`}
          >
            CV
          </Link>
          <Link
            href="/projects"
            className={`text-gray-600 ${
              pathName === "/projects" ? "font-semibold" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/blog-home"
            className={`text-gray-600 ${
              pathName === "/blog-home" ? "font-semibold" : ""
            }`}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
