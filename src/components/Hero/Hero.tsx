import { Button } from '../ui/Button/Button';
import styles from './Hero.module.css';

const stats = [
  { value: '35+', label: 'Years Experience' },
  { value: '$500M+', label: 'Recovered for Clients' },
  { value: '98%', label: 'Success Rate' },
  { value: '5,000+', label: 'Cases Won' },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgOverlay} />
      <div className={styles.bgPattern} />
      
      <div className="container">
        <div className={styles.content}>
          <div className={styles.tagline}>
            <span className={styles.taglineLine} />
            <span>Established 1989</span>
          </div>
          
          <h1 className={`fade-up ${styles.headline}`}>
            Justice Delivered,<br />
            <span className={styles.headlineAccent}>Results Proven</span>
          </h1>
          
          <p className={`fade-up delay-1 ${styles.subheadline}`}>
            When everything is at stake, you need attorneys who fight relentlessly. 
            Morrison & Cole has secured over $500 million in verdicts and settlements 
            for clients across personal injury, corporate litigation, and civil rights.
          </p>
          
          <div className={`fade-up delay-2 ${styles.ctas}`}>
            <Button href="#contact" size="lg">Free Case Evaluation</Button>
            <Button href="tel:+18005551234" variant="outline" size="lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              (800) 555-1234
            </Button>
          </div>
          
          <div className={`fade-up delay-3 ${styles.trust}`}>
            <span className={styles.trustLabel}>As Featured In</span>
            <div className={styles.trustLogos}>
              <span className={styles.trustLogo}>Forbes</span>
              <span className={styles.trustLogo}>WSJ</span>
              <span className={styles.trustLogo}>NYT</span>
              <span className={styles.trustLogo}>CNN</span>
            </div>
          </div>
        </div>
        
        <div className={`fade-up delay-2 ${styles.stats}`}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
