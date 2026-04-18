"use client"

import { useEffect, useState, useRef } from "react"

interface NavbarProps {
  lang: "en" | "zh"
  setLang: (lang: "en" | "zh") => void
}

const navLinks = {
  en: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ],
  zh: [
    { label: "关于", href: "#about" },
    { label: "教育", href: "#education" },
    { label: "经历", href: "#experience" },
    { label: "项目", href: "#projects" },
    { label: "技能", href: "#skills" },
  ],
}

const languages = [
  { value: "en" as const, label: "English" },
  { value: "zh" as const, label: "简体中文" },
]

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const currentLabel = languages.find(l => l.value === lang)?.label

  return (
    <>
      <style>{`
        .nav-link {
          font-size: 15px;
          color: #6b7280;
          text-decoration: none;
          padding: 4px 0;
          font-weight: 500;
          transition: color 0.15s;
          letter-spacing: 0.01em;
        }
        .nav-link:hover { color: #111827; }
        .lang-trigger {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 15px;
          font-weight: 500;
          color: #374151;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px 6px;
          border-radius: 6px;
          transition: background 0.15s;
        }
        .lang-trigger:hover { background: #f3f4f6; }
        .lang-option {
          width: 100%;
          padding: 9px 14px;
          text-align: left;
          font-size: 15px;
          color: #374151;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.12s;
        }
        .lang-option:hover { background: #f3f4f6; }
        .lang-option.active { color: #111827; font-weight: 500; }
        .nav-hamburger { display: none; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 8px; border: none; background: transparent; cursor: pointer; color: #374151; transition: background 0.15s; }
        .nav-hamburger:hover { background: #f3f4f6; }
        .nav-mobile-link { display: block; font-size: 15px; font-weight: 500; color: #374151; text-decoration: none; padding: 10px 12px; border-radius: 8px; transition: background 0.15s, color 0.15s; }
        .nav-mobile-link:hover { background: #f3f4f6; color: #111827; }
      `}</style>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.92)" : "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
        transition: "all 0.2s",
      }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "0 28px", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          <span style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "0.04em", color: "#111827" }}>MH</span>

          <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            {navLinks[lang].map(link => (
              <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
            ))}

            {/* Language dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button className="lang-trigger" onClick={() => setOpen(o => !o)}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                {currentLabel}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s" }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              {open && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", right: 0,
                  background: "#ffffff", border: "1px solid #e5e7eb",
                  borderRadius: "10px", padding: "4px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  minWidth: "140px", zIndex: 100,
                }}>
                  {languages.map(l => (
                    <button
                      key={l.value}
                      className={`lang-option ${lang === l.value ? "active" : ""}`}
                      onClick={() => { setLang(l.value); setOpen(false) }}
                    >
                      {l.label}
                      {lang === l.value && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            </div>

          {/* Hamburger (mobile only) */}
          <button className="nav-hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
            )}
          </button>

        </div>
      </nav>

      {/* Mobile drawer + backdrop */}
      {mobileOpen && (
        <>
          {/* Backdrop: closes menu on tap */}
          <div
            onClick={() => setMobileOpen(false)}
            style={{ position: "fixed", top: "68px", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.32)", zIndex: 48 }}
          />
          <div className="nav-mobile-drawer">
            {navLinks[lang].map(link => (
              <a key={link.href} href={link.href} className="nav-mobile-link" onClick={() => setMobileOpen(false)}>{link.label}</a>
            ))}
            <div style={{ borderTop: "1px solid #f3f4f6", marginTop: "8px", paddingTop: "8px", display: "flex", gap: "8px" }}>
              {languages.map(l => (
                <button key={l.value} onClick={() => { setLang(l.value); setMobileOpen(false) }}
                  style={{ fontSize: "14px", fontWeight: lang === l.value ? 600 : 400, color: lang === l.value ? "#2563EB" : "#6b7280", background: "transparent", border: "none", cursor: "pointer", padding: "4px 8px", borderRadius: "6px" }}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}