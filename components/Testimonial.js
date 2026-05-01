import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Theappsdevelopers managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.",
    initial: "JD",
    name: "Lorem, Director",
    company: "Hotset"
  },
  {
    id: 2,
    quote: "The engagement met the expectations of the internal team. Theappsdevelopers successfully worked within the robust scope, often going above and beyond to ensure client satisfaction. The team provides clients with a high level of support while still working quickly and creatively.",
    initial: "HA",
    name: "Lorem, Digital Manager",
    company: "Electric Control"
  }
];

export default function Testimonial() {
  const [scales, setScales] = useState([0.9, 0.9]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowCenter = window.innerHeight / 2;
      const newScales = testimonials.map((_, index) => {
        const card = cardRefs.current[index];
        if (!card) return 0.9;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(windowCenter - cardCenter);
        const maxDistance = window.innerHeight * 0.7;

        // Calculate progress (1 at center, 0 at edges)
        let progress = 1 - (distanceFromCenter / maxDistance);
        progress = Math.max(0, Math.min(1, progress));

        return 0.9 + (0.1 * progress); // Scale smoothly from 0.9 to 1.0
      });
      setScales(newScales);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="testimonial-v2-section">
      {/* Background Gradients */}
      <div className="glow-left"></div>
      <div className="glow-right"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="testimonial-v2-header">
          <h2 className="testimonial-v2-title">
            Our clients simply love <span className="text-green">what we do</span>
          </h2>
          <p className="testimonial-v2-desc">
            Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
          </p>

          <div className="testimonial-badges">
            <div className="badge clutch-badge">
              <span className="badge-stars">★★★★★</span>
              <span className="badge-text">52 REVIEWS</span>
            </div>
            <div className="badge fc-badge">
              <span className="badge-stars fc-stars">★★★★★</span>
              <span className="badge-text">33 REVIEWS</span>
            </div>
          </div>
        </div>

        <div className="testimonial-v2-list">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="testimonial-v2-card"
              ref={el => cardRefs.current[index] = el}
              style={{ transform: `scale(${scales[index]})` }}
            >
              <p className="test-quote">"{item.quote}"</p>

              <div className="test-footer">
                <div className="test-author-group">
                  <div className="test-avatar">{item.initial}</div>
                  <div className="test-author-details">
                    <span className="test-name">{item.name}</span>
                    <div className="test-stars">★★★★★</div>
                  </div>
                </div>

                <div className="test-company">
                  <span className="company-icon">🔥</span> {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
