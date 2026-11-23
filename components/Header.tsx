export default function Header() {
  return (
    <header
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "12px 24px",
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
      }}
    >
      <a
        href="#top"
        className="brand-logo"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontFamily: "var(--font-display)",
          fontWeight: "800",
          fontSize: "21px",
          letterSpacing: "-0.02em",
        }}
      >
        <img
          src="/zorwia-logo.png"
          alt="Zorwia IT Services"
          width="82"
          height="55"
          style={{
            width: "82px",
            height: "55px",
            objectFit: "contain",
            display: "block",
          }}
        />
      </a>
      <nav
        aria-label="Main"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "6px 28px",
          fontWeight: "500",
          fontSize: "16px",
        }}
      >
        <a className="nl" href="#services" style={{ color: "#0E1A30" }}>
          Services
        </a>
        <a className="nl" href="#process" style={{ color: "#0E1A30" }}>
          Process
        </a>
        <a className="nl" href="#work" style={{ color: "#0E1A30" }}>
          Work
        </a>
        <a className="nl" href="#pricing" style={{ color: "#0E1A30" }}>
          Pricing
        </a>
        <a className="nl" href="#about" style={{ color: "#0E1A30" }}>
          About
        </a>
        <a
          className="btn navcta"
          href="#contact"
          style={{
            background: "#2447F5",
            color: "#ffffff",
            padding: "11px 20px",
            minHeight: "44px",
            boxSizing: "border-box",
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "10px",
            fontWeight: "600",
          }}
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
