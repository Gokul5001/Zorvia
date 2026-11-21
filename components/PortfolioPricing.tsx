export default function PortfolioPricing() {
  return (
    <section id="portfolio-pricing" style={{ background: "#E4E9F4" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(56px,8vw,96px) 24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "640px",
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
            Portfolio website pricing
          </h2>
          <p style={{ margin: "0", color: "#44506A" }}>
            For designers, marketers, consultants and other professionals. A
            personal site that shows your work and helps you get hired, priced
            separately from business websites.
          </p>
        </div>
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #C9D3EA",
            borderRadius: "16px",
            padding: "clamp(20px,4vw,32px)",
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            gap: "28px 48px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: "1 1 280px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "26px",
                lineHeight: "1.2",
                letterSpacing: "-0.015em",
              }}
            >
              Portfolio website
            </h3>
            <p style={{ margin: "0", color: "#44506A", fontSize: "15px" }}>
              A personal site for designers, marketers, consultants and other
              professionals who want to show their work and get hired.
            </p>
            <div>
              <div style={{ fontSize: "14px", color: "#44506A" }}>
                Starting from
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "800",
                  fontSize: "40px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                }}
              >
                $49
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#2447F5",
                  marginTop: "2px",
                }}
              >
                or ₹4,299 INR
              </div>
            </div>
          </div>
          <div
            style={{
              flex: "1 1 280px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "15px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="#2447F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto", marginTop: "5px" }}
                >
                  <path d="M4 12.5l5 5 11-11"></path>
                </svg>
                <span>Sections for about, skills, experience and work</span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="#2447F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto", marginTop: "5px" }}
                >
                  <path d="M4 12.5l5 5 11-11"></path>
                </svg>
                <span>Work gallery with links to your projects</span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="#2447F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto", marginTop: "5px" }}
                >
                  <path d="M4 12.5l5 5 11-11"></path>
                </svg>
                <span>Design that works on phones</span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="#2447F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto", marginTop: "5px" }}
                >
                  <path d="M4 12.5l5 5 11-11"></path>
                </svg>
                <span>Contact form and social links</span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="#2447F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto", marginTop: "5px" }}
                >
                  <path d="M4 12.5l5 5 11-11"></path>
                </svg>
                <span>Domain, hosting and HTTPS set up</span>
              </li>
            </ul>
            <div style={{ fontSize: "14px", color: "#44506A" }}>
              Typical time: 1 to 2 weeks
            </div>
          </div>
          <a
            className="btn"
            href="#contact"
            style={{
              flex: "0 0 auto",
              background: "#2447F5",
              color: "#ffffff",
              padding: "13px 26px",
              minHeight: "48px",
              boxSizing: "border-box",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              fontWeight: "600",
            }}
          >
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}
