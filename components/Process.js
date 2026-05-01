import React, { useState, useEffect, useRef } from 'react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const trackRef = useRef(null);
  const stepsRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    { num: '01/06', title: 'Ideate', desc: 'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.', img: '/images/bulb-v2.jpg' },
    { num: '02/06', title: 'Design', desc: 'Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.', img: '/images/design-v2.jpg' },
    { num: '03/06', title: 'Develop', desc: 'Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.', img: '/images/develop-1.jpg' },
    { num: '04/06', title: 'Test', desc: 'Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.', img: '/images/QA-1.jpg' },
    { num: '05/06', title: 'Launch', desc: 'Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.', img: '/images/vector-rocket-launch.jpg' },
    { num: '06/06', title: 'Support', desc: 'Providing ongoing support and enhancements to ensure continued product success.', img: '/images/support.png' }
  ];

  useEffect(() => {
    const handleHorizontalScroll = () => {
      if (window.innerWidth <= 900 && stepsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = stepsRef.current;
        if (scrollWidth > clientWidth) {
          const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
          setScrollProgress(progress);
        }
      }
    };

    const scrollContainer = stepsRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleHorizontalScroll, { passive: true });
    }

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveStep(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    const handleScroll = () => {
      if (window.innerWidth > 900) {
        if (!trackRef.current) return;
        const trackRect = trackRef.current.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.65;
        const scrolled = triggerPoint - trackRect.top;
        let progress = (scrolled / trackRect.height) * 100;
        progress = Math.max(0, Math.min(100, progress));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleHorizontalScroll);
      }
    };
  }, []);

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="container">
        <div className="process-header">
          <h2>Our product<br /><span>development process</span></h2>
          <a href="#" className="view-more">View More &rarr;</a>
        </div>

        <div className="process-layout">
          {/* Left Column - Scrollable Text */}
          <div className="process-content">
            <div className="process-steps-container" ref={stepsContainerRef}>
              <div className="process-scrollbar-track" ref={trackRef}>
                <div
                  className="process-scrollbar-thumb"
                  style={{ transform: `scaleY(${scrollProgress / 100})` }}
                ></div>
              </div>
              <div className="process-steps" ref={stepsRef}>
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`process-step ${activeStep === index ? 'active' : ''}`}
                    ref={el => stepRefs.current[index] = el}
                  >
                    <div className="step-mobile-visual">
                      <img src={step.img} alt={step.title} />
                    </div>
                    <div className="step-num">{step.num}</div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="process-mobile-scrollbar">
                <div className="process-mobile-track">
                  <div
                    className="process-mobile-thumb"
                    style={{ left: `${scrollProgress}%`, transform: `translateX(-${scrollProgress}%)` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Visual */}
          <div className="process-visual-col">
            <div className="process-sticky">
              <div className="visual-container">
                {steps.map((step, index) => (
                  <img
                    key={index}
                    src={step.img}
                    alt={step.title}
                    className={`visual-img ${activeStep === index ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
