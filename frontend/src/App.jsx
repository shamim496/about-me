import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Fetch data from Spring Boot API
  useEffect(() => {
    fetchAboutData();
  }, []);

  // Smooth scroll and back to top button
  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button after scrolling 300px
      setShowBackToTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = ["home", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/api/about");

      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }

      const data = await response.json();
      setAboutData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching about data:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="app dark-theme">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading your portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app dark-theme">
        <div className="error-container">
          <h2>⚠️ Error</h2>
          <p>{error}</p>
          <p className="error-hint">
            Make sure the Spring Boot backend is running on port 8080
          </p>
          <button onClick={fetchAboutData} className="retry-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!aboutData) {
    return null;
  }

  // Technology stack for Full Stack Developer
  const technologies = [
    { name: "React", position: "top-right", icon: "⚛️", type: "emoji" },
    { name: "Node.js", position: "right", icon: "🟢", type: "emoji" },
    { name: "Java", position: "bottom-right", icon: "☕", type: "emoji" },
    { name: "Spring", position: "bottom-left", icon: "🍃", type: "emoji" },
    {
      name: "WordPress",
      position: "left",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      type: "image",
    },
    { name: "MySQL", position: "top-left", icon: "🐬", type: "emoji" },
  ];

  // Skills/Services
  const services = [
    {
      icon: "/icons/frontend.png",
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React",
      type: "image",
    },
    {
      icon: "/icons/backend.png",
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Java & Node.js",
      type: "image",
    },
    {
      icon: "/icons/wordpress.png",
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and website development",
      type: "image",
    },
    {
      icon: "/icons/api.png",
      title: "API Development",
      description: "Designing and implementing RESTful APIs",
      type: "image",
    },
    {
      icon: "/icons/database.png",
      title: "Database Design",
      description: "Structuring and optimizing database schemas",
      type: "image",
    },
    {
      icon: "/icons/performance.png",
      title: "Performance Optimization",
      description:
        "Improving website speed, Core Web Vitals, caching, and overall performance",
      type: "image",
    },
    {
      icon: "/icons/web-security.png",
      title: "Web Security & Hardening",
      description:
        "Protecting applications from vulnerabilities, malware, and security threats",
      type: "image",
    },
    {
      icon: "/icons/api.png",
      title: "Custom Plugin Development",
      description:
        "Building lightweight, secure and high-performance plugins for WordPress or custom systems",
      type: "image",
    },
  ];

  // Sample projects (you can expand this with real data)
  const projects = [
    {
      title: "Modern E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React frontend and Spring Boot backend",
      tag: "Frontend Development",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    },
    {
      title: "Enterprise REST API System",
      description:
        "Scalable microservices architecture with Java Spring Boot and Node.js",
      tag: "Backend Development",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    },
    {
      title: "Custom WordPress CMS",
      description:
        "Advanced WordPress theme with custom plugins and WooCommerce integration",
      tag: "WordPress Development",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop",
    },
    {
      title: "Payment Gateway Integration",
      description:
        "RESTful API for payment processing with multiple gateway support",
      tag: "API Development",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    },
    {
      title: "Analytics Database System",
      description:
        "Optimized MySQL database design for real-time analytics and reporting",
      tag: "Database Design",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    },
    {
      title: "High-Performance Web App",
      description:
        "Optimized web application with 95+ Core Web Vitals score and CDN integration",
      tag: "Performance Optimization",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
    {
      title: "Secure Banking Portal",
      description:
        "Enterprise-grade security implementation with SSL, encryption, and threat protection",
      tag: "Web Security & Hardening",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    },
    {
      title: "WordPress Plugin Suite",
      description:
        "Lightweight, secure plugins for SEO, caching, and custom functionality",
      tag: "Custom Plugin Development",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    },
  ];

  // Statistics
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Technologies" },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, Tech Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Outstanding work! Shamim delivered a high-quality e-commerce platform that exceeded our expectations. Professional and reliable.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Excellent WordPress developer. Created a beautiful, fast website with custom plugins. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      text: "Great experience working with Shamim. The API integration was seamless and the performance optimization was impressive.",
      rating: 5,
    },
  ];

  // Experience Timeline
  const experiences = [
    {
      year: "2022 - Present",
      title: "Senior Full Stack Developer",
      company: "Sigmative.",
      description:
        "Leading development of enterprise web applications using React and Spring Boot. Managing a team of 5 developers.",
      skills: ["React", "Spring Boot", "AWS", "Team Leadership"],
    },
    {
      year: "2020 - 2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Inc.",
      description:
        "Developed and maintained multiple client projects. Specialized in WordPress and custom web applications.",
      skills: ["WordPress", "PHP", "JavaScript", "MySQL"],
    },
    {
      year: "2019 - 2020",
      title: "Junior Web Developer",
      company: "StartUp Hub",
      description:
        "Built responsive websites and learned modern web development practices. Contributed to 10+ successful projects.",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
    },
  ];

  // Achievements
  const achievements = [
    {
      icon: "🏆",
      title: "AWS Certified Developer",
      description: "Amazon Web Services Certification",
      year: "2023",
    },
    {
      icon: "⭐",
      title: "Top Rated Freelancer",
      description: "Upwork & Fiverr 5-star rating",
      year: "2022",
    },
    {
      icon: "🎓",
      title: "React Advanced Certification",
      description: "Meta Front-End Developer",
      year: "2022",
    },
    {
      icon: "💡",
      title: "Hackathon Winner",
      description: "National Web Dev Competition",
      year: "2021",
    },
  ];

  return (
    <div className="app dark-theme">
      {/* Decorative circles */}
      <div className="decorative-circle yellow-circle"></div>
      <div className="decorative-circle green-circle"></div>

      {/* Navigation */}
      <nav className="navbar dark">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">
              {aboutData.name.split(" ")[0].toUpperCase()}
            </span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("home")}
                className={`nav-link ${
                  activeSection === "home" ? "active" : ""
                }`}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`nav-link ${
                  activeSection === "portfolio" ? "active" : ""
                }`}
              >
                Portfolio
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("contact")}
                className={`nav-link ${
                  activeSection === "contact" ? "active" : ""
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
          <button
            className="contact-btn-nav"
            onClick={() => scrollToSection("contact")}
          >
            <span className="contact-icon">✉️</span>
            <span>Contact Me</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-container">
          {/* Left Side - Text Content */}
          <div className="hero-left">
            <p className="intro-text">— Introducing</p>
            <h1 className="hero-title">
              Hello
              <br />
              I'm {aboutData.name.split(" ")[0]}
              <br />
              <span className="highlight-name">
                {aboutData.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="hero-description">{aboutData.bio}</p>
            <button className="cta-button yellow">Contact Me</button>
          </div>

          {/* Right Side - Profile Image with Tech Icons */}
          <div className="hero-right">
            <div className="profile-container">
              {/* Technology Icons */}
              {technologies.map((tech, index) => (
                <div key={index} className={`tech-badge ${tech.position}`}>
                  {tech.type === "image" ? (
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="tech-icon-img"
                    />
                  ) : (
                    <span className="tech-icon">{tech.icon}</span>
                  )}
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}

              {/* Profile Image Circle */}
              <div className="profile-circle green">
                <div className="profile-image">
                  <img
                    src="/profile.jpg"
                    alt={aboutData.name}
                    className="profile-photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Skills Section */}
      <section className="services-section" id="portfolio">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  {service.type === "image" ? (
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="service-icon-img"
                    />
                  ) : (
                    <span className="service-icon">{service.icon}</span>
                  )}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Why Hire Me Section */}
          <div className="why-hire-section">
            <p className="section-label">— My Skills</p>
            <h2 className="section-title">Why Hire Me For Next Project?</h2>
            <p className="section-description">
              As a passionate {aboutData.profession}, I bring expertise in
              modern web technologies and frameworks. I love creating efficient,
              scalable solutions that make a difference. With skills in{" "}
              {aboutData.skills.slice(0, 3).join(", ")}, and more, I'm ready to
              bring your vision to life.
            </p>

            {/* Skills with Progress Bars */}
            <div className="skills-display">
              <h3 className="skills-heading">Core Technologies & Expertise:</h3>

              <div className="skills-categories">
                {/* Frontend Skills */}
                <div className="skill-category">
                  <h4 className="category-title">Frontend Development</h4>
                  <div className="skill-bars">
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">React</span>
                        <span className="skill-percentage">90%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">JavaScript</span>
                        <span className="skill-percentage">85%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">HTML/CSS</span>
                        <span className="skill-percentage">95%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend Skills */}
                <div className="skill-category">
                  <h4 className="category-title">Backend Development</h4>
                  <div className="skill-bars">
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">Java</span>
                        <span className="skill-percentage">88%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">Spring Boot</span>
                        <span className="skill-percentage">85%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">Node.js</span>
                        <span className="skill-percentage">80%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Skills */}
                <div className="skill-category">
                  <h4 className="category-title">Other Technologies</h4>
                  <div className="skill-bars">
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">WordPress</span>
                        <span className="skill-percentage">92%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">PHP</span>
                        <span className="skill-percentage">78%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">MySQL</span>
                        <span className="skill-percentage">85%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Skills Tags */}
              <div className="all-skills-tags">
                <h4 className="tags-heading">All Technologies:</h4>
                <div className="skills-grid">
                  {aboutData.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="project-content">
                <p className="project-tag">— {project.tag}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button className="read-more-btn">
                  <span>→</span> Read More
                </button>
              </div>
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-screenshot"
                  />
                ) : (
                  <div className="project-placeholder">
                    <span className="project-icon">💼</span>
                    <p>Project Screenshot</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <button className="view-all-btn">View All</button>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="experience-section">
        <div className="experience-container">
          <p className="section-label">— Career Journey</p>
          <h2 className="section-title">Work Experience</h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-skills">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="timeline-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="achievements-container">
          <p className="section-label">— Recognition</p>
          <h2 className="section-title">Achievements & Certifications</h2>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
                <span className="achievement-year">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <p className="section-label">— Testimonials</p>
          <h2 className="section-title">What Clients Say About Me</h2>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Next Project?</h2>
            <p className="cta-description">
              Let's collaborate and bring your ideas to life. I'm available for
              freelance projects and full-time opportunities.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-btn primary">
                <span>Get In Touch</span>
                <span className="btn-arrow">→</span>
              </a>
              <a href="#portfolio" className="cta-btn secondary">
                <span>View Portfolio</span>
              </a>
            </div>
            <div className="cta-availability">
              <span className="status-dot"></span>
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-layout">
            {/* Left Side - Contact Info */}
            <div className="contact-left">
              <p className="contact-label">— Contact Us</p>
              <h2 className="contact-title">
                Let's Talk for{" "}
                <span className="highlight-text">Your Next Projects</span>
              </h2>
              <p className="contact-description">
                Have a project in mind? Let's discuss how I can help bring your
                ideas to life.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📞</span>
                  </div>
                  <span className="contact-text">+880 1780-900241</span>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📧</span>
                  </div>
                  <span className="contact-text">
                    mdshamimhasan496@gmail.com
                  </span>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span>💬</span>
                  </div>
                  <span className="contact-text">@shamimhasan</span>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📍</span>
                  </div>
                  <span className="contact-text">
                    Lotifpur, Moddhopara, Bogura Sadar 5800
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-right">
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ex. John Doe"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter Phone Number"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="interest">I'm Interested in *</label>
                    <select
                      id="interest"
                      name="interest"
                      className="form-select"
                      required
                    >
                      <option value="">Select</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="fullstack">Full Stack Project</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="budget">Budget Range (USD) *</label>
                    <select
                      id="budget"
                      name="budget"
                      className="form-select"
                      required
                    >
                      <option value="">Select Range</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-20000">$10,000 - $20,000</option>
                      <option value="20000+">$20,000+</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="country">Country *</label>
                    <select
                      id="country"
                      name="country"
                      className="form-select"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="bd">Bangladesh</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                    </select>
                  </div>
                </div>

                <div className="form-field-full">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Enter here..."
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <span>Submit</span>
                  <span className="submit-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span className="arrow-up">↑</span>
        </button>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Footer Left - Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon">◈</span>
                <span className="logo-text">
                  {aboutData.name.split(" ")[0].toUpperCase()}
                </span>
              </div>
              <p className="footer-tagline">
                Building digital experiences that matter
              </p>
            </div>

            {/* Footer Center - Quick Links */}
            <div className="footer-links">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-menu">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Footer Right - Social */}
            <div className="footer-social">
              <h4 className="footer-heading">Follow Me</h4>
              <div className="social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>© 2024 {aboutData.name}. All rights reserved.</p>
            <p className="footer-tech">Built with React & Spring Boot</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
