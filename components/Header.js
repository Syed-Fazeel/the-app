import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className="site-header site-header--hero">
      <div className="container header-inner">

        <Link href="/" className="brand">
          <span className="logo-text">TheAppsDevelopers<span className="logo-dot" aria-hidden>•</span></span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/work">Work</Link>
          <Link href="/company">Company</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="header-actions">
          <a className="phone" href="tel:8669782220">📞 000-900-000</a>
          <a className="btn get-in-touch" href="#contact">Get in Touch</a>
          <button className="hamburger" onClick={openMenu} aria-label="Open navigation">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* ── Full-screen mobile overlay ── */}
      <div className={`mnav${isMenuOpen ? ' mnav--open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="mnav__inner">

          {/* top bar */}
          <div className="mnav__topbar">
            <Link href="/" className="mnav__brand" onClick={closeMenu}>
              TheAppsDevelopers<span className="mnav__dot">.</span>
            </Link>
            <button className="mnav__close" onClick={closeMenu} aria-label="Close navigation">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="1" y1="1" x2="17" y2="17" />
                <line x1="17" y1="1" x2="1" y2="17" />
              </svg>
            </button>
          </div>

          {/* nav items */}
          <nav className="mnav__links">
            <div className="mnav__item">
              <Link href="/services" onClick={closeMenu}>Services</Link>
              <span className="mnav__arrow">→</span>
            </div>
            <div className="mnav__item">
              <Link href="/industries" onClick={closeMenu}>Industries</Link>
              <span className="mnav__arrow">→</span>
            </div>
            <div className="mnav__item">
              <Link href="/solutions" onClick={closeMenu}>Solutions</Link>
              <span className="mnav__arrow">→</span>
            </div>
            <div className="mnav__item">
              <Link href="/work" onClick={closeMenu}>Work</Link>
            </div>
            <div className="mnav__item">
              <Link href="/about" onClick={closeMenu}>About</Link>
              <span className="mnav__arrow">→</span>
            </div>
            <div className="mnav__item">
              <Link href="/resources" onClick={closeMenu}>Resources</Link>
              <span className="mnav__arrow">→</span>
            </div>
            <div className="mnav__item">
              <Link href="/contact" onClick={closeMenu}>Contact</Link>
            </div>
          </nav>

          {/* social icons */}
          <div className="mnav__socials">
            <a href="#" className="mnav__social" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#" className="mnav__social" aria-label="X / Twitter">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" className="mnav__social" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>

        </div>
      </div>

      <a className="text-us-tab" href="#contact">Text Us</a>
    </header>
  )
}
