import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ReviewPoint — Real experiences. Better decisions.",
  description: "Discover businesses through customer reviews and share your own experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <header className="topbar"><div className="wrap nav">
      <Link href="/" className="brand"><span className="brandmark">★</span>ReviewPoint</Link>
      <nav className="navlinks"><Link href="/companies">Explore companies</Link><Link href="/categories">Categories</Link><Link href="/write-review">Write a review</Link></nav>
      <div className="navactions"><Link className="btn btn-outline" href="/login">Sign in</Link><Link className="btn btn-primary" href="/signup">Join free</Link></div>
    </div></header>
    {children}
    <footer className="footer"><div className="wrap footer-grid">
      <div><div className="brand"><span className="brandmark">★</span>ReviewPoint</div><p>Real experiences. Better decisions.</p><small>Independent customer feedback, built with transparency.</small></div>
      <div><b>Explore</b><p><Link href="/companies">Companies</Link></p><p><Link href="/categories">Categories</Link></p></div>
      <div><b>For businesses</b><p><Link href="/business">Claim a profile</Link></p><p><Link href="/business">Business dashboard</Link></p></div>
      <div><b>About</b><p><Link href="/policy">Review policy</Link></p><p><Link href="/policy">Privacy & terms</Link></p></div>
    </div><div className="wrap" style={{marginTop:30}}><small>© {new Date().getFullYear()} ReviewPoint. Demo build — sample listings are illustrative only.</small></div></footer>
  </body></html>;
}