"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

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
  const heroVisualRef = useRef<HTMLDivElement>(null);

  return (
    <main className="hero-section">
      <div className="hero-animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="hero-stage">
        <div className="hero-content animate-on-scroll">
          <h2 className="greeting">Hello, I&apos;m</h2>
          <h1 className="name">Sinan<br />K</h1>
          <div className="role-container">
            <span className="static-text">I am a </span>
            <Typewriter roles={roles} />
            <span className="cursor">|</span>
          </div>
          <a href="#projects" className="hero-work-link">Explore my work <FiArrowUpRight aria-hidden="true" /></a>
        </div>

        <div className="hero-portrait-wash" aria-hidden="true"></div>
        <div className="hero-visual animate-on-scroll" ref={heroVisualRef}>
          <div className="hero-portrait-frame">
            <Image
              src="/me.png"
              alt="Sinan K"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 55vw"
              className="hero-portrait"
            />
          </div>
          <span className="portrait-index">01 / CREATIVE DEVELOPER</span>
        </div>

        <aside className="hero-side-note animate-on-scroll">
          <p className="hero-side-heading">Digital experiences,<br />built with intention.</p>
          <p className="hero-side-copy">I create thoughtful web experiences with clean code, sharp details, and a focus on how things feel to use.</p>
          <a href="#contact" className="hero-contact-link">Let&apos;s talk <FiArrowUpRight aria-hidden="true" /></a>
        </aside>

        <div className="hero-bottomline">
          <span>BASED IN INDIA</span>
          <span>WEB · FULL STACK · APP</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>
    </main>
  );
};
