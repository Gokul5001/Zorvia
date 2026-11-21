export default function Pricing() {
  return (
    <section id="pricing" style={{ background: "#ffffff" }}>
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
            Pricing by website type
          </h2>
          <p style={{ margin: "0", color: "#44506A" }}>
            Pick the type that fits your business. These are starting prices.
            Once we know what you need, we send a fixed quote before any work
            begins.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          <article
            style={{
              flex: "1 1 240px",
              minWidth: "0",
              background: "#F3F5F9",
              border: "1px solid #D2DAEA",
              borderRadius: "16px",
              padding: "28px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "23px",
                lineHeight: "1.2",
                letterSpacing: "-0.015em",
              }}
            >
              Single-page website
            </h3>
            <p style={{ margin: "0", color: "#44506A", fontSize: "15px" }}>
              One focused page that introduces your business and gets visitors
              to contact you.
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
                $79
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#2447F5",
                  marginTop: "2px",
                }}
              >
                or ₹6,999 INR
              </div>
            </div>
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
                <span>One scrolling page, up to 6 sections</span>
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
                <span>Enquiry form to your inbox</span>
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
            <a
              className="btn"
              href="#contact"
              style={{
                marginTop: "auto",
                background: "#2447F5",
                color: "#ffffff",
                padding: "13px 22px",
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
          </article>

          <article
            style={{
              flex: "1 1 240px",
              minWidth: "0",
              background: "#F3F5F9",
              border: "1px solid #D2DAEA",
              borderRadius: "16px",
              padding: "28px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "23px",
                lineHeight: "1.2",
                letterSpacing: "-0.015em",
              }}
            >
              Multi-page website
            </h3>
            <p style={{ margin: "0", color: "#44506A", fontSize: "15px" }}>
              A full business site with separate pages for services, about, work
              and contact.
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
                $169
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#2447F5",
                  marginTop: "2px",
                }}
              >
                or ₹14,999 INR
              </div>
            </div>
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
                <span>Up to 8 pages</span>
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
                <span>Enquiry form and a work gallery</span>
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
                <span>Search engine setup on every page</span>
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
              Typical time: 3 to 4 weeks
            </div>
            <a
              className="btn"
              href="#contact"
              style={{
                marginTop: "auto",
                background: "#2447F5",
                color: "#ffffff",
                padding: "13px 22px",
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
          </article>

          <article
            style={{
              flex: "1 1 240px",
              minWidth: "0",
              background: "#F3F5F9",
              border: "1px solid #D2DAEA",
              borderRadius: "16px",
              padding: "28px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "23px",
                lineHeight: "1.2",
                letterSpacing: "-0.015em",
              }}
            >
              E-commerce website
            </h3>
            <p style={{ margin: "0", color: "#44506A", fontSize: "15px" }}>
              An online store where customers browse your products, order and
              pay.
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
                $339
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#2447F5",
                  marginTop: "2px",
                }}
              >
                or ₹29,999 INR
              </div>
            </div>
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
                <span>Product catalogue with search</span>
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
                <span>Cart, checkout and online payments</span>
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
                <span>Admin dashboard to manage orders</span>
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
                <span>Customer accounts and order history</span>
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
              Typical time: 6 to 8 weeks
            </div>
            <a
              className="btn"
              href="#contact"
              style={{
                marginTop: "auto",
                background: "#2447F5",
                color: "#ffffff",
                padding: "13px 22px",
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
          </article>

          <article
            style={{
              flex: "1 1 240px",
              minWidth: "0",
              background: "#0E1A30",
              color: "#ffffff",
              border: "1px solid #0E1A30",
              borderRadius: "16px",
              padding: "28px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "23px",
                lineHeight: "1.2",
                letterSpacing: "-0.015em",
              }}
            >
              Custom web app
            </h3>
            <p style={{ margin: "0", color: "#C3CDE3", fontSize: "15px" }}>
              Client logins, booking systems, dashboards or AI features built
              around how you work.
            </p>
            <div>
              <div style={{ fontSize: "14px", color: "#C3CDE3" }}>Price</div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "800",
                  fontSize: "40px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                }}
              >
                Custom quote
              </div>
            </div>
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
                  stroke="#8FA6FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto", marginTop: "5px" }}
                >
                  <path d="M4 12.5l5 5 11-11"></path>
                </svg>
                <span>Scope planned together on a call</span>
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
                  stroke="#8FA6FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto", marginTop: "5px" }}
                >
                  <path d="M4 12.5l5 5 11-11"></path>
                </svg>
                <span>User accounts and a real database</span>
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
                  stroke="#8FA6FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto", marginTop: "5px" }}
                >
                  <path d="M4 12.5l5 5 11-11"></path>
                </svg>
                <span>Bookings, payments or AI chat</span>
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
                  stroke="#8FA6FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto", marginTop: "5px" }}
                >
                  <path d="M4 12.5l5 5 11-11"></path>
                </svg>
                <span>Admin dashboard for your team</span>
              </li>
            </ul>
            <div style={{ fontSize: "14px", color: "#C3CDE3" }}>
              Typical time: depends on scope
            </div>
            <a
              className="btnw"
              href="#contact"
              style={{
                marginTop: "auto",
                background: "#ffffff",
                color: "#0E1A30",
                padding: "13px 22px",
                minHeight: "48px",
                boxSizing: "border-box",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                fontWeight: "600",
              }}
            >
              Discuss your idea
            </a>
          </article>
        </div>
        <p
          style={{
            margin: "0",
            fontSize: "15px",
            color: "#44506A",
            maxWidth: "760px",
          }}
        >
          Prices are in US dollars. Clients in India can pay in Indian rupees.
          Quotes in Saudi riyals are available on request. Domain and hosting
          charges from the provider are extra.
        </p>
      </div>
    </section>
  );
}
