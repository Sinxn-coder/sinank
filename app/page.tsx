"use client";
import { useEffect, useState, useRef } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt, FaLinux, FaAws, FaInstagram, FaGithub, FaWhatsapp, FaEnvelope, FaChartLine, FaShoppingCart, FaHospital, FaBuilding, FaMobileAlt, FaPhoneAlt, FaBars, FaTimes
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiFigma, SiFramer, SiMysql, SiFirebase, SiSwift, SiGo, SiFlutter, SiVuedotjs, SiAngular, SiGraphql, SiPrisma, SiRedis, SiSupabase, SiRedux, SiVercel, SiGooglecloud, SiExpo, SiAndroidstudio, SiElectron, SiIonic, SiKotlin
} from "react-icons/si";

const roles = [
  "Web Developer",
  "Full Stack Developer",
  "App Developer",
  "Software Developer"
];

function Typewriter({ roles }: { roles: string[] }) {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typeSpeed, setTypeSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypeSpeed(50);
      }, typeSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypeSpeed(100);
      }, typeSpeed);
    }

    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypeSpeed(500);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typeSpeed, roles]);

  return <span className="dynamic-text">{currentText}</span>;
}

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
    title: "Admin Dashboard",
    description: "A comprehensive analytics and management dashboard for tracking users, revenue, and system metrics in real-time.",
    icon: <FaChartLine />,
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    title: "Global E-Commerce Platform",
    description: "A highly scalable marketplace connecting international sellers with buyers, featuring complex payment routing and multi-currency support.",
    icon: <FaShoppingCart />,
    tags: ["React", "Express", "MongoDB", "Stripe"]
  },
  {
    title: "Healthcare System",
    description: "A secure, HIPAA-compliant patient management system for medical professionals to track patient records and appointments.",
    icon: <FaHospital />,
    tags: ["Vue.js", "Python", "Django", "PostgreSQL"]
  },
  {
    title: "Real Estate Portal",
    description: "An interactive property listing platform with advanced filtering, map integration, and virtual tour capabilities.",
    icon: <FaBuilding />,
    tags: ["React Native", "Firebase", "Google Maps API"]
  },
  {
    title: "Social Media Platform",
    description: "A modern social application featuring real-time messaging, content sharing, and personalized feeds.",
    icon: <FaMobileAlt />,
    tags: ["Flutter", "Go", "Redis", "Docker"]
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
const TypewriterText = ({ text, bodyRef }: { text: React.ReactNode, bodyRef: React.RefObject<HTMLDivElement | null> }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (typeof text !== 'string') return;
    
    let index = 0;
    setDisplayedText(''); // Ensure it starts empty
    
    const interval = setInterval(() => {
      // Use substring to avoid React StrictMode double-invocation bugs
      setDisplayedText(text.substring(0, index + 1));
      index++;
      
      // Auto scroll as it types
      if (bodyRef.current) {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      }
      
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 10);
    
    return () => clearInterval(interval);
  }, [text, bodyRef]);

  if (typeof text !== 'string') {
    return <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>;
  }

  return <span style={{ whiteSpace: 'pre-wrap' }}>{displayedText}</span>;
};

const COMMANDS = ['help', 'whoami', 'skills', 'contact', 'photo', 'clear', 'sudo rm -rf /'];

const InteractiveTerminal = () => {
  const [history, setHistory] = useState<{type: 'input' | 'output' | 'error' | 'image', text: string | React.ReactNode}[]>([
    { type: 'output', text: 'Welcome to SK Terminal v1.0.0' },
    { type: 'output', text: 'Type "help" to see a list of available commands.' }
  ]);
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    if (val.trim()) {
      const match = COMMANDS.find(cmd => cmd.startsWith(val.toLowerCase()));
      setSuggestion(match ? match.substring(val.length) : '');
    } else {
      setSuggestion('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' && suggestion) {
      e.preventDefault();
      setInput(input + suggestion);
      setSuggestion('');
    }
  };

  const executeCommand = (cmdStr: string) => {
    setSuggestion('');
    const cmd = cmdStr.trim().toLowerCase();
    
    if (!cmd) return;
    
    const newHistory = [...history, { type: 'input', text: cmdStr }];
    
    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'output', text: 'Available commands: \n  help    - Show this message\n  whoami  - Print user bio\n  skills  - List core technologies\n  contact - Print contact info\n  photo   - Show a photo of me\n  clear   - Clear terminal screen' });
        break;
      case 'whoami':
        newHistory.push({ type: 'output', text: 'Sinan K\nA passionate multi-disciplinary developer building the future of the web and mobile applications.' });
        break;
      case 'skills':
        newHistory.push({ type: 'output', text: 'Frontend: React, Next.js, Tailwind CSS\nBackend:  Node.js, Express, Go, Python\nMobile:   React Native, Flutter, Swift\nCloud:    AWS, Docker, Linux, Vercel' });
        break;
      case 'contact':
        newHistory.push({ type: 'output', text: 'Phone:     +91 98461 70136\nWhatsApp:  +91 98461 70136\nEmail:     msinankavala786@gmail.com\nGitHub:    github.com/Sinxn-coder\nInstagram: instagram.com/sinan.avl\nStatus:    Open to new opportunities' });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'photo':
        newHistory.push({ type: 'image', text: '' });
        break;
      case 'sudo rm -rf /':
        newHistory.push({ type: 'error', text: 'bash: permission denied: Nice try though! 😉' });
        break;
      default:
        newHistory.push({ type: 'error', text: `Command not found: ${cmd}. Type "help" for a list of commands.` });
    }
    
    setHistory(newHistory as any);
    setInput('');
    setSuggestion('');
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="close-btn"></span>
          <span className="min-btn"></span>
          <span className="max-btn"></span>
        </div>
        <div className="terminal-title">guest@sk-portfolio:~</div>
      </div>
      <div className="terminal-body" ref={bodyRef} onClick={() => document.getElementById('terminal-input')?.focus()}>
        {history.map((line, i) => (
          <div key={i} className={`terminal-line ${line.type}`}>
            {line.type === 'input' && <span className="prompt">guest@sk:~$ </span>}
            {line.type === 'image' ? (
              <img src="/me.webp" alt="Sinan" className="terminal-photo" />
            ) : line.type === 'input' ? (
              <span style={{ whiteSpace: 'pre-wrap' }}>{line.text}</span>
            ) : (
              <TypewriterText text={line.text} bodyRef={bodyRef} />
            )}
          </div>
        ))}
        {isMobile ? (
          <div className="terminal-chips">
            {COMMANDS.filter(c => c !== 'sudo rm -rf /').map(c => (
              <button key={c} className="terminal-chip" onClick={() => executeCommand(c)}>
                {c}
              </button>
            ))}
          </div>
        ) : (
          <form onSubmit={handleCommand} className="terminal-input-line">
            <span className="prompt">guest@sk:~$ </span>
            <div className="terminal-input-wrapper">
              <input 
                id="terminal-input"
                type="text" 
                value={input} 
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                spellCheck="false"
                autoComplete="off"
                autoFocus
                size={Math.max(input.length + 1, 1)}
              />
              {suggestion && (
                <span className="terminal-suggestion">{suggestion}</span>
              )}
            </div>
          </form>
        )}
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

      // Projects horizontal scroll logic
      if (projectsSectionRef.current && projectsTrackRef.current) {
        const rect = projectsSectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height - window.innerHeight);
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          const trackWidth = projectsTrackRef.current.scrollWidth;
          const windowWidth = window.innerWidth;
          const maxTranslate = trackWidth - windowWidth + (windowWidth * 0.1);
          projectsTrackRef.current.style.transform = `translateX(-${maxTranslate * scrollProgress}px)`;
        } else if (scrollProgress < 0) {
          projectsTrackRef.current.style.transform = 'translateX(0)';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

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

      <main className="hero-section">
        <div className="hero-content animate-on-scroll">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Sinan K</h1>
          <div className="role-container">
            <span className="static-text">I am a </span>
            <Typewriter roles={roles} />
            <span className="cursor">|</span>
          </div>
          <p className="description">
            Transforming ideas into exceptional digital experiences. I specialize in building robust, scalable applications across the full stack.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>

        <div
          className="hero-visual animate-on-scroll"
          ref={heroVisualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="glass-card" ref={glassCardRef}>
            <div className="code-header">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
            </div>
            <pre className="code-snippet"><code>
              <span className="keyword">const</span> developer <span className="operator">=</span> {'{\n'}
              {'  name: '}<span className="string">'Sinan K'</span>{',\n'}
              {'  skills: [\n'}
              {'    '}<span className="string">'Web Development'</span>{',\n'}
              {'    '}<span className="string">'Full Stack'</span>{',\n'}
              {'    '}<span className="string">'App Development'</span>{'\n'}
              {'  ],\n'}
              {'  hardWorker: '}<span className="boolean">true</span>{',\n'}
              {'  buildAwesomeThings: '}<span className="keyword">function</span>{'() {\n'}
              {'    '}<span className="keyword">return</span> <span className="string">'🚀'</span>{';\n'}
              {'  }\n'}
              {'}'};
            </code></pre>
          </div>
        </div>
      </main>

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
                <span className="stat-number">20+</span>
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
    </>
  );
}
