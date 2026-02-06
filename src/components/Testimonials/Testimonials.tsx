import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "After my car accident, I didn't know where to turn. Morrison & Cole fought for me every step of the way and secured a settlement that covered all my medical bills and more. They gave me my life back.",
    author: "Sarah M.",
    case: "$2.4M Personal Injury Settlement",
    rating: 5,
  },
  {
    quote: "When our company faced a complex contract dispute worth millions, the team at Morrison & Cole developed a brilliant strategy that led to a complete victory at trial. Exceptional legal minds.",
    author: "David R.",
    case: "Corporate Litigation Win",
    rating: 5,
  },
  {
    quote: "They took on my employment discrimination case when other firms wouldn't. Their dedication to civil rights is genuine, and they won a verdict that sent a message to my former employer.",
    author: "Michelle T.",
    case: "Civil Rights Victory",
    rating: 5,
  },
];

const results = [
  { amount: '$47M', type: 'Medical Malpractice Verdict' },
  { amount: '$28M', type: 'Trucking Accident Settlement' },
  { amount: '$15M', type: 'Product Liability Settlement' },
  { amount: '$12M', type: 'Employment Discrimination Verdict' },
];

export function Testimonials() {
  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className={`fade-up ${styles.header}`}>
          <span className={styles.label}>Results</span>
          <h2 className={styles.title}>
            Proven Track Record of<br />
            <span className={styles.accent}>Winning for Our Clients</span>
          </h2>
        </div>

        <div className={styles.results}>
          {results.map((result, i) => (
            <div key={i} className={`fade-up ${styles.result}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={styles.resultAmount}>{result.amount}</div>
              <div className={styles.resultType}>{result.type}</div>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className={`fade-up ${styles.card}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, j) => (
                  <svg key={j} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <blockquote className={styles.quote}>"{testimonial.quote}"</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorCase}>{testimonial.case}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
