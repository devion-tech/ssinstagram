import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="brand-link" aria-label="SSInstagram Home">
          <svg
            className="brand-icon-svg"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="brandGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <rect width="36" height="36" rx="9" fill="url(#brandGrad)" />
            <rect x="7.5" y="7.5" width="21" height="21" rx="6" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="23.2" cy="12.8" r="1.3" fill="#ffffff" />
            <path d="M18 12.5V20.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M14.5 17.5L18 21L21.5 17.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.5 24H22.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>

          <div className="brand-text-wrap">
            <span className="logo-ss">SS</span>
            <span className="logo-name">Instagram</span>
            <span className="logo-tld">.online</span>
          </div>
        </Link>

        <nav className="header-nav" aria-label="Quick links">
          <Link href="/#how-to" className="nav-link">How To</Link>
          <Link href="/#overview" className="nav-link">Overview</Link>
          <Link href="/#devices" className="nav-link">Devices</Link>
        </nav>
      </div>
    </header>
  );
}
