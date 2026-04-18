"use client"

import { profile } from "@/data/profile"
import LogoBox from "@/components/LogoBox"
import { useScrollReveal } from "@/hooks/useScrollReveal"

interface Props { lang: "en" | "zh" }

const labels = {
  en: { heading: "Experience" },
  zh: { heading: "工作经历" },
}

export default function Experience({ lang }: Props) {
  const l = labels[lang]
  const ref = useScrollReveal()

  return (
    <>
      <style>{`
        .exp-card { transition: border-color 0.18s, background 0.18s; cursor: default; }
        .exp-card:hover { border-color: #bfdbfe !important; background: #eff6ff !important; }
        .exp-card:hover .exp-title { color: #1d4ed8; }
        .exp-card:hover .exp-highlight { background: #dbeafe !important; border-color: #60a5fa !important; }
      `}</style>
      <section id="experience" style={{
        borderBottom: "1px solid #dde1f0", backgroundColor: "#E8EBF8",
      }}>
        <div ref={ref} className="reveal section-inner" style={{ width: "100%", maxWidth: "1040px", margin: "0 auto", padding: "72px 28px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: "#111827", marginBottom: "24px" }}>{l.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            {profile.experience.map((exp, i) => (
              <div key={i} className="exp-card card-row" style={{ display: "flex", gap: "16px", alignItems: "flex-start", background: "#ffffff", border: "1px solid #dde1f0", borderRadius: "12px", padding: "20px 22px" }}>
                <LogoBox logo={exp.logo} logoImg={exp.logoImg} logoBg={exp.logoBg} logoColor={exp.logoColor} size={80} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <div>
                      <p className="exp-title" style={{ fontSize: "15px", fontWeight: 500, color: "#111827", transition: "color 0.18s" }}>{exp.org[lang]}</p>
                      <p style={{ fontSize: "13px", color: "#2563EB", marginTop: "2px" }}>{exp.role[lang]}</p>
                    </div>
                    <span className="card-date" style={{ fontSize: "12px", color: "#9ca3af", padding: "3px 10px", borderRadius: "99px", border: "1px solid #f3f4f6", background: "#f9fafb", flexShrink: 0, marginLeft: "12px" }}>{exp.period}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: "6px", marginBottom: "12px" }}>
                    {exp.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#d1d5db", flexShrink: 0, marginTop: "6px" }} />
                        <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.65 }}>{b[lang]}</p>
                      </div>
                    ))}
                  </div>
                  <div className="exp-highlight" style={{ background: "#EFF6FF", borderLeft: "2px solid #93C5FD", padding: "8px 12px", marginBottom: "12px", transition: "background 0.18s, border-color 0.18s" }}>
                    <p style={{ fontSize: "13px", color: "#1D4ED8", fontWeight: 500, lineHeight: 1.5 }}>{exp.highlight[lang]}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{ fontSize: "12px", padding: "3px 10px", borderRadius: "99px", background: "#f9fafb", border: "1px solid #e5e7eb", color: "#6b7280" }}>{tag}</span>
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
