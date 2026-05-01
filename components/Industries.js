import React from 'react';

const industries = [
  {
    title: "Automotive",
    desc: "Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs."
  },
  {
    title: "Finance",
    desc: "Get scalable custom solutions that enhance operational efficiency, boost data security, and streamline your financial services seamlessly."
  },
  {
    title: "Real Estate",
    desc: "Our custom real estate solutions simplify property management and sales, streamline operations, and enhance customer experience effectively."
  },
  {
    title: "Hospitality",
    desc: "Get user-friendly hospitality solutions that enhance guest experiences, boost satisfaction, and streamline hotel operations for better service delivery."
  },
  {
    title: "Education",
    desc: "Revolutionize ed-tech with innovative solutions that increase student engagement, simplify learning, and support personalized education experiences."
  },
  {
    title: "Healthcare",
    desc: "Our healthcare solutions streamline operations, reduce administrative tasks, and improve patient care for more efficient and responsive medical services."
  }
];

export default function Industries() {
  return (
    <section className="industries-section">
      <div className="container">
        <div className="industries-header">
          <h2 className="industries-title">Industries we serve</h2>
          <p className="industries-desc">
            With a wide range of services and proven experience across major industries, we<br/>understand your challenges and deliver tailored solutions that overcome them<br/>and drive meaningful impact.
          </p>
        </div>
        
        <div className="industries-grid">
          {industries.map((item, index) => (
            <div key={index} className="industry-card">
              <h3 className="industry-name">{item.title}</h3>
              <p className="industry-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
