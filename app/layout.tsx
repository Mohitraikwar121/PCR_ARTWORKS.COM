import "./globals.css";
import Link from "next/link";
import { artist } from "../data/artist";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <header className="site-header">
      <Link href="/" className="brand">{artist.name}</Link>
      <nav>
        <Link href="/work">WORK</Link>
        <Link href="/#about">ABOUT</Link>
        <Link href="/#contact">CONTACT</Link>
      </nav>
    </header>
    {children}
  </body></html>;
}
