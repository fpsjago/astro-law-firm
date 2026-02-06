import { Button } from '../ui/Button/Button';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`fade-up ${styles.content}`}>
            <span className={styles.label}>Free Consultation</span>
            <h2 className={styles.title}>
              Ready to Discuss<br />
              <span className={styles.accent}>Your Case?</span>
            </h2>
            <p className={styles.description}>
              Every case begins with a conversation. Tell us about your situation, 
              and we'll provide an honest assessment of your options. No obligation, 
              no pressure—just straightforward legal advice.
            </p>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.infoLabel}>Call Us 24/7</div>
                  <a href="tel:+18005551234" className={styles.infoValue}>(800) 555-1234</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className={styles.infoLabel}>Email Us</div>
                  <a href="mailto:info@morrisoncole.com" className={styles.infoValue}>info@morrisoncole.com</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className={styles.infoLabel}>Visit Our Office</div>
                  <div className={styles.infoValue}>123 Legal Plaza, Suite 500<br />New York, NY 10001</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`fade-up delay-2 ${styles.formCard}`}>
            <h3 className={styles.formTitle}>Request a Consultation</h3>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.formLabel}>First Name</label>
                  <input type="text" id="firstName" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.formLabel}>Last Name</label>
                  <input type="text" id="lastName" className={styles.formInput} required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input type="email" id="email" className={styles.formInput} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>Phone</label>
                <input type="tel" id="phone" className={styles.formInput} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="caseType" className={styles.formLabel}>Type of Case</label>
                <select id="caseType" className={styles.formSelect} required>
                  <option value="">Select a practice area</option>
                  <option value="personal-injury">Personal Injury</option>
                  <option value="corporate">Corporate Litigation</option>
                  <option value="civil-rights">Civil Rights</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Brief Description</label>
                <textarea id="message" className={styles.formTextarea} rows={4} required />
              </div>

              <Button type="submit" size="lg" className={styles.formSubmit}>
                Submit Request
              </Button>

              <p className={styles.formDisclaimer}>
                By submitting, you agree to our privacy policy. Attorney-client 
                privilege applies to all communications.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
