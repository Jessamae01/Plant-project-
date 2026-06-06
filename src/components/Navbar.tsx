"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categoryLinks = [
  { href: "/indoor", label: "Indoor" },
  { href: "/outdoor", label: "Outdoor" },
  { href: "/edible", label: "Edible" },
  { href: "/medicinal", label: "Medicinal" },
  { href: "/pet-safety", label: "Pet Safety" },
];

const otherLinks = [
  { href: "/region", label: "By Region" },
  { href: "/plants", label: "All Plants" },
  { href: "/guides", label: "Guides" },
  { href: "/shop", label: "Shop" },
];

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors hover:text-green-600 pb-1 whitespace-nowrap ${
      pathname === href
        ? "text-green-600 border-b-2 border-green-600"
        : "text-gray-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold text-green-600">Verdure</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-gray-600 hover:text-green-600">
              Sign in
            </Link>
            <Link
              href="#"
              className="text-sm bg-green-600 text-white px-4 py-1.5 rounded-full hover:bg-green-700 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 h-10 overflow-x-auto scrollbar-hide">
          {categoryLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <span className="text-gray-300">|</span>
          {otherLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
