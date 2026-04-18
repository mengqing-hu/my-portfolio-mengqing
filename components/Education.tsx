"use client"

import { profile } from "@/data/profile"
import LogoBox from "@/components/LogoBox"
import { useScrollReveal } from "@/hooks/useScrollReveal"

interface Props { lang: "en" | "zh" }

const labels = {
  en: { heading: "Education" },
  zh: { heading: "教育背景" },
}

export default function Education({ lang }: Props) {
  const l = labels[lang]
  const ref = useScrollReveal()

  return (
    <>
      <style>{`
        .edu-card { transition: border-color 0.18s, background 0.18s; cursor: default; }
        .edu-card:hover { border-color: #bfdbfe !important; background: #eff6ff !important; }
        .edu-card:hover .edu-title { color: #1d4ed8; }
      `}</style>
      <section id="education" style={{
        borderBottom: "1px solid #dde1f0", backgroundColor: "#F0F2FF",
      }}>
        <div ref={ref} className="reveal section-inner" style={{ width: "100%", maxWidth: "1040px", margin: "0 auto", padding: "72px 28px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: "#111827", marginBottom: "24px" }}>{l.heading}</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            {profile.education.map((edu, i) => (
              <div key={i} className="edu-card card-row" style={{ display: "flex", gap: "16px", alignItems: "flex-start", background: "#ffffff", border: "1px solid #dde1f0", borderRadius: "12px", padding: "20px 22px" }}>
                <LogoBox logo={edu.logo} logoImg={edu.logoImg} logoBg={edu.logoBg} logoColor={edu.logoColor} size={80} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <p className="edu-title" style={{ fontSize: "15px", fontWeight: 500, color: "#111827", transition: "color 0.18s" }}>
                        {edu.school[lang]}
                        {edu.schoolSub && <span style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 400, marginLeft: "6px" }}>· {edu.schoolSub}</span>}
                      </p>
                      <p style={{ fontSize: "13px", color: "#2563EB", marginTop: "2px" }}>{edu.degree[lang]}</p>
                    </div>
                    <span className="card-date" style={{ fontSize: "12px", color: "#9ca3af", padding: "3px 10px", borderRadius: "99px", border: "1px solid #f3f4f6", background: "#f9fafb", flexShrink: 0, marginLeft: "12px" }}>{edu.period}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#9ca3af", marginTop: "8px" }}>{edu.detail[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
