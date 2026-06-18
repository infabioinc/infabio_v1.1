import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/70 backdrop-blur-2xl border-b border-indigo-500/10 py-1 shadow-[0_10px_30px_var(--glass-shadow)]"
        : "bg-transparent py-2"
        }`}
    >
      {/* Bottom glowing line inside the header container */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-indigo-500/20 via-pink-400/40 to-indigo-500/20" />
      )}

      <div className="container mx-auto px-6 h-[64px] flex items-center justify-between">
        <a href="#" className="flex items-center group relative" aria-label="Infabio home">
          <div className="relative flex items-center shrink-0">
  <div className="absolute -inset-5 bg-gradient-to-r from-cyan-300/25 via-pink-300/25 to-yellow-200/25 blur-2xl rounded-full" />

  <img
  src={theme === 'light' ? '/infabio-logo-light.png' : '/infabio-logo-dark.png'}
  alt="Infabio Logo"
  className="relative z-10 w-[160px] md:w-[200px] h-auto object-contain"
/>
</div>
        </a>

        <nav className="hidden md:flex items-center gap-9 bg-surface/35 border border-indigo-500/5 rounded-full px-7 py-1.5 backdrop-blur-2xl shadow-[0_10px_30px_var(--glass-shadow)]">
          {['About', 'Services', 'Industries'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[11px] font-bold text-slate-300 hover:text-slate-50 transition-colors relative py-1.5 group font-sans tracking-[0.14em] uppercase"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brandBlue to-brandOrange group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_10px_#6366f1]" />
            </a>
          ))}

          <div className="relative py-1.5 group">
            <a
              href="#insights"
              className="text-[11px] font-bold text-slate-300 hover:text-slate-50 transition-colors relative py-1.5 font-sans tracking-[0.14em] uppercase"
            >
              Insights
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brandBlue to-brandOrange group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_10px_#6366f1]" />
            </a>

            <div className="absolute left-1/2 top-full z-50 w-[520px] max-w-[calc(100vw-3rem)] -translate-x-1/2 translate-y-2 pt-4 opacity-0 pointer-events-none transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="relative overflow-hidden rounded-2xl border border-indigo-500/10 bg-surface/85 p-3 shadow-[0_24px_70px_var(--glass-shadow)] backdrop-blur-2xl">
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brandOrange/10 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-brandBlue/10 blur-3xl" />

                <div className="relative grid grid-cols-[1fr_1.35fr] gap-3">
                  <div className="rounded-2xl border border-indigo-500/10 bg-white/[0.03] p-5">
                    <p className="font-sans text-[10px] font-black uppercase tracking-[0.16em] text-brandOrange">
                      Insights
                    </p>
                    <p className="mt-3 font-display text-2xl font-light leading-tight text-textMain">
                      Strategy, proof, and growth signals.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Case Studies', href: '#case-studies', desc: 'Real outcomes' },
                      { label: 'Insights', href: '#insights', desc: 'Ideas and frameworks' },
                      { label: 'Blog', href: '#', desc: 'Coming soon' },
                      { label: 'Reports', href: '#', desc: 'Coming soon' },
                    ].map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="group/item rounded-xl border border-transparent px-4 py-3 font-sans transition-all duration-300 hover:border-indigo-500/10 hover:bg-white/[0.04]"
                      >
                        <span className="block text-[11px] font-black uppercase tracking-[0.12em] text-slate-300 transition-all duration-300 group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-brand-gradient">
                          {dropdownItem.label}
                        </span>
                        <span className="mt-1 block text-xs font-light text-slate-500 transition-colors duration-300 group-hover/item:text-slate-300">
                          {dropdownItem.desc}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-5">
          

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-indigo-500/10 bg-surface/40 hover:bg-surface/80 backdrop-blur-md shadow-md text-textMain hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5 text-indigo-600 transition-transform duration-500 rotate-12 hover:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-amber-400 transition-transform duration-500 hover:rotate-90" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            )}
          </button>

          <MagneticButton>
            <a
  href="#contact"
  className="hidden lg:inline-flex btn-primary whitespace-nowrap text-[9px] xl:text-[10px] 2xl:text-[11px] font-black uppercase tracking-[0.08em] xl:tracking-[0.12em] px-4 xl:px-6 py-2 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
>
  
              Maximize Results & Minimize Marketing Budget
            </a>
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}
