export default function Work() {
  return (
    <section
      id="work"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(64px,9vw,104px) 24px clamp(56px,8vw,96px)",
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
          Sites delivered to clients
        </h2>
        <p style={{ margin: "0", color: "#44506A" }}>
          Real websites we have built and launched, grouped by type.
        </p>
      </div>
      <div className="g3">
        <div
          style={{
            flex: "1 1 420px",
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "1.2",
                letterSpacing: "-0.015em",
              }}
            >
              Single-page website
            </h3>
            <p
              style={{ margin: "4px 0 0", fontSize: "15px", color: "#44506A" }}
            >
              Everything on one scrolling page.
            </p>
          </div>
          <article
            className="proj"
            style={{
              flex: "1",
              background: "#ffffff",
              border: "1px solid #D2DAEA",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a
              className="tabwin"
              href="https://bcreative-network-agency.netlify.app"
              aria-label="Open B-Creative website"
              style={{
                display: "block",
                background: "#DEE1E6",
                borderBottom: "1px solid #D3D6DE",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "14px",
                  padding: "10px 14px 0",
                }}
                aria-hidden="true"
              >
                <div
                  style={{
                    display: "flex",
                    gap: "7px",
                    flex: "0 0 auto",
                    paddingBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: "#FF5F57",
                      border: "1px solid #E0443E",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: "#FEBC2E",
                      border: "1px solid #DEA123",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
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
                    background: "#F7F7F9",
                    borderRadius: "9px 9px 0 0",
                    padding: "8px 14px",
                    fontSize: "13px",
                    color: "#2B3345",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    minWidth: "0",
                    maxWidth: "210px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "4px",
                      background: "#E8590C",
                      flex: "0 0 auto",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    B-Creative Network Agency
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "#F7F7F9",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6A7288"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto" }}
                >
                  <path d="M15 5l-7 7 7 7"></path>
                </svg>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B4BACA"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto" }}
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
                <div
                  style={{
                    flex: "1",
                    minWidth: "0",
                    background: "#E9EAEE",
                    borderRadius: "999px",
                    padding: "5px 14px",
                    fontSize: "13px",
                    color: "#4A5268",
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
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
                  <span
                    style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    bcreative-network-agency.netlify.app
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "#E8590C",
                  color: "#FFF6EE",
                  aspectRatio: "16/8",
                  minHeight: "150px",
                  padding: "20px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                    fontSize: "clamp(22px,3vw,30px)",
                    lineHeight: "1.1",
                  }}
                >
                  B-Creative
                </div>
                <div style={{ fontSize: "14px", opacity: ".85" }}>
                  Advertising and IT agency
                </div>
                <span
                  className="ob"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#FFF6EE",
                    color: "#E8590C",
                    padding: "10px 18px",
                    borderRadius: "999px",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  Open website
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M9 7h8v8"></path>
                  </svg>
                </span>
              </div>
            </a>
            <div
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: "1",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  fontFamily: "var(--font-display)",
                  fontWeight: "600",
                  fontSize: "22px",
                  letterSpacing: "-0.015em",
                }}
              >
                B-Creative Network Agency
              </h4>
              <p style={{ margin: "0", color: "#44506A" }}>
                A one-page website for an advertising and IT agency in Saudi
                Arabia and Pakistan. Services, approach, work and contact sit on
                a single scrolling page.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    background: "#EEF1F8",
                    color: "#33405C",
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  Single page
                </span>
                <span
                  style={{
                    background: "#EEF1F8",
                    color: "#33405C",
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  Saudi Arabia
                </span>
              </div>
              <a
                href="https://bcreative-network-agency.netlify.app"
                style={{
                  marginTop: "auto",
                  paddingTop: "6px",
                  color: "#2447F5",
                  fontWeight: "600",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Visit website
              </a>
            </div>
          </article>
        </div>

        <div
          style={{
            flex: "1 1 420px",
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "1.2",
                letterSpacing: "-0.015em",
              }}
            >
              Multi-page website
            </h3>
            <p
              style={{ margin: "4px 0 0", fontSize: "15px", color: "#44506A" }}
            >
              Separate linked pages for each topic.
            </p>
          </div>
          <article
            className="proj"
            style={{
              flex: "1",
              background: "#ffffff",
              border: "1px solid #D2DAEA",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a
              className="tabwin"
              href="https://zeromedixine.com"
              aria-label="Open ZeroMedixine website"
              style={{
                display: "block",
                background: "#DEE1E6",
                borderBottom: "1px solid #D3D6DE",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "14px",
                  padding: "10px 14px 0",
                }}
                aria-hidden="true"
              >
                <div
                  style={{
                    display: "flex",
                    gap: "7px",
                    flex: "0 0 auto",
                    paddingBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: "#FF5F57",
                      border: "1px solid #E0443E",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: "#FEBC2E",
                      border: "1px solid #DEA123",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
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
                    background: "#F7F7F9",
                    borderRadius: "9px 9px 0 0",
                    padding: "8px 14px",
                    fontSize: "13px",
                    color: "#2B3345",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    minWidth: "0",
                    maxWidth: "210px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "4px",
                      background: "#0E8F8A",
                      flex: "0 0 auto",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ZeroMedixine
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "#F7F7F9",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6A7288"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto" }}
                >
                  <path d="M15 5l-7 7 7 7"></path>
                </svg>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B4BACA"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto" }}
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
                <div
                  style={{
                    flex: "1",
                    minWidth: "0",
                    background: "#E9EAEE",
                    borderRadius: "999px",
                    padding: "5px 14px",
                    fontSize: "13px",
                    color: "#4A5268",
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
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
                  <span
                    style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    zeromedixine.com
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "#0E8F8A",
                  color: "#F0FFFD",
                  aspectRatio: "16/8",
                  minHeight: "150px",
                  padding: "20px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                    fontSize: "clamp(22px,3vw,30px)",
                    lineHeight: "1.1",
                  }}
                >
                  ZeroMedixine
                </div>
                <div style={{ fontSize: "14px", opacity: ".85" }}>
                  Digital physiotherapy clinic
                </div>
                <span
                  className="ob"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#F0FFFD",
                    color: "#0E8F8A",
                    padding: "10px 18px",
                    borderRadius: "999px",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  Open website
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M9 7h8v8"></path>
                  </svg>
                </span>
              </div>
            </a>
            <div
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: "1",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  fontFamily: "var(--font-display)",
                  fontWeight: "600",
                  fontSize: "22px",
                  letterSpacing: "-0.015em",
                }}
              >
                ZeroMedixine
              </h4>
              <p style={{ margin: "0", color: "#44506A" }}>
                A digital physiotherapy clinic with separate pages for clinics,
                blogs and health concerns, plus patient login and consultation
                booking. Built from the ground up.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    background: "#EEF1F8",
                    color: "#33405C",
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  Multi page
                </span>
                <span
                  style={{
                    background: "#EEF1F8",
                    color: "#33405C",
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  Healthcare
                </span>
              </div>
              <a
                href="https://zeromedixine.com"
                style={{
                  marginTop: "auto",
                  paddingTop: "6px",
                  color: "#2447F5",
                  fontWeight: "600",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Visit zeromedixine.com
              </a>
            </div>
          </article>
        </div>

        <div
          style={{
            flex: "1 1 420px",
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "1.2",
                letterSpacing: "-0.015em",
              }}
            >
              E-commerce website
            </h3>
            <p
              style={{ margin: "4px 0 0", fontSize: "15px", color: "#44506A" }}
            >
              Customers search, order and pay online.
            </p>
          </div>
          <article
            className="proj"
            style={{
              flex: "1",
              background: "#ffffff",
              border: "1px solid #D2DAEA",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a
              className="tabwin"
              href="https://lemontrip.in"
              aria-label="Open LemonTrip website"
              style={{
                display: "block",
                background: "#DEE1E6",
                borderBottom: "1px solid #D3D6DE",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "14px",
                  padding: "10px 14px 0",
                }}
                aria-hidden="true"
              >
                <div
                  style={{
                    display: "flex",
                    gap: "7px",
                    flex: "0 0 auto",
                    paddingBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: "#FF5F57",
                      border: "1px solid #E0443E",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: "#FEBC2E",
                      border: "1px solid #DEA123",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
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
                    background: "#F7F7F9",
                    borderRadius: "9px 9px 0 0",
                    padding: "8px 14px",
                    fontSize: "13px",
                    color: "#2B3345",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    minWidth: "0",
                    maxWidth: "210px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "4px",
                      background: "#0F3D2A",
                      flex: "0 0 auto",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    LemonTrip
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "#F7F7F9",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6A7288"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto" }}
                >
                  <path d="M15 5l-7 7 7 7"></path>
                </svg>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B4BACA"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto" }}
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
                <div
                  style={{
                    flex: "1",
                    minWidth: "0",
                    background: "#E9EAEE",
                    borderRadius: "999px",
                    padding: "5px 14px",
                    fontSize: "13px",
                    color: "#4A5268",
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
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
                  <span
                    style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    lemontrip.in
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "#0F3D2A",
                  color: "#FFD84A",
                  aspectRatio: "16/8",
                  minHeight: "150px",
                  padding: "20px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                    fontSize: "clamp(22px,3vw,30px)",
                    lineHeight: "1.1",
                  }}
                >
                  LemonTrip
                </div>
                <div style={{ fontSize: "14px", opacity: ".85" }}>
                  Travel booking platform
                </div>
                <span
                  className="ob"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#FFD84A",
                    color: "#0F3D2A",
                    padding: "10px 18px",
                    borderRadius: "999px",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  Open website
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M9 7h8v8"></path>
                  </svg>
                </span>
              </div>
            </a>
            <div
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: "1",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  fontFamily: "var(--font-display)",
                  fontWeight: "600",
                  fontSize: "22px",
                  letterSpacing: "-0.015em",
                }}
              >
                LemonTrip
              </h4>
              <p style={{ margin: "0", color: "#44506A" }}>
                A travel booking platform for flights, hotels, trains, buses,
                holidays and visas, with customer accounts, bookings and an AI
                trip planner.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    background: "#EEF1F8",
                    color: "#33405C",
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  E-commerce
                </span>
                <span
                  style={{
                    background: "#EEF1F8",
                    color: "#33405C",
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  Travel
                </span>
              </div>
              <a
                href="https://lemontrip.in"
                style={{
                  marginTop: "auto",
                  paddingTop: "6px",
                  color: "#2447F5",
                  fontWeight: "600",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Visit lemontrip.in
              </a>
            </div>
          </article>
        </div>

        <div
          className="span2"
          style={{
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "1.2",
                letterSpacing: "-0.015em",
              }}
            >
              Portfolio website
            </h3>
            <p
              style={{ margin: "4px 0 0", fontSize: "15px", color: "#44506A" }}
            >
              A personal site that shows a professional&apos;s work.
            </p>
          </div>
          <div className="pair">
            <article
              className="proj"
              style={{
                flex: "1",
                background: "#ffffff",
                border: "1px solid #D2DAEA",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                className="tabwin"
                href="https://muhammadbilal-portflio.netlify.app"
                aria-label="Open Muhammad Bilal portfolio website"
                style={{
                  display: "block",
                  background: "#DEE1E6",
                  borderBottom: "1px solid #D3D6DE",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "14px",
                    padding: "10px 14px 0",
                  }}
                  aria-hidden="true"
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      flex: "0 0 auto",
                      paddingBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        width: "11px",
                        height: "11px",
                        borderRadius: "50%",
                        background: "#FF5F57",
                        border: "1px solid #E0443E",
                        boxSizing: "border-box",
                        display: "inline-block",
                      }}
                    ></span>
                    <span
                      style={{
                        width: "11px",
                        height: "11px",
                        borderRadius: "50%",
                        background: "#FEBC2E",
                        border: "1px solid #DEA123",
                        boxSizing: "border-box",
                        display: "inline-block",
                      }}
                    ></span>
                    <span
                      style={{
                        width: "11px",
                        height: "11px",
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
                      background: "#F7F7F9",
                      borderRadius: "9px 9px 0 0",
                      padding: "8px 14px",
                      fontSize: "13px",
                      color: "#2B3345",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      minWidth: "0",
                      maxWidth: "210px",
                      boxSizing: "border-box",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "4px",
                        background: "#D9B26A",
                        flex: "0 0 auto",
                        display: "inline-block",
                      }}
                    ></span>
                    <span
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Muhammad Bilal
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    background: "#F7F7F9",
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6A7288"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "0 0 auto" }}
                  >
                    <path d="M15 5l-7 7 7 7"></path>
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B4BACA"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "0 0 auto" }}
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                  <div
                    style={{
                      flex: "1",
                      minWidth: "0",
                      background: "#E9EAEE",
                      borderRadius: "999px",
                      padding: "5px 14px",
                      fontSize: "13px",
                      color: "#4A5268",
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
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
                      <rect
                        x="1.5"
                        y="5.5"
                        width="8"
                        height="6"
                        rx="1.5"
                      ></rect>
                      <path d="M3.5 5.5V3.8a2 2 0 014 0v1.7"></path>
                    </svg>
                    <span
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      muhammadbilal-portflio.netlify.app
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    background: "#0B0D0C",
                    color: "#F5EFE2",
                    aspectRatio: "16/8",
                    minHeight: "150px",
                    padding: "20px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "14px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                      fontSize: "clamp(22px,3vw,30px)",
                      lineHeight: "1.1",
                    }}
                  >
                    Muhammad Bilal
                  </div>
                  <div style={{ fontSize: "14px", opacity: ".85" }}>
                    Graphic designer and digital marketer
                  </div>
                  <span
                    className="ob"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#D9B26A",
                      color: "#0B0D0C",
                      padding: "10px 18px",
                      borderRadius: "999px",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                  >
                    Open website
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M9 7h8v8"></path>
                    </svg>
                  </span>
                </div>
              </a>
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  flex: "1",
                }}
              >
                <h4
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-display)",
                    fontWeight: "600",
                    fontSize: "22px",
                    letterSpacing: "-0.015em",
                  }}
                >
                  Muhammad Bilal
                </h4>
                <p style={{ margin: "0", color: "#44506A" }}>
                  A dark, cinematic portfolio for a graphic designer and digital
                  marketing specialist in Jeddah, Saudi Arabia, with about,
                  education, experience, work and awards sections.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span
                    style={{
                      background: "#EEF1F8",
                      color: "#33405C",
                      fontSize: "13px",
                      padding: "4px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    Portfolio
                  </span>
                  <span
                    style={{
                      background: "#EEF1F8",
                      color: "#33405C",
                      fontSize: "13px",
                      padding: "4px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    Saudi Arabia
                  </span>
                </div>
                <a
                  href="https://muhammadbilal-portflio.netlify.app"
                  style={{
                    marginTop: "auto",
                    paddingTop: "6px",
                    color: "#2447F5",
                    fontWeight: "600",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Visit website
                </a>
              </div>
            </article>
            <article
              className="proj"
              style={{
                flex: "1",
                background: "#ffffff",
                border: "1px solid #D2DAEA",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                className="tabwin"
                href="https://myportfolio2026-five.vercel.app/"
                aria-label="Open Gokulkannan K H portfolio website"
                style={{
                  display: "block",
                  background: "#DEE1E6",
                  borderBottom: "1px solid #D3D6DE",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "14px",
                    padding: "10px 14px 0",
                  }}
                  aria-hidden="true"
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      flex: "0 0 auto",
                      paddingBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        width: "11px",
                        height: "11px",
                        borderRadius: "50%",
                        background: "#FF5F57",
                        border: "1px solid #E0443E",
                        boxSizing: "border-box",
                        display: "inline-block",
                      }}
                    ></span>
                    <span
                      style={{
                        width: "11px",
                        height: "11px",
                        borderRadius: "50%",
                        background: "#FEBC2E",
                        border: "1px solid #DEA123",
                        boxSizing: "border-box",
                        display: "inline-block",
                      }}
                    ></span>
                    <span
                      style={{
                        width: "11px",
                        height: "11px",
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
                      background: "#F7F7F9",
                      borderRadius: "9px 9px 0 0",
                      padding: "8px 14px",
                      fontSize: "13px",
                      color: "#2B3345",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      minWidth: "0",
                      maxWidth: "210px",
                      boxSizing: "border-box",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "4px",
                        background: "#A855F7",
                        flex: "0 0 auto",
                        display: "inline-block",
                      }}
                    ></span>
                    <span
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Gokulkannan K H - My Portfolio
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    background: "#F7F7F9",
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6A7288"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "0 0 auto" }}
                  >
                    <path d="M15 5l-7 7 7 7"></path>
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B4BACA"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "0 0 auto" }}
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                  <div
                    style={{
                      flex: "1",
                      minWidth: "0",
                      background: "#E9EAEE",
                      borderRadius: "999px",
                      padding: "5px 14px",
                      fontSize: "13px",
                      color: "#4A5268",
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
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
                      <rect
                        x="1.5"
                        y="5.5"
                        width="8"
                        height="6"
                        rx="1.5"
                      ></rect>
                      <path d="M3.5 5.5V3.8a2 2 0 014 0v1.7"></path>
                    </svg>
                    <span
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      myportfolio2026-five.vercel.app
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    background: "#12081F",
                    color: "#F3EEFF",
                    aspectRatio: "16/8",
                    minHeight: "150px",
                    padding: "20px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "14px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                      fontSize: "clamp(22px,3vw,30px)",
                      lineHeight: "1.1",
                    }}
                  >
                    Gokulkannan K H
                  </div>
                  <div style={{ fontSize: "14px", opacity: ".85" }}>
                    Full stack engineer
                  </div>
                  <span
                    className="ob"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#C084FC",
                      color: "#12081F",
                      padding: "10px 18px",
                      borderRadius: "999px",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                  >
                    Open website
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M9 7h8v8"></path>
                    </svg>
                  </span>
                </div>
              </a>
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  flex: "1",
                }}
              >
                <h4
                  style={{
                    margin: "0",
                    fontFamily: "var(--font-display)",
                    fontWeight: "600",
                    fontSize: "22px",
                    letterSpacing: "-0.015em",
                  }}
                >
                  Gokulkannan K H
                </h4>
                <p style={{ margin: "0", color: "#44506A" }}>
                  A dark, animated personal portfolio for a full-stack engineer,
                  with expertise, history, projects and contact sections and a
                  light and dark theme switch.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span
                    style={{
                      background: "#EEF1F8",
                      color: "#33405C",
                      fontSize: "13px",
                      padding: "4px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    Portfolio
                  </span>
                  <span
                    style={{
                      background: "#EEF1F8",
                      color: "#33405C",
                      fontSize: "13px",
                      padding: "4px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    Personal project
                  </span>
                </div>
                <a
                  href="https://myportfolio2026-five.vercel.app/"
                  style={{
                    marginTop: "auto",
                    paddingTop: "6px",
                    color: "#2447F5",
                    fontWeight: "600",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Visit website
                </a>
              </div>
            </article>
          </div>
        </div>
        <div
          style={{
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-display)",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "1.2",
                letterSpacing: "-0.015em",
              }}
            >
              Custom web app
            </h3>
            <p
              style={{ margin: "4px 0 0", fontSize: "15px", color: "#44506A" }}
            >
              Dashboards and tools built around how you work.
            </p>
          </div>
          <article
            className="proj"
            style={{
              flex: "1",
              background: "#ffffff",
              border: "1px solid #D2DAEA",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a
              className="tabwin"
              href="https://next-js-task-of-advanced-crm-dashbo-liart.vercel.app/"
              aria-label="Open CRM dashboard"
              style={{
                display: "block",
                background: "#DEE1E6",
                borderBottom: "1px solid #D3D6DE",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "14px",
                  padding: "10px 14px 0",
                }}
                aria-hidden="true"
              >
                <div
                  style={{
                    display: "flex",
                    gap: "7px",
                    flex: "0 0 auto",
                    paddingBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: "#FF5F57",
                      border: "1px solid #E0443E",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: "#FEBC2E",
                      border: "1px solid #DEA123",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "11px",
                      height: "11px",
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
                    background: "#F7F7F9",
                    borderRadius: "9px 9px 0 0",
                    padding: "8px 14px",
                    fontSize: "13px",
                    color: "#2B3345",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    minWidth: "0",
                    maxWidth: "210px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "4px",
                      background: "#6C6BF2",
                      flex: "0 0 auto",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Customers
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "#F7F7F9",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6A7288"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto" }}
                >
                  <path d="M15 5l-7 7 7 7"></path>
                </svg>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B4BACA"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flex: "0 0 auto" }}
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
                <div
                  style={{
                    flex: "1",
                    minWidth: "0",
                    background: "#E9EAEE",
                    borderRadius: "999px",
                    padding: "5px 14px",
                    fontSize: "13px",
                    color: "#4A5268",
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
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
                  <span
                    style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    next-js-task-of-advanced-crm-dashbo-liart.vercel.app
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "#0F0F14",
                  color: "#ECECF5",
                  aspectRatio: "16/8",
                  minHeight: "150px",
                  padding: "20px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                    fontSize: "clamp(22px,3vw,30px)",
                    lineHeight: "1.1",
                  }}
                >
                  CRM dashboard
                </div>
                <div style={{ fontSize: "14px", opacity: ".85" }}>
                  Customer admin panel
                </div>
                <span
                  className="ob"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#8B8AF7",
                    color: "#0F0F14",
                    padding: "10px 18px",
                    borderRadius: "999px",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  Open website
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M9 7h8v8"></path>
                  </svg>
                </span>
              </div>
            </a>
            <div
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: "1",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  fontFamily: "var(--font-display)",
                  fontWeight: "600",
                  fontSize: "22px",
                  letterSpacing: "-0.015em",
                }}
              >
                Advanced CRM dashboard
              </h4>
              <p style={{ margin: "0", color: "#44506A" }}>
                An admin dashboard for managing customers, with search, filters,
                sortable columns, row reordering, CSV export, pagination and a
                light and dark theme. Shown with sample data.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span
                  style={{
                    background: "#EEF1F8",
                    color: "#33405C",
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  Web app
                </span>
                <span
                  style={{
                    background: "#EEF1F8",
                    color: "#33405C",
                    fontSize: "13px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  Sample project
                </span>
              </div>
              <a
                href="https://next-js-task-of-advanced-crm-dashbo-liart.vercel.app/"
                style={{
                  marginTop: "auto",
                  paddingTop: "6px",
                  color: "#2447F5",
                  fontWeight: "600",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Visit website
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
