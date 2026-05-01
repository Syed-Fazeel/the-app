import React, { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    // Initial calculation
    updateHeight();

    // Small timeout to ensure fonts/images loaded
    setTimeout(updateHeight, 100);

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <>
      <div className="footer-spacer" style={{ height: footerHeight }}></div>

      <footer className="site-footer" ref={footerRef}>
        <div className="container">

          {/* Top Section - Links */}
          <div className="footer-section footer-links-section">
            <div className="footer-col">
              <h4 className="footer-heading"><span className="dot"></span> Company</h4>
              <div className="footer-links">
                <a href="#">About Us</a>
                <a href="#">Testimonials</a>
                <a href="#">Process</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading"><span className="dot"></span> Resources</h4>
              <div className="footer-links">
                <a href="#">Blog</a>
                <a href="#">Events</a>
                <a href="#">Press Release</a>
                <a href="#">Work</a>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading"><span className="dot"></span> Services</h4>
              <div className="footer-links">
                <a href="#">Mobile App</a>
                <a href="#">Game Development</a>
                <a href="#">Blockchain Development</a>
                <a href="#">AI Development</a>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading"><span className="dot"></span> Insights</h4>
              <div className="footer-links">
                <a href="#">University</a>
                <a href="#">Careers</a>
                <a href="#">Manifesto</a>
                <a href="#">Culture Book</a>
              </div>
            </div>
          </div>

          {/* Middle Section - Locations */}
          <div className="footer-section footer-locations-section">
            <div className="footer-col-full" style={{ gridColumn: '1 / -1' }}>
              <h4 className="footer-heading"><span className="dot"></span> Locations</h4>
            </div>
            <div className="locations-grid">
              <div className="location-item">
                <h3 className="location-city">Address</h3>
                <p className="location-address">560 Village Blvd., Suite 120 #3,<br />West Palm Beach, FL-33409,<br />United States</p>
              </div>
              <div className="location-item">
                <h3 className="location-city">US</h3>
                <p className="location-address">7Berkley Heights<br />New Jersey, North Road - 1O5,<br />Address</p>
              </div>
              <div className="location-item">
                <h3 className="location-city">Dubai</h3>
                <p className="location-address">IFZA Properties, DSO-IFZA,<br />Dubai Silicon Oasis, DXB-75900,<br />United Arab Emirates</p>
              </div>
              <div className="location-item">
                <h3 className="location-city">Karachi</h3>
                <p className="location-address">5Gulshan 13- D,<br /> Karachi, Sindh - 75400,<br />Pakistan</p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Contact, Logo, Socials */}
          <div className="footer-section footer-bottom-section">
            <div className="footer-contact">
              <h4 className="footer-heading"><span className="dot"></span> Contact</h4>
              <div className="contact-info">
                <a href="tel:8669782220">866-978-2220</a>
                <a href="mailto:info@theappsdevelopers.com">info@theappsdevelopers.com</a>
              </div>
            </div>

            <div className="footer-center">
              <h2 className="footer-logo">theappsdevelopers<span className="text-green">.</span></h2>
              <p className="copyright">&copy; 2026 Theappsdevelopers. All Rights Reserved</p>

            </div>

            <div className="footer-right">
              <div className="social-icons">
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="X">𝕏</a>
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="Dribbble">🏀</a>
                <a href="#" aria-label="YouTube">▶</a>
              </div>
              <div className="footer-legal">
                <a href="#">Privacy Policy</a>
                <span>|</span>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
