import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav-links" aria-label="Footer links">
        <Link href="/privacy-policy" className="footer-nav-link">
          Privacy Policy
        </Link>

        <Link href="/terms-and-conditions" className="footer-nav-link">
          Terms And Conditions
        </Link>

        <Link href="/contact-us" className="footer-nav-link">
          Contact Us
        </Link>

        <Link href="/disclaimer" className="footer-nav-link">
          Disclaimer
        </Link>

        <Link href="/about" className="footer-nav-link">
          About
        </Link>
      </nav>

      <p className="footer-disclaimer-text">
        Disclaimer: SSInstagram is an independent web utility and is not
        affiliated with, sponsored by, or endorsed by Instagram or Meta
        Platforms, Inc.
      </p>

      <div className="footer-copyright">
        All Rights Reserved 2026 &copy; SSInstagram.online
      </div>
    </footer>
  );
}