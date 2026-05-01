import React from 'react';

export default function CaseStudies() {
  return (
    <section className="case-studies-section">
      <div className="container">
        <div className="cs-header">
          <h2 className="cs-title">Our success stories</h2>
          <a href="#" className="cs-link">More case studies &rarr;</a>
        </div>

        <div className="cs-grid">
          <div className="cs-col">
            <div className="cs-card">
              <div className="cs-image-wrapper">
                <img src="/images/goobr_app.png" alt="Goobr App Mockup" className="cs-image" />
              </div>
              <div className="cs-content">
                <div className="cs-logo goobr-logo">goobr</div>
                <h3 className="cs-card-title">
                  <span className="underline">A Social Networking for Pets and Pet </span>
                  <span className="underline">Owners</span>
                </h3>
                <p className="cs-card-desc">
                  Goobr is a trailblazing social networking app dedicated to pets and their owners.
                </p>
              </div>
            </div>

            <div className="cs-card">
              <div className="cs-image-wrapper">
                <img src="/images/partyshark.png" alt="PartyShark App Mockup" className="cs-image" />
              </div>
              <div className="cs-content">
                <div className="cs-logo partyshark-logo">
                  <span className="partyshark-icon"></span>
                  PartyShark
                </div>
                <h3 className="cs-card-title">
                  A Social Networking and Event Management App
                </h3>
                <p className="cs-card-desc">
                  App designed for young partygoers, specializes in facilitating the organization & discovery of house parties.
                </p>
              </div>
            </div>
          </div>

          <div className="cs-col cs-col-offset">
            <div className="cs-card">
              <div className="cs-image-wrapper">
                <img src="/images/tulsa_airport.png" alt="Tulsa Airport Mockup" className="cs-image" />
              </div>
              <div className="cs-content">
                <div className="cs-logo tulsa-logo">
                  <div className="tulsa-icon-wrap">
                    <span className="tulsa-icon-blue"></span>
                    <span className="tulsa-icon-red"></span>
                  </div>
                  <div className="tulsa-text">Tulsa<br /><span>International Airport</span></div>
                </div>
                <h3 className="cs-card-title">
                  <span className="underline">Official Website and App for Tulsa </span>
                  <span className="underline">Airport</span>
                </h3>
                <p className="cs-card-desc">
                  Tulsa Airport, a prominent name in aviation, sought Theappsdev's expertise to enhance its digital presence.
                </p>
              </div>
            </div>

            <div className="cs-card">
              <div className="cs-image-wrapper">
                <img src="/images/wagmi.png" alt="WAGMI Game Mockup" className="cs-image" />
              </div>
              <div className="cs-content">
                <div className="cs-logo wagmi-logo">
                  WAGM<span className="wagmi-accent">I</span>
                </div>
                <h3 className="cs-card-title">
                  Multiplayer Tower Defense Game
                </h3>
                <p className="cs-card-desc">
                  A PvP play-and-earn mobile tower defense game where players can own, trade, and use in-game NFT assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
