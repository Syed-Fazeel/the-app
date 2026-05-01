import React, { useState } from 'react';

const tabs = [
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'web', label: 'Web Platforms' },
  { id: 'cross', label: 'Cross Platforms' },
  { id: 'games', label: 'Games' },
  { id: 'database', label: 'Database' },
  { id: 'cloud', label: 'Cloud & DevOps' }
];

const technologies = {
  mobile: [
    { subcategory: 'iOS', items: ['Swift', 'UI Kit', 'RxSwift', 'Combine', 'MVVM', 'Alomofire', 'Core Data'] },
    { subcategory: 'Android', items: ['Kotlin', 'MVVM', 'RxJava', 'Java', 'Android SDK', 'Jetpack'] }
  ],
  web: [
    { subcategory: 'Frontend', items: ['React JS', 'Next JS', 'Vue JS', 'Angular'] },
    { subcategory: 'Backend', items: ['Node JS', 'Python', 'PHP', 'Ruby'] },
    { subcategory: 'CMS', items: ['WordPress', 'Shopify', 'Magento', 'Webflow'] }
  ],
  cross: [
    { subcategory: 'React Native', items: ['React Native', 'Expo'] },
    { subcategory: 'Flutter', items: ['Flutter', 'Dart'] }
  ],
  games: [
    { subcategory: 'Engines', items: ['Unity', 'Unreal Engine', 'Godot'] }
  ],
  database: [
    { subcategory: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'] }
  ],
  cloud: [
    { subcategory: 'DevOps', items: ['Docker', 'Kubernetes', 'Jenkins'] },
    { subcategory: 'Cloud Services', items: ['AWS', 'Azure', 'Google Cloud', 'Firebase'] }
  ]
};

// Placeholder Icon Component
const TechIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('mobile');

  return (
    <section className="tech-section">
      <div className="container">
        <div className="tech-header">
          <h2 className="tech-title">Technologies we use</h2>
          <p className="tech-desc">
            Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly.
          </p>
        </div>

        <div className="tech-layout">
          {/* Sidebar Tabs */}
          <div className="tech-sidebar">
            <ul className="tech-tabs">
              {tabs.map((tab) => (
                <li key={tab.id} className="tech-tab-item">
                  <button
                    className={`tech-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="tab-indicator"></span>
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Area */}
          <div className="tech-content">
            {technologies[activeTab]?.map((group, idx) => (
              <div key={idx} className="tech-group">
                <h3 className="tech-group-title">{group.subcategory}</h3>
                <div className="tech-grid">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="tech-card">
                      <div className="tech-icon-wrapper">
                        <TechIcon />
                      </div>
                      <span className="tech-name">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
