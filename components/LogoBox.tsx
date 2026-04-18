interface LogoBoxProps {
  logo: string
  logoImg?: string
  logoBg: string
  logoColor: string
  size?: number
}

export default function LogoBox({ logo, logoImg, logoBg, logoColor, size = 48 }: LogoBoxProps) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: "10px",
      flexShrink: 0,
      overflow: "hidden",
      border: "1px solid rgba(0,0,0,0.06)",
      background: logoImg ? "#ffffff" : logoBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {logoImg ? (
        <img
          src={logoImg}
          alt={logo}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "6px",
          }}
          onError={(e) => {
            const parent = e.currentTarget.parentElement
            if (parent) {
              parent.style.background = logoBg
              e.currentTarget.style.display = "none"
              const span = document.createElement("span")
              span.textContent = logo
              span.style.cssText = `font-size:10px;font-weight:600;color:${logoColor}`
              parent.appendChild(span)
            }
          }}
        />
      ) : (
        <span style={{ fontSize: "10px", fontWeight: 600, color: logoColor }}>
          {logo}
        </span>
      )}
    </div>
  )
}