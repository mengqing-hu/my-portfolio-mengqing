"use client"

import { profile } from "@/data/profile"

export default function Footer() {
  const links = [
    {
      label: "GitHub", href: profile.contact.github,
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
    },
    {
      label: "Instagram", href: profile.contact.instagram,
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
    },
    {
      label: "LinkedIn", href: profile.contact.linkedin,
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    },
  ]

  return (
    <>
      <style>{`
        .footer-icon {
          width: 32px; height: 32px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          color: #9ca3af; text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .footer-icon:hover { background: #f3f4f6; color: #374151; }
      `}</style>
      <footer style={{ borderTop: "1px solid #dde1f0", background: "#E8EBF8" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "13px", color: "#9ca3af" }}>© 2026 Mengqing Hu. All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {links.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" title={link.label} className="footer-icon">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}