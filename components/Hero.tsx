"use client"

import Image from "next/image"
import { profile } from "@/data/profile"

interface Props { lang: "en" | "zh" }

const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const IconGitHub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const IconEmail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m2 7 10 7 10-7"/>
  </svg>
)

const IconDownload = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M7.5 2v9M4.5 8l3 3 3-3M1.5 12.5h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Divider = () => (
  <div style={{ borderTop: "1px solid #dde1f0", margin: "22px 0" }} />
)

const Label = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
    textTransform: "uppercase" as const, color: "#9ca3af",
    display: "block", marginBottom: "10px",
  }}>
    {children}
  </span>
)

export default function Hero({ lang }: Props) {
  const email = lang === "zh" ? profile.contact.emailCN : profile.contact.email

  return (
    <>
      <style>{`
        .hero-social-btn {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: #6b7280; background: rgba(255,255,255,0.7);
          border: 1.5px solid #d1d5db;
          text-decoration: none;
          transition: color 0.18s, border-color 0.18s, background 0.18s, transform 0.12s;
        }
        .hero-social-btn:hover { transform: translateY(-2px); }
        .hero-social-linkedin:hover { color: #0077B5; border-color: #0077B5; background: #e8f4fd; }
        .hero-social-github:hover  { color: #111827; border-color: #374151; background: #f3f4f6; }
        .hero-social-email:hover   { color: #2563EB; border-color: #93c5fd; background: #EFF6FF; }
        .hero-cv-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 14px; font-weight: 500; padding: 10px 22px;
          border-radius: 10px; border: 1.5px solid #374151;
          color: #111827; background: transparent; text-decoration: none;
          transition: background 0.18s, border-color 0.18s, color 0.18s, transform 0.12s;
        }
        .hero-cv-btn:hover { background: #111827; color: #ffffff; transform: translateY(-1px); }
        .intent-chip {
          display: inline-flex; align-items: center;
          font-size: 12px; font-weight: 500;
          padding: 3px 10px; border-radius: 99px;
          background: rgba(255,255,255,0.6); border: 1px solid #c7d2fe;
          color: #4338ca;
        }
      `}</style>

      <section id="about" style={{
        backgroundColor: "#F0F2FF",
        borderBottom: "1px solid #e5e7eb",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}>
        <div className="hero-layout" style={{
          maxWidth: "1040px", margin: "0 auto", width: "100%",
          padding: "80px 28px 72px",
          display: "flex", alignItems: "flex-start", gap: "56px",
        }}>

          {/* ── Left: all text ── */}
          <div className="hero-text" style={{ flex: 1, minWidth: 0 }}>

            {/* Greeting + Name */}
            <p className="hero-fade-up delay-0" style={{ fontSize: "20px", fontWeight: 700, color: "#374151", marginBottom: "4px" }}>
              {lang === "en" ? "Hi, I'm" : "你好，我是"}
            </p>
            <h1 className="hero-fade-up delay-1 hero-title" style={{
              fontSize: "50px", fontWeight: 800, lineHeight: 1.08,
              letterSpacing: "-0.02em", color: "#111827", margin: "0 0 14px",
            }}>
              {lang === "en" ? "Mengqing Hu" : "胡梦晴"}
            </h1>
            <p className="hero-fade-up delay-2" style={{
              fontSize: "17px", fontWeight: 600, color: "#4F6EF7",
              marginBottom: "20px", letterSpacing: "0.01em",
            }}>
              {lang === "en" ? "Target Role: AI Application Developer · AI Agent Engineer" : "求职方向：AI 应用开发 · AI Agent 工程师"}
            </p>

            {/* Description */}
            <div className="hero-fade-up delay-3" style={{ display: "flex", flexDirection: "column" as const, gap: "14px", marginBottom: "0" }}>
              <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.8, margin: 0 }}>
                {lang === "en"
                  ? "I focus on building end-to-end AI systems spanning computer vision, RAG, and AI Agents — with full-stack capability from model training to production deployment. Currently diving deep into AI Agent development, rapidly turning ideas into working prototypes through Vibe Coding."
                  : "我专注构建端到端 AI 系统，覆盖计算机视觉、RAG 与 AI Agent，具备从模型训练到生产部署的全流程能力。目前正深入探索 AI Agent 开发，并以 Vibe Coding 快速将创意落地为可运行原型。"}
              </p>
              <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.8, margin: 0 }}>
                {lang === "en"
                  ? "Currently pursuing my M.Sc. at TU Dresden, with hands-on research and engineering experience at Fraunhofer IWU and Helmholtz-Zentrum Dresden-Rossendorf."
                  : "现于德国德累斯顿工业大学攻读硕士，拥有弗劳恩霍夫研究所、亥姆霍兹研究中心等机构的科研与工程实践经验。"}
              </p>
              <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.8, margin: 0 }}>
                {lang === "en"
                  ? "Beyond research, I continuously explore AI-assisted development using tools like Claude Code and GitHub Copilot — building scripts, pipelines, and AI assistants from scratch. Vibe Coding lets me skip boilerplate and focus on logic design and prompt engineering, dramatically accelerating from idea to product. I believe the next generation of AI engineers won't just write code; they'll collaborate with AI to amplify creativity and engineering efficiency."
                  : "除科研项目外，我持续探索 AI 辅助开发，习惯使用 Claude Code、GitHub Copilot 等工具，从 0 到 1 快速搭建脚本、自动化流程与 AI 助手。Vibe Coding 让我跳出重复模板代码，专注逻辑设计与 Prompt 优化，大幅提升从想法到产品的迭代速度。我相信，未来的 AI 工程师不仅会写代码，更擅长与 AI 协作，用工具放大创造力与工程效率。"}
              </p>
            </div>

            {/* ── Actions ── */}
            <div className="hero-fade-up delay-4">
              <Divider />
              <div className="hero-actions" style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" as const }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer"
                    className="hero-social-btn hero-social-linkedin" title="LinkedIn">
                    <IconLinkedIn />
                  </a>
                  <a href={profile.contact.github} target="_blank" rel="noopener noreferrer"
                    className="hero-social-btn hero-social-github" title="GitHub">
                    <IconGitHub />
                  </a>
                  <a href={`mailto:${email}`}
                    className="hero-social-btn hero-social-email" title="Email">
                    <IconEmail />
                  </a>
                </div>
                <a href={profile.contact.cv} download className="hero-cv-btn">
                  <IconDownload />
                  {lang === "en" ? "Download CV" : "下载简历"}
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: portrait photo, natural ratio, vertically centered ── */}
          <div className="hero-fade-right delay-2 hero-photo" style={{
            flexShrink: 0,
            alignSelf: "center",
          }}>
            <div className="hero-photo-wrap" style={{
              width: "240px",
              borderRadius: "20px",
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.85)",
              boxShadow: "0 4px 32px rgba(99,102,241,0.18), 0 0 0 6px rgba(99,102,241,0.08)",
            }}>
              <Image
                src="/photo.jpg"
                alt="Mengqing Hu"
                width={240}
                height={320}
                style={{ objectFit: "cover", objectPosition: "center top", display: "block", width: "100%", height: "auto" }}
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
