import styles from './Services.module.css';

const practiceAreas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Personal Injury',
    description: 'Car accidents, medical malpractice, workplace injuries, and wrongful death cases with maximum compensation.',
    items: ['Auto Accidents', 'Medical Malpractice', 'Workplace Injuries', 'Product Liability'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
        <polyline points="7.5,19.79 7.5,14.6 3,12" />
        <polyline points="21,12 16.5,14.6 16.5,19.79" />
        <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Corporate Litigation',
    description: 'Complex business disputes, contract breaches, shareholder conflicts, and regulatory compliance matters.',
    items: ['Contract Disputes', 'Partnership Conflicts', 'Securities Litigation', 'IP Protection'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Civil Rights',
    description: 'Employment discrimination, police misconduct, housing discrimination, and constitutional violations.',
    items: ['Discrimination Cases', 'Police Misconduct', 'Wrongful Termination', 'Whistleblower Protection'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: 'Real Estate',
    description: 'Property disputes, construction defects, landlord-tenant issues, and commercial real estate transactions.',
    items: ['Property Disputes', 'Construction Defects', 'Lease Agreements', 'Title Issues'],
  },
];

export function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className={`fade-up ${styles.header}`}>
          <span className={styles.label}>Practice Areas</span>
          <h2 className={styles.title}>
            Legal Excellence Across<br />
            <span className={styles.accent}>Every Practice Area</span>
          </h2>
          <p className={styles.subtitle}>
            Our attorneys bring decades of combined experience to deliver results 
            in the most challenging legal matters.
          </p>
        </div>

        <div className={styles.grid}>
          {practiceAreas.map((area, i) => (
            <div 
              key={area.title} 
              className={`fade-up ${styles.card}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={styles.cardIcon}>{area.icon}</div>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDesc}>{area.description}</p>
              <ul className={styles.cardList}>
                {area.items.map((item) => (
                  <li key={item}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={styles.cardLink}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
