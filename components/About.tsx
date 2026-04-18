"use client"

import { profile } from "@/data/profile"
import { useScrollReveal } from "@/hooks/useScrollReveal"

interface Props { lang: "en" | "zh" }

const labels = {
  en: {
    strengths: "Personal Strengths",
    intentions: "Job Intentions",
    role: "Role",
    location: "Location",
    availability: "Availability",
    type: "Type",
    focus: "Focus Areas",
  },
  zh: {
    strengths: "个人优势",
    intentions: "求职意向",
    role: "职位",
    location: "地点",
    availability: "到岗时间",
    type: "类型",
    focus: "方向",
  },
}

const iconMap: Record<string, React.ReactNode> = {
  grid: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="1.5" fill="#185FA5"/>
      <rect x="10" y="2" width="6" height="6" rx="1.5" fill="#378ADD"/>
      <rect x="2" y="10" width="6" height="6" rx="1.5" fill="#378ADD"/>
      <rect x="10" y="10" width="6" height="6" rx="1.5" fill="#B5D4F4"/>
    </svg>
  ),
  globe: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6.5" stroke="#0F6E56" strokeWidth="1.2" fill="none"/>
      <path d="M5.5 9Q7 5.5 9 5.5Q11 5.5 12.5 9Q11 12.5 9 12.5Q7 12.5 5.5 9Z" stroke="#1D9E75" strokeWidth="1" fill="none"/>
      <path d="M2.5 9H15.5" stroke="#0F6E56" strokeWidth="1"/>
    </svg>
  ),
}

const intentionIcons: Record<string, { bg: string; svg: React.ReactNode }> = {
  role: { bg: "#E6F1FB", svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#185FA5" strokeWidth="1.2"/><path d="M5 4V3C5 2.4 5.4 2 6 2h4c.6 0 1 .4 1 1v1" stroke="#185FA5" strokeWidth="1.2"/><path d="M5 8h6" stroke="#378ADD" strokeWidth="1" strokeLinecap="round"/></svg> },
  location: { bg: "#E1F5EE", svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="#0F6E56" strokeWidth="1.2"/><path d="M8 2.5Q10.5 5 10.5 8Q10.5 11 8 13.5" stroke="#1D9E75" strokeWidth="1" fill="none"/><path d="M8 2.5Q5.5 5 5.5 8Q5.5 11 8 13.5" stroke="#1D9E75" strokeWidth="1" fill="none"/><path d="M2.5 8h11" stroke="#0F6E56" strokeWidth="1"/></svg> },
  availability: { bg: "#FAEEDA", svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="#854F0B" strokeWidth="1.2"/><path d="M8 5v3.5l2.5 1.5" stroke="#EF9F27" strokeWidth="1.2" strokeLinecap="round"/></svg> },
  type: { bg: "#EEEDFE", svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13V6l5-3 5 3v7" stroke="#534AB7" strokeWidth="1.2" strokeLinejoin="round"/><rect x="6" y="9" width="4" height="4" rx="0.5" stroke="#7F77DD" strokeWidth="1"/></svg> },
  focus: { bg: "#E6F1FB", svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 11Q4 6 8 8Q12 10 14 5" stroke="#378ADD" strokeWidth="1.2" strokeLinecap="round" fill="none"/><circle cx="8" cy="8" r="1.5" fill="#185FA5"/></svg> },
}

export default function About({ lang }: Props) {
  const t = profile.intentions
  const l = labels[lang]
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()

  return (
    <>
      <style>{`
        .about-card { transition: border-color 0.18s, background 0.18s; cursor: default; }
        .about-card:hover { border-color: #bfdbfe !important; background: #eff6ff !important; }
        .about-card:hover .about-card-title { color: #1d4ed8; }
        .intent-row { transition: border-color 0.18s, background 0.18s; cursor: default; }
        .intent-row:hover { border-color: #bfdbfe !important; background: #eff6ff !important; }
        .intent-row:hover .intent-value { color: #1d4ed8; }
      `}</style>

      {/* ── Strengths ── */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        borderBottom: "1px solid #f3f4f6", backgroundColor: "#ffffff",
      }}>
        <div ref={ref1} className="reveal" style={{ width: "100%", maxWidth: "896px", margin: "0 auto", padding: "80px 28px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: "#111827", marginBottom: "24px" }}>{l.strengths}</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
            {profile.strengths.map((s, i) => (
              <div key={i} className="about-card" style={{ display: "flex", alignItems: "flex-start", gap: "14px", background: "#ffffff", border: "1px solid #f3f4f6", borderRadius: "12px", padding: "16px 18px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {iconMap[s.icon]}
                </div>
                <div>
                  <p className="about-card-title" style={{ fontSize: "15px", fontWeight: 500, color: "#1f2937", marginBottom: "4px", transition: "color 0.18s" }}>{s.title[lang]}</p>
                  <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.65 }}>{s.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intentions ── */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        borderBottom: "1px solid #f3f4f6", backgroundColor: "#f9fafb",
      }}>
        <div ref={ref2} className="reveal" style={{ width: "100%", maxWidth: "896px", margin: "0 auto", padding: "80px 28px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: "#111827", marginBottom: "24px" }}>{l.intentions}</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
            {[
              { key: "role", label: l.role, value: t.role[lang], sub: null },
              { key: "location", label: l.location, value: t.location[lang], sub: t.locationSub[lang] },
              { key: "availability", label: l.availability, value: t.availability[lang], sub: t.availabilitySub[lang] },
              { key: "type", label: l.type, value: t.type[lang], sub: t.typeSub[lang] },
            ].map(row => (
              <div key={row.key} className="intent-row" style={{ display: "flex", alignItems: "center", gap: "16px", background: "#ffffff", border: "1px solid #f3f4f6", borderRadius: "12px", padding: "14px 18px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: intentionIcons[row.key].bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {intentionIcons[row.key].svg}
                </div>
                <span style={{ fontSize: "14px", color: "#6b7280", minWidth: "90px", flexShrink: 0, fontWeight: 500 }}>{row.label}</span>
                <span className="intent-value" style={{ fontSize: "14px", fontWeight: 500, color: "#1f2937", transition: "color 0.18s" }}>{row.value}</span>
                {row.sub && <span style={{ fontSize: "13px", color: "#9ca3af", marginLeft: "4px" }}>{row.sub}</span>}
              </div>
            ))}
            <div className="intent-row" style={{ display: "flex", alignItems: "center", gap: "16px", background: "#ffffff", border: "1px solid #f3f4f6", borderRadius: "12px", padding: "14px 18px" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: intentionIcons.focus.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {intentionIcons.focus.svg}
              </div>
              <span style={{ fontSize: "14px", color: "#6b7280", minWidth: "90px", flexShrink: 0, fontWeight: 500 }}>{l.focus}</span>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
                {t.focusAreas.map(area => (
                  <span key={area} style={{ fontSize: "13px", padding: "3px 10px", borderRadius: "99px", background: "#EFF6FF", border: "1px solid #BFDBFE", color: "#1D4ED8" }}>{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
