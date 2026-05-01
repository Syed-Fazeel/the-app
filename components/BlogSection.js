import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'Which AI Software Development Company Should You Choose in 2026?',
    category: 'Artificial Intelligence',
    date: '27 Mar, 2026',
    imageHeight: '280px',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Building for Scale: The Tech Behind Top-Grossing Mobile Games',
    category: 'Game',
    date: '26 Mar, 2026',
    imageHeight: '200px',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Which Custom App Development Company is Best for Startups in...',
    category: 'App Development',
    date: '25 Mar, 2026',
    imageHeight: '240px',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <h2 className="blog-title">Our blogs</h2>
          <a href="#" className="view-all-link">View All &rarr;</a>
        </div>
        <div className="blog-grid">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <div 
                className="blog-image" 
                style={{ 
                  height: blog.imageHeight,
                  backgroundImage: `url(${blog.image})` 
                }}
              ></div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-meta-dot">・</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <h3 className="blog-card-title">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
