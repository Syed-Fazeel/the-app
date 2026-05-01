import React, { useEffect, useState, useRef } from 'react';

export default function Journey() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTimestamp = null;
          const duration = 2000;
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease-out curve
            const easeOut = 1 - Math.pow(1 - progress, 4);
            
            setCount1(Math.floor(easeOut * (1300 - 1) + 1));
            setCount2(Math.floor(easeOut * (350 - 1) + 1));
            setCount3(Math.floor(easeOut * (600 - 1) + 1));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount1(1300);
              setCount2(350);
              setCount3(600);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="journey-section">
      <div className="container">
        <div className="journey-content">
          <h2 className="journey-title">Our journey of building success</h2>
          <p className="journey-desc">
            We are a full-cycle product development company that combines creative thinking
            with technical expertise to create user-centric products that solve real
            problems and drive business growth.
          </p>
          
          <div className="journey-stats" ref={statsRef}>
            <div className="stat-item">
              <h3 className="stat-number">{count1.toLocaleString()}+</h3>
              <p className="stat-label">Completed Projects</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">{count2}+</h3>
              <p className="stat-label">Talented Appixians</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">{count3}+</h3>
              <p className="stat-label">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
