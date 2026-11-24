export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(24px,5vw,56px) 24px clamp(56px,8vw,88px)",
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "clamp(32px,5vw,56px)",
      }}
    >
      <div
        className="hero-copy"
        style={{
            flex: "1 1 520px",
          minWidth: "0",
          display: "flex",
          flexDirection: "column",
            gap: "24px",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontFamily: "var(--font-display)",
            fontWeight: "800",
            fontSize: "clamp(44px,5vw,64px)",
            lineHeight: "1.06",
            letterSpacing: "-0.035em",
            textWrap: "pretty",
            maxWidth: "560px",
          }}
        >
          Get a professional website for your service business.
        </h1>
        <p
          style={{
            margin: "0",
            fontSize: "19px",
            lineHeight: "1.6",
            color: "#44506A",
            maxWidth: "540px",
          }}
        >
          Tell us what you offer. We design the site, build it, put it on your
          own domain and hand it over working, from the first call to launch
          day.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <a
            className="btn"
            href="#contact"
            style={{
              background: "#2447F5",
              color: "#ffffff",
              padding: "14px 26px",
              minHeight: "48px",
              boxSizing: "border-box",
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "17px",
            }}
          >
            Start a project
          </a>
          <a
            className="btn2"
            href="#work"
            style={{
              background: "transparent",
              color: "#0E1A30",
              padding: "14px 26px",
              minHeight: "48px",
              boxSizing: "border-box",
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "17px",
              border: "2px solid #B7C1D8",
            }}
          >
            See selected projects
          </a>
        </div>
        <p style={{ margin: "0", fontSize: "15px", color: "#44506A" }}>
          Professional experience and freelance delivery, fully remote.
        </p>
      </div>

      <div className="hero-preview" style={{ flex: "1 1 400px", minWidth: "0" }}>
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #C9D0DE",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow:
              "0 0 0 1px rgba(14,26,48,0.04),0 30px 70px -20px rgba(14,26,48,0.5)",
          }}
        >
          <div
            style={{
              background: "#E9EAEE",
              borderBottom: "1px solid #D3D6DE",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
            aria-hidden="true"
          >
            <div style={{ display: "flex", gap: "8px", flex: "0 0 auto" }}>
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#FF5F57",
                  border: "1px solid #E0443E",
                  boxSizing: "border-box",
                  display: "inline-block",
                }}
              ></span>
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#FEBC2E",
                  border: "1px solid #DEA123",
                  boxSizing: "border-box",
                  display: "inline-block",
                }}
              ></span>
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#28C840",
                  border: "1px solid #1AAB29",
                  boxSizing: "border-box",
                  display: "inline-block",
                }}
              ></span>
            </div>
            <div
              style={{
                flex: "1",
                minWidth: "0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: "#F7F7F9",
                  border: "1px solid #D3D6DE",
                  borderRadius: "8px",
                  padding: "5px 14px",
                  fontSize: "13.5px",
                  color: "#4A5268",
                  minWidth: "0",
                  maxWidth: "260px",
                  width: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                  stroke="#6A7288"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto" }}
                >
                  <rect x="1.5" y="5.5" width="8" height="6" rx="1.5"></rect>
                  <path d="M3.5 5.5V3.8a2 2 0 014 0v1.7"></path>
                </svg>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                  yourbusiness.com
                </span>
              </div>
            </div>
            <div
              style={{
                flex: "0 0 auto",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: "600",
                color: "#0B6B31",
              }}
            >
              <span
                className="live"
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "#14A44D",
                  display: "inline-block",
                }}
              ></span>
              Live
            </div>
          </div>
          <div
            style={{
              padding: "24px 24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "800",
                fontSize: "22px",
                letterSpacing: "-0.02em",
                marginBottom: "10px",
              }}
            >
              Launch checklist
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "11px 0",
                borderTop: "1px solid #E6EAF3",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="#14A44D"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M7.5 12.5l3 3 6-6.5"></path>
              </svg>
              <span style={{ flex: "1", minWidth: "0" }}>Domain connected</span>
              <span style={{ fontSize: "14px", color: "#44506A" }}>Done</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "11px 0",
                borderTop: "1px solid #E6EAF3",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="#14A44D"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M7.5 12.5l3 3 6-6.5"></path>
              </svg>
              <span style={{ flex: "1", minWidth: "0" }}>
                Security certificate (HTTPS)
              </span>
              <span style={{ fontSize: "14px", color: "#44506A" }}>Done</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "11px 0",
                borderTop: "1px solid #E6EAF3",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="#14A44D"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M7.5 12.5l3 3 6-6.5"></path>
              </svg>
              <span style={{ flex: "1", minWidth: "0" }}>
                Tested on phone and desktop
              </span>
              <span style={{ fontSize: "14px", color: "#44506A" }}>Done</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "11px 0",
                borderTop: "1px solid #E6EAF3",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="#14A44D"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M7.5 12.5l3 3 6-6.5"></path>
              </svg>
              <span style={{ flex: "1", minWidth: "0" }}>
                Enquiry form sends to your inbox
              </span>
              <span style={{ fontSize: "14px", color: "#44506A" }}>Done</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "11px 0",
                borderTop: "1px solid #E6EAF3",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="#14A44D"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M7.5 12.5l3 3 6-6.5"></path>
              </svg>
              <span style={{ flex: "1", minWidth: "0" }}>
                Logins and code handed to you
              </span>
              <span style={{ fontSize: "14px", color: "#44506A" }}>Done</span>
            </div>
            <div
              style={{
                marginTop: "12px",
                background: "#DDF5E6",
                color: "#0B6B31",
                borderRadius: "10px",
                padding: "12px 16px",
                fontWeight: "600",
              }}
            >
              Your website is live.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
