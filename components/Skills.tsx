"use client"

import React from "react"
import { profile } from "@/data/profile"
import { useScrollReveal } from "@/hooks/useScrollReveal"

interface Props { lang: "en" | "zh" }

const labels = {
  en: { heading: "Skills" },
  zh: { heading: "技能" },
}

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"
const deviconMap: Record<string, string> = {
  pytorch: `${DEVICON}/pytorch/pytorch-original.svg`,
  python: `${DEVICON}/python/python-original.svg`,
  java: `${DEVICON}/java/java-original.svg`,
  fastapi: `${DEVICON}/fastapi/fastapi-original.svg`,
  django: `${DEVICON}/django/django-plain.svg`,
  mysql: `${DEVICON}/mysql/mysql-original.svg`,
  redis: `${DEVICON}/redis/redis-original.svg`,
  docker: `${DEVICON}/docker/docker-original.svg`,
  git: `${DEVICON}/git/git-original.svg`,
  linux: `${DEVICON}/linux/linux-original.svg`,
  azure: `${DEVICON}/azure/azure-original.svg`,
}

const namedIconMap: Record<string, React.ReactElement> = {
  LangChain: (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#1C3C3C", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4FC08D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    </div>
  ),
  LangGraph: (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round">
        <circle cx="5" cy="5" r="2" fill="#818cf8"/>
        <circle cx="19" cy="5" r="2" fill="#818cf8"/>
        <circle cx="12" cy="19" r="2" fill="#818cf8"/>
        <line x1="7" y1="5" x2="17" y2="5"/>
        <line x1="6" y1="7" x2="11" y2="17"/>
        <line x1="18" y1="7" x2="13" y2="17"/>
      </svg>
    </div>
  ),
  RAG: (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#1e3a5f", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
      </svg>
    </div>
  ),
  Whisper: (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="11" height="12" viewBox="0 0 24 24" fill="none" stroke="#e9d5ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="22"/>
      </svg>
    </div>
  ),
  Pyannote: (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#0f4c81", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="12" height="10" viewBox="0 0 24 20" fill="none" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,10 5,4 8,14 11,6 14,12 17,2 20,10 22,10"/>
      </svg>
    </div>
  ),
  TTS: (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#065f46", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
    </div>
  ),
  OCR: (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#78350f", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="11" height="12" viewBox="0 0 24 24" fill="none" stroke="#fde68a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M7 8h10M7 12h10M7 16h6"/>
      </svg>
    </div>
  ),
  SpringBoot: (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#166534", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="#86efac">
        <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.492 1.424a5.38 5.38 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.748-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.053 12.21zm1.76-14.342C20.93.971 18.452-.008 15.833 0 8.579.016 2.487 5.973 2.487 13.226c0 4.208 2.11 7.92 5.323 10.16L8.2 23.2c-2.498-1.988-4.088-5.01-4.088-8.396 0-5.984 4.832-10.843 10.808-10.843 2.982 0 5.694 1.21 7.669 3.181l-.624-5.092z"/>
      </svg>
    </div>
  ),
  Elasticsearch: (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#f7cd46", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="#343741">
        <path d="M13.394 0C9.737 0 6.435 1.525 4.068 3.974h13.069a4.449 4.449 0 0 1 0 8.897H2.09A13.37 13.37 0 0 0 1.5 12c0 .69.055 1.367.16 2.026h15.477a4.449 4.449 0 1 1 0 8.897H4.065A13.31 13.31 0 0 0 13.394 24C20.848 24 27 18.627 27 12S20.848 0 13.394 0z"/>
      </svg>
    </div>
  ),
  Chroma: (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="3" x2="12" y2="8"/>
        <line x1="12" y1="16" x2="12" y2="21"/>
        <line x1="3" y1="12" x2="8" y2="12"/>
        <line x1="16" y1="12" x2="21" y2="12"/>
      </svg>
    </div>
  ),
  "CI/CD": (
    <div style={{ width: 18, height: 18, borderRadius: 3, background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8"/>
        <line x1="4" y1="20" x2="21" y2="3"/>
        <polyline points="21 16 21 21 16 21"/>
        <line x1="15" y1="15" x2="21" y2="21"/>
        <line x1="4" y1="4" x2="9" y2="9"/>
      </svg>
    </div>
  ),
}

function SkillIcon({ item }: { item: (typeof profile.skills)[0]["items"][0] }) {
  if (item.name in namedIconMap) {
    return namedIconMap[item.name]
  }
  if ("devicon" in item && item.devicon) {
    const src = deviconMap[item.devicon as string]
    if (src) return <img src={src} alt={item.name} width={18} height={18} style={{ objectFit: "contain" }} />
  }
  if ("hf" in item && item.hf) {
    return <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="HuggingFace" width={18} height={18} style={{ objectFit: "contain" }} />
  }
  if ("openai" in item && item.openai) {
    return (
      <div style={{ width: 18, height: 18, borderRadius: 3, background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={`${DEVICON}/openai/openai-original.svg`} alt="OpenAI" width={14} height={14} style={{ filter: "invert(1)" }} />
      </div>
    )
  }
  if ("iconBg" in item && item.iconBg) {
    return (
      <div style={{ width: 18, height: 18, borderRadius: 3, background: item.iconBg as string, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "6px", fontWeight: 700 }}>
        {item.iconText as string}
      </div>
    )
  }
  return <div style={{ width: 18, height: 18, borderRadius: 3, background: "#e5e7eb" }} />
}

export default function Skills({ lang }: Props) {
  const l = labels[lang]
  const ref = useScrollReveal()

  return (
    <>
      <style>{`
        .skill-chip { transition: border-color 0.18s, background 0.18s; cursor: default; }
        .skill-chip:hover { border-color: #bfdbfe !important; background: #eff6ff !important; }
        .skill-chip:hover .skill-name { color: #1d4ed8; }
      `}</style>
      <section id="skills" style={{
        borderBottom: "1px solid #dde1f0", backgroundColor: "#E8EBF8",
      }}>
        <div ref={ref} className="reveal section-inner" style={{ width: "100%", maxWidth: "1040px", margin: "0 auto", padding: "72px 28px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 500, color: "#111827", marginBottom: "24px" }}>{l.heading}</h2>

          <div style={{ background: "#ffffff", border: "1px solid #f3f4f6", borderRadius: "12px", padding: "4px 20px", marginBottom: "16px" }}>
            {profile.skills.map((group, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "16px 0", borderBottom: i < profile.skills.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                <span className="skill-category" style={{ fontSize: "12px", color: "#6b7280", textTransform: "uppercase" as const, letterSpacing: "0.06em", minWidth: "80px", paddingTop: "4px", flexShrink: 0, fontWeight: 500 }}>
                  {group.category[lang]}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
                  {group.items.map((item, j) => (
                    <div key={j} className="skill-chip" style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "7px 13px", borderRadius: "10px", border: "1px solid #dde1f0", background: "#ffffff" }}>
                      <SkillIcon item={item} />
                      <span className="skill-name" style={{ fontSize: "13px", color: "#374151", transition: "color 0.18s" }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
            {profile.languages.map((lang_item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", background: "#ffffff", border: "1px solid #dde1f0", borderRadius: "12px", padding: "12px 16px", maxWidth: "360px" }}>
                <span style={{ fontSize: "16px" }}>{lang_item.flag}</span>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#111827", flex: 1 }}>{lang_item.name[lang]}</span>
                <span style={{ fontSize: "13px", color: "#9ca3af", marginRight: "8px" }}>{lang_item.level[lang]}</span>
                <div style={{ display: "flex", gap: "3px" }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} style={{ width: "7px", height: "7px", borderRadius: "50%", background: j < lang_item.dots ? "#60a5fa" : "#e5e7eb" }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
