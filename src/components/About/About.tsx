import { Button } from '../ui/Button/Button';
import styles from './About.module.css';

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9,12 11,14 15,10" />
      </svg>
    ),
    title: 'Integrity First',
    description: 'Honest counsel and transparent communication throughout your case.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      </svg>
    ),
    title: 'Client-Centered',
    description: 'Your goals and well-being drive every decision we make.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
    title: 'Excellence',
    description: 'Relentless preparation and attention to detail in every case.',
  },
];

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`fade-up ${styles.content}`}>
            <span className={styles.label}>Our Firm</span>
            <h2 className={styles.title}>
              A Legacy of Legal<br />
              <span className={styles.accent}>Excellence Since 1989</span>
            </h2>
            <p className={styles.description}>
              Morrison & Cole was founded on a simple principle: every client deserves 
              zealous advocacy and personal attention, regardless of the case size. 
              Over three decades later, that commitment remains unchanged.
            </p>
            <p className={styles.description}>
              Our team of 15 attorneys brings expertise from the nation's top law schools 
              and major law firms. We've tried hundreds of cases to verdict and negotiated 
              thousands of settlements, earning a reputation that makes opposing counsel 
              take notice.
            </p>
            
            <div className={styles.values}>
              {values.map((value) => (
                <div key={value.title} className={styles.value}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <div>
                    <h4 className={styles.valueTitle}>{value.title}</h4>
                    <p className={styles.valueDesc}>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button href="#team" variant="outline">Meet Our Attorneys</Button>
          </div>
          
          <div className={`fade-up delay-2 ${styles.visual}`}>
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="2" y1="20" x2="22" y2="20" />
                  <line x1="12" y1="17" x2="12" y2="20" />
                </svg>
                <span>Courtroom Excellence</span>
              </div>
            </div>
            <div className={styles.accolade}>
              <div className={styles.accoladeIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 15l-2 5-3-1 2-4.5" />
                  <path d="M12 15l2 5 3-1-2-4.5" />
                  <circle cx="12" cy="9" r="6" />
                  <path d="M12 6v3l2 1" />
                </svg>
              </div>
              <div>
                <div className={styles.accoladeTitle}>Best Law Firm 2024</div>
                <div className={styles.accoladeSource}>American Legal Review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
