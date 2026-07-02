"use client";
import React, { useState, useEffect, useRef } from 'react';

const TypewriterText = ({ text, bodyRef }: { text: React.ReactNode, bodyRef: React.RefObject<HTMLDivElement | null> }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (typeof text !== 'string') return;
    
    let index = 0;
    setDisplayedText(''); 
    
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));
      index++;
      
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

export const InteractiveTerminal = () => {
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
