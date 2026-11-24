export default function StackBand() {
  return (
    <section style={{ background: "#E4E9F4" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "22px 24px",
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px 40px",
        }}
      >
        <p style={{ margin: "0", fontWeight: "600", fontSize: "16px" }}>
          Professional and freelance experience across healthcare, travel and business websites.
        </p>
        <p
          style={{
            margin: "0",
            fontSize: "15px",
            color: "#33405C",
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 22px",
          }}
        >
          <span>Next.js</span>
          <span>React</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
          <span>Docker</span>
        </p>
      </div>
    </section>
  );
}
