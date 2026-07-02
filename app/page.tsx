"use client";
import { useEffect, useState, useRef } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt, FaLinux, FaAws, FaInstagram, FaGithub, FaWhatsapp, FaEnvelope, FaChartLine, FaShoppingCart, FaHospital, FaBuilding, FaMobileAlt, FaPhoneAlt, FaBars, FaTimes
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiFigma, SiFramer, SiMysql, SiFirebase, SiSwift, SiGo, SiFlutter, SiVuedotjs, SiAngular, SiGraphql, SiPrisma, SiRedis, SiSupabase, SiRedux, SiVercel, SiGooglecloud, SiExpo, SiAndroidstudio, SiElectron, SiIonic, SiKotlin
} from "react-icons/si";
import { InteractiveTerminal } from '../components/InteractiveTerminal';
import { Hero } from '../components/Hero';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
      { name: "Vue.js", icon: <SiVuedotjs color="#4FC08D" /> },
      { name: "Angular", icon: <SiAngular color="#DD0031" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "Go", icon: <SiGo color="#00ADD8" /> },
      { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> },
      { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
      { name: "Prisma", icon: <SiPrisma color="#ffffff" /> },
    ]
  },
  {
    title: "App Development",
    skills: [
      { name: "React Native", icon: <FaReact color="#61DAFB" /> },
      { name: "Flutter", icon: <SiFlutter color="#02569B" /> },
      { name: "Swift", icon: <SiSwift color="#F05138" /> },
      { name: "Kotlin", icon: <SiKotlin color="#7F52FF" /> },
      { name: "Expo", icon: <SiExpo color="#ffffff" /> },
      { name: "Android Studio", icon: <SiAndroidstudio color="#3DDC84" /> },
      { name: "Ionic", icon: <SiIonic color="#3880FF" /> },
      { name: "Electron", icon: <SiElectron color="#47848F" /> },
    ]
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Google Cloud", icon: <SiGooglecloud color="#4285F4" /> },
      { name: "Linux", icon: <FaLinux color="#ffffff" /> },
      { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
      { name: "Redux", icon: <SiRedux color="#764ABC" /> },
    ]
  }
];

const projectsData = [
  {
    title: "Etriq App Store",
    description: "A premium, centralized marketplace for discovering and managing enterprise-grade applications, built with a stunning Liquid Glass UI.",
    icon: <FaShoppingCart />,
    tags: ["React", "Next.js", "Stripe", "Framer Motion"]
  },
  {
    title: "Etriq LMS",
    description: "A comprehensive Learning Management System designed for modern educational institutions with real-time video and course tracking.",
    icon: <FaHospital />,
    tags: ["Next.js", "Node.js", "PostgreSQL", "WebRTC"]
  },
  {
    title: "MiniBakes",
    description: "A delightful e-commerce platform for a boutique bakery, featuring custom cake orders, secure checkout, and inventory management.",
    icon: <FaShoppingCart />,
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe"]
  },
  {
    title: "PricePilot",
    description: "An AI-powered dynamic pricing engine that tracks market trends and competitor data to optimize product pricing in real-time.",
    icon: <FaChartLine />,
    tags: ["React", "Python", "TensorFlow", "AWS"]
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    // Only apply 3D effect on desktop (if user has a mouse)
    if (window.innerWidth <= 768) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-5 to 5 degrees)
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.transition = 'transform 0.1s ease-out';
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    cardRef.current.style.transition = 'transform 0.5s ease-out';
  };

  return (
    <div 
      className="project-card" 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image-container icon-mode">
        <div className="project-icon-wrapper">
          {project.icon}
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};


export default function Home() {
  const glassCardRef = useRef<HTMLDivElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const projectsTrackRef = useRef<HTMLDivElement>(null);
  const [educationProgress, setEducationProgress] = useState(0);
  const [experienceProgress, setExperienceProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Timeline Logic
      const windowHeight = window.innerHeight;
      
      if (educationRef.current) {
        const rect = educationRef.current.getBoundingClientRect();
        const scrollPosition = (windowHeight / 2) - rect.top;
        let progress = scrollPosition > 0 ? (scrollPosition / rect.height) * 100 : 0;
        setEducationProgress(Math.min(Math.max(progress, 0), 100));
      }

      if (experienceRef.current) {
        const rect = experienceRef.current.getBoundingClientRect();
        const scrollPosition = (windowHeight / 2) - rect.top;
        let progress = scrollPosition > 0 ? (scrollPosition / rect.height) * 100 : 0;
        setExperienceProgress(Math.min(Math.max(progress, 0), 100));
      }

      const nodes = Array.from(document.querySelectorAll('.timeline-item'));
      nodes.forEach((el) => {
        if (el.getBoundingClientRect().top + 20 <= windowHeight / 2) {
          el.classList.add('node-active');
        } else {
          el.classList.remove('node-active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Projects horizontal scroll — driven by scroll progress
  useEffect(() => {
    if (isMobile) return;
    const section = projectsSectionRef.current;
    const track = projectsTrackRef.current;
    if (!section || !track) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight; // 300vh
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);

      const maxTranslate = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(-${maxTranslate * progress}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroVisualRef.current || !glassCardRef.current) return;

    const rect = heroVisualRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    glassCardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    glassCardRef.current.style.transition = 'transform 0.1s ease-out';

  };

  const handleMouseLeave = () => {
    if (!glassCardRef.current) return;
    glassCardRef.current.style.transform = 'rotateX(5deg) rotateY(-5deg) scale(1)';
    glassCardRef.current.style.transition = 'transform 0.5s ease-out';
  };

  return (
    <>

      <header className="header-container">
        <div className="logo">SK<span className="dot">.</span></div>
        <nav className="nav-pill">
          <ul className="nav-pill-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#contact" className="contact-btn">Hire Me</a>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      <Hero />

      <section id="about" className="about-section animate-on-scroll">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-terminal-wrapper animate-on-scroll">
            <InteractiveTerminal />
          </div>
          <div className="about-text">
            <h3 className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              I'm a passionate developer building the future of the web.
            </h3>
            <p className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              With a strong foundation in full-stack development, I specialize in crafting beautiful,
              responsive, and highly performant applications. My journey in tech is driven by an
              insatiable curiosity and a desire to solve complex problems through elegant code.
            </p>
            <p className="animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
              When I'm not coding, you can find me exploring new technologies, refining my design
              skills, or working on personal projects that push the boundaries of what's possible on the web.
            </p>
            <div className="stats-container animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-scroll-container" ref={projectsSectionRef}>
        <div className="projects-sticky-wrapper">
          <h2 className="section-title projects-title animate-on-scroll">Featured <span>Projects</span></h2>
          
          <div className="projects-horizontal-track" ref={projectsTrackRef}>
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="timeline-section" ref={timelineSectionRef}>
        <h2 className="section-title">My <span>Journey</span></h2>

        <div className="timelines-wrapper">

          <div className="timeline-column" ref={educationRef}>
            <h3 className="column-title">Education</h3>
            <div className="timeline-container single-column">
              <div className="timeline-progress-line" style={{ height: `${educationProgress}%` }}></div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-content">
                  <span className="timeline-date">2025 - 2028</span>
                  <h3 className="timeline-title">BCA</h3>
                  <p className="timeline-subtitle">Bachelor of Computer Applications</p>
                  <p className="timeline-desc">Pursuing comprehensive studies in computer science, software engineering, and modern application development.</p>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-content">
                  <span className="timeline-date">2025 - 2026</span>
                  <h3 className="timeline-title">Software Development</h3>
                  <p className="timeline-subtitle">Independent Learning</p>
                  <p className="timeline-desc">Mastering advanced software engineering principles, system design, and building scalable applications.</p>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-content">
                  <span className="timeline-date">2024 - 2025</span>
                  <h3 className="timeline-title">App Development</h3>
                  <p className="timeline-subtitle">Independent Learning</p>
                  <p className="timeline-desc">Focused on building cross-platform mobile experiences, learning modern frameworks, and understanding mobile user interfaces.</p>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-content">
                  <span className="timeline-date">2023 - 2024</span>
                  <h3 className="timeline-title">Web Development</h3>
                  <p className="timeline-subtitle">Independent Learning</p>
                  <p className="timeline-desc">Started my journey in tech by mastering HTML, CSS, JavaScript, and building my first responsive websites.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="timeline-column" ref={experienceRef}>
            <h3 className="column-title">Experience</h3>
            <div className="timeline-container single-column">
              <div className="timeline-progress-line" style={{ height: `${experienceProgress}%` }}></div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-content">
                  <span className="timeline-date">2026 - Present</span>
                  <h3 className="timeline-title">Founder & Lead Developer</h3>
                  <p className="timeline-subtitle">Etriq</p>
                  <p className="timeline-desc">Leading the development of innovative digital solutions and building my own brand. Overseeing full-stack projects from ideation to deployment.</p>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-content">
                  <span className="timeline-date">2024 - 2026</span>
                  <h3 className="timeline-title">Full Stack Developer</h3>
                  <p className="timeline-subtitle">Tech Solutions Inc</p>
                  <p className="timeline-desc">Developed scalable web applications, led a small team of frontend developers, and successfully migrated a monolithic architecture to microservices.</p>
                </div>
              </div>

              <div className="timeline-item animate-on-scroll">
                <div className="timeline-content">
                  <span className="timeline-date">2023 - 2024</span>
                  <h3 className="timeline-title">Junior Web Developer</h3>
                  <p className="timeline-subtitle">Creative Agency</p>
                  <p className="timeline-desc">Built responsive landing pages, optimized website performance, and collaborated closely with UI/UX designers to bring mockups to life.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skills-bg-pattern"></div>
        <h2 className="section-title animate-on-scroll">My <span>Skills</span></h2>

        <div className="skills-container animate-on-scroll">
          {skillCategories.map((category, idx) => (
            <div className="skill-category animate-on-scroll" key={idx}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-grid">
                {category.skills.map((skill, index) => (
                  <div className="skill-card tooltip-container" key={index}>
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="tooltip">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title animate-on-scroll">Get In <span>Touch</span></h2>
        <div className="contact-content animate-on-scroll">
          <div className="contact-info">
            <h3>Let's build something awesome together!</h3>
            <p>Feel free to reach out to me for any inquiries, project collaborations, or just to say hi.</p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-icon"><FaPhoneAlt /></span>
                <a href="tel:+919846170136">+91 98461 70136</a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon"><FaWhatsapp /></span>
                <a href="https://wa.me/919846170136" target="_blank" rel="noreferrer">WhatsApp: 9846170136</a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon"><FaEnvelope /></span>
                <a href="mailto:msinankavala786@gmail.com">msinankavala786@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="contact-visual">
            <div className="social-card">
              <div className="social-background"></div>
              <div className="social-logo contact-prompt">
                <span>Contact Me</span>
              </div>
              <a href="https://instagram.com/sinan.avl" target="_blank" rel="noreferrer" className="social-box social-box1">
                <span className="social-icon"><FaInstagram /></span>
              </a>
              <a href="https://github.com/Sinxn-coder" target="_blank" rel="noreferrer" className="social-box social-box2">
                <span className="social-icon"><FaGithub /></span>
              </a>
              <a href="https://wa.me/919846170136" target="_blank" rel="noreferrer" className="social-box social-box3">
                <span className="social-icon"><FaWhatsapp /></span>
              </a>
              <a href="mailto:msinankavala786@gmail.com" className="social-box social-box4">
                <span className="social-icon"><FaEnvelope /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/919846170136" target="_blank" rel="noopener noreferrer" className="floating-whatsapp">
        <FaWhatsapp />
        <span className="whatsapp-tooltip">Contact Us</span>
      </a>
    </>
  );
}
