export default function Services() {
  return (
    <section
      id="services"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(64px,9vw,104px) 24px clamp(56px,8vw,96px)",
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        gap: "48px 72px",
      }}
    >
      <div
        style={{
          flex: "1 1 320px",
          minWidth: "0",
          maxWidth: "400px",
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
          What we build for you
        </h2>
        <p style={{ margin: "0", color: "#44506A" }}>
          From a simple business site to a full booking platform. Everything is
          built to load fast on a phone and to be easy for you to update.
        </p>
      </div>
      <div
        style={{
          flex: "2 1 460px",
          minWidth: "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 32px",
            padding: "26px 0",
            borderTop: "2px solid #0E1A30",
          }}
        >
          <h3
            style={{
              margin: "0",
              flex: "0 1 250px",
              minWidth: "0",
              fontFamily: "var(--font-display)",
              fontWeight: "600",
              fontSize: "23px",
              lineHeight: "1.2",
              letterSpacing: "-0.015em",
            }}
          >
            Business websites
          </h3>
          <p
            style={{
              margin: "0",
              flex: "1 1 280px",
              minWidth: "0",
              color: "#44506A",
            }}
          >
            Pages that explain what you do, show your work and make it easy to
            enquire. Set up so Google can read them.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 32px",
            padding: "26px 0",
            borderTop: "1px solid #C5CEE2",
          }}
        >
          <h3
            style={{
              margin: "0",
              flex: "0 1 250px",
              minWidth: "0",
              fontFamily: "var(--font-display)",
              fontWeight: "600",
              fontSize: "23px",
              lineHeight: "1.2",
              letterSpacing: "-0.015em",
            }}
          >
            Booking and ordering
          </h3>
          <p
            style={{
              margin: "0",
              flex: "1 1 280px",
              minWidth: "0",
              color: "#44506A",
            }}
          >
            Let customers book, order or pay on your site. We have built and
            launched a travel booking platform on this model.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 32px",
            padding: "26px 0",
            borderTop: "1px solid #C5CEE2",
          }}
        >
          <h3
            style={{
              margin: "0",
              flex: "0 1 250px",
              minWidth: "0",
              fontFamily: "var(--font-display)",
              fontWeight: "600",
              fontSize: "23px",
              lineHeight: "1.2",
              letterSpacing: "-0.015em",
            }}
          >
            Web apps and dashboards
          </h3>
          <p
            style={{
              margin: "0",
              flex: "1 1 280px",
              minWidth: "0",
              color: "#44506A",
            }}
          >
            Client logins, admin panels and internal tools backed by a real
            database, with payments and notifications where you need them.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 32px",
            padding: "26px 0",
            borderTop: "1px solid #C5CEE2",
          }}
        >
          <h3
            style={{
              margin: "0",
              flex: "0 1 250px",
              minWidth: "0",
              fontFamily: "var(--font-display)",
              fontWeight: "600",
              fontSize: "23px",
              lineHeight: "1.2",
              letterSpacing: "-0.015em",
            }}
          >
            AI chat assistants
          </h3>
          <p
            style={{
              margin: "0",
              flex: "1 1 280px",
              minWidth: "0",
              color: "#44506A",
            }}
          >
            A chatbot on your site that answers common questions at any hour and
            passes real enquiries on to you.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 32px",
            padding: "26px 0",
            borderTop: "1px solid #C5CEE2",
            borderBottom: "1px solid #C5CEE2",
          }}
        >
          <h3
            style={{
              margin: "0",
              flex: "0 1 250px",
              minWidth: "0",
              fontFamily: "var(--font-display)",
              fontWeight: "600",
              fontSize: "23px",
              lineHeight: "1.2",
              letterSpacing: "-0.015em",
            }}
          >
            Launch and hosting
          </h3>
          <p
            style={{
              margin: "0",
              flex: "1 1 280px",
              minWidth: "0",
              color: "#44506A",
            }}
          >
            Domain, server, HTTPS and deployment set up for you, then moved into
            accounts you own.
          </p>
        </div>
      </div>
    </section>
  );
}
