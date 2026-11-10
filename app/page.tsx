"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  FaReact, FaNodeJs,
  FaInstagram, FaWhatsapp,
  FaBars, FaTimes, FaFileDownload
} from "react-icons/fa";
import {
  SiMongodb,
  SiFlutter,
} from "react-icons/si";

// -------------------------------------------------------------
// COMPONENTS
// -------------------------------------------------------------

const rotatingDescriptions = [
  "Welcome to a digital journey that transcends limits. Discover the artistry of scalable software captured in code.",
  "Building robust Full Stack architectures that power modern web applications with seamless performance and scale.",
  "Crafting beautiful, native-feeling mobile experiences with Flutter, delivering smooth animations on every screen."
];

function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingDescriptions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[84px] w-full max-w-[320px]">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-base text-right text-slate-600 font-medium leading-relaxed absolute top-0 right-0 w-full"
        >
          {rotatingDescriptions[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function SocialIsland() {
  const [hovered, setHovered] = useState<'wa' | 'ig' | null>(null);

  return (
    <div
      className="absolute flex flex-col items-center justify-center"
      onMouseLeave={() => setHovered(null)}
      style={{
        left: '15.1%',
        top: '76%',
        transform: 'translate(-50%, -50%)',
        width: '60px',
        height: '132px',
        zIndex: 20,
      }}
    >
      <div className="relative w-full h-full">

        {/* WhatsApp Background Pill */}
        <motion.a
          href="https://wa.me/919846170136" target="_blank" rel="noopener noreferrer"
          onMouseEnter={() => setHovered('wa')}
          animate={{
            height: hovered === 'wa' ? '132px' : hovered === 'ig' ? '0px' : '60px',
            opacity: hovered === 'ig' ? 0 : 1,
          }}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.2 }}
          className="absolute top-0 left-0 w-full bg-[#25D366] cursor-pointer overflow-hidden rounded-[30px] shadow-[0_8px_32px_rgba(37,211,102,0.5)]"
        >
          <div className="absolute top-0 left-0 w-full h-[60px] flex items-center justify-center pointer-events-none">
            <FaWhatsapp size={26} className="text-white" />
          </div>
          <AnimatePresence>
            {hovered === 'wa' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-[60px] left-0 w-full h-[72px] flex flex-col items-center justify-center pointer-events-none"
              >
                <span className="text-white text-xs font-bold tracking-[0.2em]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>OPEN</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.a>

        {/* Instagram Background Pill */}
        <motion.a
          href="https://instagram.com/sinan.avl" target="_blank" rel="noopener noreferrer"
          onMouseEnter={() => setHovered('ig')}
          animate={{
            height: hovered === 'ig' ? '132px' : hovered === 'wa' ? '0px' : '60px',
            opacity: hovered === 'wa' ? 0 : 1,
          }}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.2 }}
          className="absolute bottom-0 left-0 w-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] cursor-pointer overflow-hidden rounded-[30px] shadow-[0_8px_32px_rgba(220,39,67,0.5)]"
        >
          <AnimatePresence>
            {hovered === 'ig' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-[60px] left-0 w-full h-[72px] flex flex-col items-center justify-center pointer-events-none"
              >
                <span className="text-white text-xs font-bold tracking-[0.2em]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>OPEN</span>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 w-full h-[60px] flex items-center justify-center pointer-events-none">
            <FaInstagram size={24} className="text-white" />
          </div>
        </motion.a>

      </div>
    </div>
  );
}

function ResumeIsland() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute"
      onMouseLeave={() => setHovered(false)}
      style={{
        left: '95.5%',
        top: '15.8%',
        zIndex: 20,
      }}
    >
      <motion.a
        href="/Sinan_K_Resume.pdf"
        download="Sinan_K_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        animate={{
          width: hovered ? '150px' : '60px',
          backgroundColor: hovered ? '#2563EB' : '#0B0F14',
        }}
        transition={{ duration: 0.3, type: 'spring', bounce: 0.2 }}
        className="absolute flex items-center overflow-hidden rounded-[30px] shadow-[0_8px_36px_rgba(0,0,0,0.7)] cursor-pointer"
        style={{
          height: '60px',
          top: '-30px',
          left: '-30px',
        }}
      >
        <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center pointer-events-none">
          <FaFileDownload size={24} className="text-white" />
        </div>
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="text-white text-sm font-bold tracking-widest whitespace-nowrap pr-4 pointer-events-none"
            >
              RESUME
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
}

// -------------------------------------------------------------
// MAIN PAGE
// -------------------------------------------------------------

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroImageY = useTransform(scrollY, [0, 600], [0, -100]);
  const heroImageScale = useTransform(scrollY, [0, 600], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-mesh min-h-screen relative selection:bg-blue-200">

      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'px-0 py-0' : 'px-6 py-4'}`}
      >
        <div className={`mx-auto flex items-center justify-between transition-all duration-300 backdrop-blur-xl ${
          isScrolled
            ? 'w-full max-w-full px-8 py-4 bg-white/90 border-b border-white/50 shadow-sm'
            : 'max-w-6xl px-6 py-3 rounded-full bg-white/60 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
        }`}>
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0 flex items-center justify-center bg-[#0B0F14]">
            <img
              src="/me.png"
              alt="Sinan K."
              className="min-w-[220%] min-h-[220%] object-cover"
              style={{ objectPosition: 'center 0%', transform: 'translate(4px, 16px)' }}
            />
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:msinankavala786@gmail.com" className="group relative hidden md:inline-flex px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full transition-all shadow-lg shadow-blue-500/30 overflow-hidden">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-700">Hire Me</span>
              <div className="absolute inset-0 bg-white rounded-full origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </a>
            <button
              className="md:hidden text-slate-800 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            <a
              href="mailto:msinankavala786@gmail.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="sticky top-0 z-0 px-8 md:px-16 overflow-visible max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 h-screen justify-center">

        {/* Left Side */}
        <motion.div
          style={{ y: heroTextY }}
          className="flex-1 z-10 flex flex-col justify-center pt-24 md:pt-0"
        >
          <div className="w-fit">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-black text-[#0B0F14] tracking-wide lowercase mb-6 leading-[0.88]"
              style={{ fontSize: 'clamp(52px, 8vw, 110px)', fontFamily: "'Outfit', sans-serif" }}
            >
              software<br />architect
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-end w-full mb-8"
            >
              <RotatingText />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            {[
              { icon: <FaReact size={20} />, color: "hover:border-[#61DAFB] hover:text-[#61DAFB]" },
              { icon: <SiFlutter size={20} />, color: "hover:border-[#54C5F8] hover:text-[#54C5F8]" },
              { icon: <FaNodeJs size={20} />, color: "hover:border-[#339933] hover:text-[#339933]" },
              { icon: <SiMongodb size={20} />, color: "hover:border-[#47A248] hover:text-[#47A248]" }
            ].map((tech, i) => (
              <div key={i} className={`w-11 h-11 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-700 transition-all cursor-default ${tech.color}`}>
                {tech.icon}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-px w-full bg-slate-200 mb-8 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-12"
          >
            <div>
              <p className="font-black text-[#0B0F14] tracking-tighter italic mb-1" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>99.9%</p>
              <p className="text-xs text-slate-500 leading-tight max-w-[140px]">Production uptime achieved for mission-critical systems</p>
            </div>
            <div>
              <p className="font-black text-[#0B0F14] tracking-tighter italic mb-1" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>+15k</p>
              <p className="text-xs text-slate-500 leading-tight max-w-[140px]">Hours of engineering, flawless user experiences</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0"
          style={{
            width: 'clamp(480px, 52vw, 620px)',
            height: 'clamp(480px, 52vw, 620px)',
            overflow: 'visible',
            y: heroImageY,
            scale: heroImageScale
          }}
        >
          <div className="absolute inset-4 bg-[#2563EB]/40 rounded-full blur-3xl pointer-events-none" />

          <svg
            viewBox="0 0 2048 2048"
            className="absolute inset-0 w-full h-full"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <clipPath id="frameClip">
                <path d="M 465.664 1737.85 C 461.152 1726.55 456.57 1715.26 453.472 1703.4 C 442.427 1661.14 445.802 1614 445.67 1570.47 C 446.147 1550.7 445.009 1530.82 445.222 1511.08 C 445.799 1457.39 452.629 1410.08 418.048 1364.54 C 397.424 1337.06 366.088 1319.64 331.858 1316.62 C 309.959 1314.77 289.819 1316.23 268.3 1309.34 C 213.283 1292.17 178.463 1237.91 174.763 1181.79 C 171.92 1138.67 173.971 1093.6 173.689 1050 L 173.358 729.5 L 173.325 501.302 L 173.195 435.446 C 173.102 411.229 172.17 393.495 176.069 369.232 C 182.442 329.615 199.416 292.462 225.193 261.71 C 265.075 214.102 322.633 184.798 384.593 180.553 C 407.843 178.732 446.296 179.905 470.717 179.921 L 625.641 179.85 L 1125 179.888 L 1517 179.807 L 1631.31 179.802 C 1651.83 179.8 1681.3 178.943 1701.13 181.075 C 1729.96 183.932 1757.17 195.745 1778.95 214.856 C 1819.59 250.137 1826.06 291.342 1826.57 341.738 C 1826.9 374.502 1846.13 406.925 1875.58 421.216 C 1893.23 429.783 1912.61 437.596 1927.51 451.052 C 1953.9 475.35 1958.63 495.364 1960.7 529.288 C 1959.76 536.32 1960.2 551.64 1960.16 559.53 L 1960.11 620.076 L 1960.4 814.049 L 1960.41 1433.38 L 1960.34 1561.17 C 1960.31 1601.48 1962.86 1644.09 1953.14 1683 C 1940.08 1735.27 1908.5 1779.34 1865.92 1811.82 C 1856.46 1819.03 1828.42 1837.79 1817.2 1840.54 C 1797 1852.5 1751.71 1862.85 1727.77 1864.31 C 1705.97 1865.64 1681.17 1865.28 1659.07 1865.27 L 1552.32 1865.25 L 1220.51 1865.29 L 848.803 1865.25 L 741.569 1865.27 C 693.138 1865.33 637.029 1868.84 591.808 1849.68 C 587.648 1848.75 576.933 1844.01 572.766 1842.1 C 536.49 1825.36 505.301 1799.3 482.377 1766.58 C 477.278 1759.45 469.873 1742.31 465.664 1737.85 Z" />
              </clipPath>
            </defs>

            <path
              d="M 465.664 1737.85 C 461.152 1726.55 456.57 1715.26 453.472 1703.4 C 442.427 1661.14 445.802 1614 445.67 1570.47 C 446.147 1550.7 445.009 1530.82 445.222 1511.08 C 445.799 1457.39 452.629 1410.08 418.048 1364.54 C 397.424 1337.06 366.088 1319.64 331.858 1316.62 C 309.959 1314.77 289.819 1316.23 268.3 1309.34 C 213.283 1292.17 178.463 1237.91 174.763 1181.79 C 171.92 1138.67 173.971 1093.6 173.689 1050 L 173.358 729.5 L 173.325 501.302 L 173.195 435.446 C 173.102 411.229 172.17 393.495 176.069 369.232 C 182.442 329.615 199.416 292.462 225.193 261.71 C 265.075 214.102 322.633 184.798 384.593 180.553 C 407.843 178.732 446.296 179.905 470.717 179.921 L 625.641 179.85 L 1125 179.888 L 1517 179.807 L 1631.31 179.802 C 1651.83 179.8 1681.3 178.943 1701.13 181.075 C 1729.96 183.932 1757.17 195.745 1778.95 214.856 C 1819.59 250.137 1826.06 291.342 1826.57 341.738 C 1826.9 374.502 1846.13 406.925 1875.58 421.216 C 1893.23 429.783 1912.61 437.596 1927.51 451.052 C 1953.9 475.35 1958.63 495.364 1960.7 529.288 C 1959.76 536.32 1960.2 551.64 1960.16 559.53 L 1960.11 620.076 L 1960.4 814.049 L 1960.41 1433.38 L 1960.34 1561.17 C 1960.31 1601.48 1962.86 1644.09 1953.14 1683 C 1940.08 1735.27 1908.5 1779.34 1865.92 1811.82 C 1856.46 1819.03 1828.42 1837.79 1817.2 1840.54 C 1797 1852.5 1751.71 1862.85 1727.77 1864.31 C 1705.97 1865.64 1681.17 1865.28 1659.07 1865.27 L 1552.32 1865.25 L 1220.51 1865.29 L 848.803 1865.25 L 741.569 1865.27 C 693.138 1865.33 637.029 1868.84 591.808 1849.68 C 587.648 1848.75 576.933 1844.01 572.766 1842.1 C 536.49 1825.36 505.301 1799.3 482.377 1766.58 C 477.278 1759.45 469.873 1742.31 465.664 1737.85 Z"
              fill="#2563EB"
            />

            <image
              href="/me.png"
              x="250"
              y="150"
              width="2300"
              height="2100"
              clipPath="url(#frameClip)"
              preserveAspectRatio="xMidYMax meet"
            />
          </svg>

          <div
            className="absolute text-white italic font-light select-none pointer-events-none"
            style={{
              top: '17%', left: '18%',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
              lineHeight: 1,
              zIndex: 10,
              letterSpacing: '-0.02em'
            }}
          >
            Sinan K.
          </div>

          <ResumeIsland />
          <SocialIsland />

        </motion.div>
      </main>

    </div>
  );
}
