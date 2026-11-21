export default function Process() {
  return (
    <section id="process" style={{ background: "#ffffff" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(56px,8vw,96px) 24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
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
            From first call to live site
          </h2>
          <p style={{ margin: "0", color: "#44506A" }}>
            Four steps. You approve each one before we move to the next, so
            nothing surprises you at launch.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "36px 32px" }}>
          <div
            style={{
              flex: "1 1 220px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "800",
                fontSize: "56px",
                lineHeight: "1",
                letterSpacing: "-0.04em",
                color: "#2447F5",
              }}
            >
              1
            </div>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "22px",
                letterSpacing: "-0.015em",
              }}
            >
              Call
            </h3>
            <p style={{ margin: "0", color: "#44506A" }}>
              A short conversation about what you sell, who buys it and what the
              site must do.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 220px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "800",
                fontSize: "56px",
                lineHeight: "1",
                letterSpacing: "-0.04em",
                color: "#2447F5",
              }}
            >
              2
            </div>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "22px",
                letterSpacing: "-0.015em",
              }}
            >
              Plan and design
            </h3>
            <p style={{ margin: "0", color: "#44506A" }}>
              You get a fixed quote, the page structure and a design to approve
              before any building starts.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 220px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "800",
                fontSize: "56px",
                lineHeight: "1",
                letterSpacing: "-0.04em",
                color: "#2447F5",
              }}
            >
              3
            </div>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "22px",
                letterSpacing: "-0.015em",
              }}
            >
              Build
            </h3>
            <p style={{ margin: "0", color: "#44506A" }}>
              We build the site and share a private preview link, so you can
              review it as it comes together.
            </p>
          </div>
          <div
            style={{
              flex: "1 1 220px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "800",
                fontSize: "56px",
                lineHeight: "1",
                letterSpacing: "-0.04em",
                color: "#2447F5",
              }}
            >
              4
            </div>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "22px",
                letterSpacing: "-0.015em",
              }}
            >
              Launch
            </h3>
            <p style={{ margin: "0", color: "#44506A" }}>
              Domain, hosting and security go live, the site is tested on
              phones, and everything is handed over to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
