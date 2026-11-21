export default function About() {
  return (
    <section id="about" style={{ background: "#F3F5F9" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(56px,8vw,96px) 24px",
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px 72px",
        }}
      >
        <div
          style={{
            flex: "1 1 380px",
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-display)",
              fontWeight: "800",
              fontSize: "clamp(30px,4vw,46px)",
              lineHeight: "1.08",
              letterSpacing: "-0.025em",
              textWrap: "balance",
            }}
          >
            Start to finish, one point of contact
          </h2>
          <p style={{ margin: "0", color: "#44506A", maxWidth: "560px" }}>
            Zorvia is a web studio for service businesses. We have more than two
            years of experience building production websites, apps and AI
            features, including a healthcare platform and a travel booking
            platform.
          </p>
          <p style={{ margin: "0", color: "#44506A", maxWidth: "560px" }}>
            You talk directly to the people building your site, so questions get
            quick answers and nothing gets lost between a sales call and the
            code.
          </p>
        </div>
        <div
          style={{
            flex: "1 1 380px",
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "24px 0",
              borderTop: "2px solid #0E1A30",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "22px",
                letterSpacing: "-0.015em",
              }}
            >
              You own everything
            </h3>
            <p style={{ margin: "0", color: "#44506A" }}>
              Domain, hosting account and source code are yours from day one.
            </p>
          </div>
          <div
            style={{
              padding: "24px 0",
              borderTop: "1px solid #C5CEE2",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "22px",
                letterSpacing: "-0.015em",
              }}
            >
              A fixed quote before we start
            </h3>
            <p style={{ margin: "0", color: "#44506A" }}>
              You know the price and what is included before any work begins.
            </p>
          </div>
          <div
            style={{
              padding: "24px 0",
              borderTop: "1px solid #C5CEE2",
              borderBottom: "1px solid #C5CEE2",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "22px",
                letterSpacing: "-0.015em",
              }}
            >
              Plain-language updates
            </h3>
            <p style={{ margin: "0", color: "#44506A" }}>
              We tell you what is done and what is next, without jargon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
