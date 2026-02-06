import { useState, useEffect } from 'react';
import { Button } from '../ui/Button/Button';
import styles from './Navigation.module.css';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`}>
        <a href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="4" fill="currentColor" />
              <path d="M8 8h4v16H8V8zm12 0h4v16h-4V8zm-6 6h4v10h-4V14z" fill="var(--color-accent)" />
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Morrison & Cole</span>
            <span className={styles.logoTagline}>Attorneys at Law</span>
          </div>
        </a>

        <div className={styles.desktopNav}>
          <a href="#services" className={styles.navLink}>Practice Areas</a>
          <a href="#about" className={styles.navLink}>Our Firm</a>
          <a href="#team" className={styles.navLink}>Attorneys</a>
          <a href="#testimonials" className={styles.navLink}>Results</a>
        </div>

        <div className={styles.desktopCta}>
          <a href="tel:+18005551234" className={styles.phone}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            (800) 555-1234
          </a>
          <Button href="#contact" size="sm">Free Consultation</Button>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.menuLine} ${isMobileMenuOpen ? styles.open : ''}`} />
          <span className={`${styles.menuLine} ${isMobileMenuOpen ? styles.open : ''}`} />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileInner}>
          <a href="#services" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Practice Areas</a>
          <a href="#about" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Our Firm</a>
          <a href="#team" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Attorneys</a>
          <a href="#testimonials" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Results</a>
          <div className={styles.mobileCta}>
            <a href="tel:+18005551234" className={styles.mobilePhone}>(800) 555-1234</a>
            <Button href="#contact">Free Consultation</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
