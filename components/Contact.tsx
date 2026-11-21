"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    // TODO: send `f` to your backend / email service here
    setFirstName(name.split(" ")[0]);
    setEmail(String(f.get("email") || "").trim());
    setSent(true);
  }
  const again = () => setSent(false);

  return (
    <section
      id="contact"
      className="dark"
      style={{ background: "#0E1A30", color: "#ffffff" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(64px,9vw,104px) 24px clamp(48px,6vw,72px)",
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "48px 72px",
        }}
      >
        <div
          style={{
            flex: "1 1 360px",
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-display)",
              fontWeight: "800",
              fontSize: "clamp(34px,5vw,60px)",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              textWrap: "balance",
            }}
          >
            Tell us what you want to launch.
          </h2>
          <p
            style={{
              margin: "0",
              maxWidth: "480px",
              fontSize: "19px",
              color: "#C3CDE3",
            }}
          >
            Fill in the form. We read every enquiry and reply with questions or
            a quote. The more you tell us about your business, the better our
            first reply.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 420px",
            minWidth: "0",
            background: "#ffffff",
            color: "#0E1A30",
            borderRadius: "12px",
            overflow: "hidden",
            boxSizing: "border-box",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.06),0 30px 70px -20px rgba(0,0,0,0.55)",
          }}
        >
          <div
            style={{ background: "#DEE1E6", borderBottom: "1px solid #D3D6DE" }}
            aria-hidden="true"
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "14px",
                padding: "10px 14px 0",
              }}
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
                  maxWidth: "220px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "4px",
                    background: "#2447F5",
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
                  New project enquiry
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
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                  Start a project with Zorvia
                </span>
              </div>
            </div>
          </div>
          <div
            style={{ padding: "clamp(20px,4vw,32px)", boxSizing: "border-box" }}
          >
            {!sent && (
              <>
                <form
                  onSubmit={submit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <label
                      htmlFor="f-name"
                      style={{ fontWeight: "600", fontSize: "15px" }}
                    >
                      Your name
                    </label>
                    <input
                      className="fld"
                      id="f-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "18px" }}
                  >
                    <div
                      style={{
                        flex: "1 1 200px",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <label
                        htmlFor="f-email"
                        style={{ fontWeight: "600", fontSize: "15px" }}
                      >
                        Email
                      </label>
                      <input
                        className="fld"
                        id="f-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                      />
                    </div>
                    <div
                      style={{
                        flex: "1 1 200px",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <label
                        htmlFor="f-phone"
                        style={{ fontWeight: "600", fontSize: "15px" }}
                      >
                        Phone or WhatsApp (optional)
                      </label>
                      <input
                        className="fld"
                        id="f-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <label
                      htmlFor="f-need"
                      style={{ fontWeight: "600", fontSize: "15px" }}
                    >
                      What do you need?
                    </label>
                    <select
                      className="fld"
                      id="f-need"
                      name="need"
                      defaultValue="Not sure yet"
                    >
                      <option>Single-page website</option>
                      <option>Portfolio website</option>
                      <option>Multi-page website</option>
                      <option>E-commerce website</option>
                      <option>Custom web app or dashboard</option>
                      <option>AI chat assistant</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <label
                      htmlFor="f-msg"
                      style={{ fontWeight: "600", fontSize: "15px" }}
                    >
                      About your business and when you want to launch
                    </label>
                    <textarea
                      className="fld"
                      id="f-msg"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <button
                    className="btn"
                    type="submit"
                    style={{
                      background: "#2447F5",
                      color: "#ffffff",
                      padding: "14px 28px",
                      minHeight: "50px",
                      borderRadius: "10px",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    Send enquiry
                  </button>
                </form>
              </>
            )}
            {sent && (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    padding: "12px 0",
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="none"
                    stroke="#14A44D"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M7.5 12.5l3 3 6-6.5"></path>
                  </svg>
                  <h3
                    style={{
                      margin: "0",
                      fontFamily: "var(--font-display)",
                      fontWeight: "800",
                      fontSize: "28px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Thanks, {firstName}.
                  </h3>
                  <p style={{ margin: "0", color: "#44506A" }}>
                    Your enquiry is in. We will reply to {email} with questions
                    or a quote.
                  </p>
                  <button
                    className="btn2"
                    type="button"
                    onClick={again}
                    style={{
                      alignSelf: "flex-start",
                      background: "transparent",
                      color: "#0E1A30",
                      padding: "12px 22px",
                      minHeight: "46px",
                      borderRadius: "10px",
                      fontWeight: "600",
                      border: "2px solid #B7C1D8",
                    }}
                  >
                    Send another enquiry
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 40px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            borderTop: "1px solid #2A3A5C",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "8px 24px",
            fontSize: "15px",
            color: "#AEBAD3",
          }}
        >
          <span>Zorvia</span>
          <span>© 2026 Zorvia. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}
