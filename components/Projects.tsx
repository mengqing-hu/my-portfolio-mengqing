"use client"

import { profile } from "@/data/profile"
import LogoBox from "@/components/LogoBox"
import { useScrollReveal } from "@/hooks/useScrollReveal"

interface Props { lang: "en" | "zh" }

const labels = {
  en: { heading: "Projects" },
  zh: { heading: "项目经历" },
}

export default function Projects({ lang }: Props) {
  const l = labels[lang]
  const ref = useScrollReveal()

  return (
    <>
      <style>{`
        .proj-card { transition: border-color 0.18s, background 0.18s; cursor: default; }
        .proj-card:hover { border-color: #bfdbfe !important; background: #eff6ff !important; }
        .proj-card:hover .proj-title { color: #1d4ed8; }
        .proj-card:hover .proj-highlight { background: #dbeafe !important; border-color: #60a5fa !important; }
      `}</style>
      <section id="projects" style={{
        borderBottom: "1px solid #dde1f0", backgroundColor: "#F0F2FF",
      }}>
        <div ref={ref} className="reveal section-inner" style={{ width: "100%", maxWidth: "1040px", margin: "0 auto", padding: "72px 28px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: "#111827", marginBottom: "24px" }}>{l.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            {profile.projects.map((proj, i) => (
              <div key={i} className="proj-card card-row" style={{ display: "flex", gap: "16px", alignItems: "flex-start", background: "#ffffff", border: "1px solid #dde1f0", borderRadius: "12px", padding: "20px 22px" }}>
                <LogoBox logo={proj.logo} logoImg={proj.logoImg} logoBg={proj.logoBg} logoColor={proj.logoColor} size={80} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div>
                      {proj.badge && (
                        <span style={{ display: "inline-block", fontSize: "11px", padding: "2px 8px", borderRadius: "99px", background: "#1E3A5F", color: "#BFDBFE", marginBottom: "6px", letterSpacing: "0.04em" }}>{proj.badge[lang]}</span>
                      )}
                      <p className="proj-title" style={{ fontSize: "15px", fontWeight: 500, color: "#111827", transition: "color 0.18s" }}>{proj.title[lang]}</p>
                      <p style={{ fontSize: "13px", color: "#2563EB", marginTop: "2px" }}>{proj.org[lang]}</p>
                    </div>
                    <span className="card-date" style={{ fontSize: "12px", color: "#9ca3af", padding: "3px 10px", borderRadius: "99px", border: "1px solid #f3f4f6", background: "#f9fafb", flexShrink: 0, marginLeft: "12px" }}>{proj.period}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: "6px", marginBottom: "12px" }}>
                    {proj.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#d1d5db", flexShrink: 0, marginTop: "6px" }} />
                        <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.65 }}>{b[lang]}</p>
                      </div>
                    ))}
                  </div>
                  <div className="proj-highlight" style={{ background: "#EFF6FF", borderLeft: "2px solid #93C5FD", padding: "8px 12px", marginBottom: "12px", transition: "background 0.18s, border-color 0.18s" }}>
                    <p style={{ fontSize: "13px", color: "#1D4ED8", fontWeight: 500, lineHeight: 1.5 }}>{proj.highlight[lang]}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
                    {proj.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: "12px", padding: "3px 10px", borderRadius: "99px",
                        background: proj.tagBlue ? "#EFF6FF" : "#f9fafb",
                        border: `1px solid ${proj.tagBlue ? "#BFDBFE" : "#e5e7eb"}`,
                        color: proj.tagBlue ? "#1D4ED8" : "#6b7280"
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
