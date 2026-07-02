"use client";
import React, { useRef, useState, useEffect } from 'react';

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

export const Hero = () => {
  const glassCardRef = useRef<HTMLDivElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);

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
    <main className="hero-section">
      <div className="hero-animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="hero-content animate-on-scroll">
        <h2 className="greeting">Hello, I'm</h2>
        <h1 className="name">Sinan K</h1>
        <div className="role-container">
          <span className="static-text">I am a </span>
          <Typewriter roles={roles} />
          <span className="cursor">|</span>
        </div>
        <p className="description">
          I build fast, scalable web applications using modern technologies like React, Node.js, and Next.js.
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
  );
};
