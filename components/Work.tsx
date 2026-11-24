type Project = {
  title: string;
  domain: string;
  url: string;
  category: string;
  description: string;
  tags: string[];
  banner: string;
  accent: string;
  subtitle: string;
};

const websiteGroups = [
  {
    title: "Single-page website",
    subtitle: "Everything on one scrolling page.",
    projects: [
      {
        title: "B-Creative",
        domain: "bcreative-network-agency.netlify.app",
        url: "https://bcreative-network-agency.netlify.app/",
        category: "B-Creative Network Agency",
        description:
          "A one-page website for an advertising and IT agency in Saudi Arabia and Pakistan. Services, approach, work and contact sit on a single scrolling page.",
        tags: ["Single page", "Saudi Arabia"],
        banner: "#E66220",
        accent: "#FFFFFF",
        subtitle: "Advertising and IT agency",
      },
    ],
  },
  {
    title: "Multi-page website",
    subtitle: "Separate linked pages for each topic.",
    projects: [
      {
        title: "ZeroMedixine",
        domain: "zeromedixine.com",
        url: "https://zeromedixine.com/",
        category: "Zeromedixine",
        description:
          "A digital physiotherapy clinic with separate pages for clinics, blogs and health concerns, plus patient login and consultation booking.",
        tags: ["Multi page", "Healthcare"],
        banner: "#2996A2",
        accent: "#FFFFFF",
        subtitle: "Digital physiotherapy clinic",
      },
    ],
  },
  {
    title: "E-commerce website",
    subtitle: "Customers search, order and pay online.",
    projects: [
      {
        title: "LemonTrip",
        domain: "lemontrip.in",
        url: "https://lemontrip.in/",
        category: "LemonTrip",
        description:
          "A travel booking platform for flights, hotels, trains, buses, holidays and visas, with customer accounts, bookings and an AI trip planner.",
        tags: ["E-commerce", "Travel"],
        banner: "#174A53",
        accent: "#FFD400",
        subtitle: "Travel booking platform",
      },
    ],
  },
  {
    title: "Portfolio website",
    subtitle: "A personal site that shows a professional's work.",
    projects: [
      {
        title: "Muhammad Bilal",
        domain: "muhammadbilal-portflio.netlify.app",
        url: "https://muhammadbilal-portflio.netlify.app/",
        category: "Muhammad Bilal",
        description:
          "A dark, cinematic portfolio for a graphic designer and digital marketing specialist in Jeddah, Saudi Arabia.",
        tags: ["Portfolio", "Saudi Arabia"],
        banner: "#171C38",
        accent: "#F0B95C",
        subtitle: "Graphic designer and digital marketer",
      },
      {
        title: "Gokulkannan K H",
        domain: "myportfolio2026-five.vercel.app",
        url: "https://myportfolio2026-five.vercel.app/",
        category: "Gokulkannan K H - My Portfolio",
        description:
          "A dark, animated personal portfolio for a full-stack engineer, with experience, projects and a light and dark switch.",
        tags: ["Portfolio", "Personal project"],
        banner: "#241F3F",
        accent: "#D29BFF",
        subtitle: "Full stack engineer",
      },
    ],
  },
  {
    title: "Custom web app",
    subtitle: "Dashboards and tools built around how you work.",
    projects: [
      {
        title: "Advanced CRM dashboard",
        domain: "next-js-task-of-advanced-crm-dashbo-liart.vercel.app",
        url: "https://next-js-task-of-advanced-crm-dashbo-liart.vercel.app/",
        category: "Customers",
        description:
          "An admin dashboard for managing customers, with search, filters, sortable columns, row reordering, CSV export, pagination and a light and dark theme.",
        tags: ["Web app", "Sample project"],
        banner: "#1A214A",
        accent: "#7F91F7",
        subtitle: "Customer admin panel",
      },
    ],
  },
];

export default function Work() {
  return (
    <section
      id="work"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(64px,9vw,104px) 24px clamp(56px,8vw,96px)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "720px", marginBottom: "40px" }}>
        <h2
          style={{
            margin: "0",
            fontFamily: "var(--font-display)",
            fontWeight: "800",
            fontSize: "clamp(30px,4vw,46px)",
            lineHeight: "1.08",
            letterSpacing: "-0.025em",
          }}
        >
          Selected Projects &amp; Experience
        </h2>
        <p style={{ margin: "14px 0 0", color: "#44506A" }}>
          Explore the professional and freelance development experience of Zorwia&apos;s founder across diverse industries.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "52px" }}>
        <div className="top-project-grid">
          {websiteGroups.slice(0, 3).map((group) => (
            <WebsiteRow key={group.title} group={group} />
          ))}
        </div>
        <div className="bottom-project-grid">
          <WebsiteRow group={websiteGroups[3]} />
          <WebsiteRow group={websiteGroups[4]} />
        </div>
      </div>

      <p
        style={{
          margin: "40px 0 0",
          padding: "16px 18px",
          background: "#EEF1F8",
          borderRadius: "10px",
          color: "#44506A",
          fontSize: "14px",
        }}
      >
        Projects shown represent the founder&apos;s individual professional and freelance experience.
        They do not imply direct client relationships, partnerships, or endorsements of Zorwia.
        All intellectual property rights belong to their respective owners.
      </p>
    </section>
  );
}

function WebsiteRow({ group }: { group: (typeof websiteGroups)[number] }) {
  const gridClass =
    group.projects.length > 1 ? "portfolio-card-grid" : "website-card-grid";

  return (
    <div>
      <h3
        style={{
          margin: "0",
          fontFamily: "var(--font-display)",
          fontWeight: "800",
          fontSize: "clamp(24px,3vw,30px)",
          lineHeight: "1.15",
          letterSpacing: "-0.02em",
        }}
      >
        {group.title}
      </h3>
      <p style={{ margin: "6px 0 18px", color: "#44506A" }}>{group.subtitle}</p>
      <div className={gridClass}>
        {group.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="proj"
      style={{
        background: "#FFFFFF",
        border: "1px solid #D2DAEA",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ background: "#DEE1E6", borderBottom: "1px solid #D3D6DE" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "14px", padding: "10px 14px 0" }}>
          <div style={{ display: "flex", gap: "7px", paddingBottom: "12px" }}>
            <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
            <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FEBC2E" }} />
            <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840" }} />
          </div>
          <div
            style={{
              background: "#F7F7F9",
              borderRadius: "9px 9px 0 0",
              padding: "8px 14px",
              fontSize: "13px",
              color: "#2B3345",
              maxWidth: "210px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {project.category}
          </div>
        </div>
        <div
          style={{
            background: "#F7F7F9",
            padding: "8px 12px",
            color: "#4A5268",
            fontSize: "13px",
          }}
        >
          {project.domain}
        </div>
      </div>

      <div
        style={{
          background: project.banner,
          color: "#FFFFFF",
          minHeight: "162px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <h4 style={{ margin: "0", fontSize: "30px", lineHeight: "1", letterSpacing: "-0.03em" }}>
          {project.title}
        </h4>
        <p style={{ margin: "12px 0 18px", fontSize: "14px", opacity: 0.9 }}>
          {project.subtitle}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
          background: project.accent,
          color: project.accent === "#FFFFFF" ? project.banner : "#0E1A30",
            padding: "13px 20px",
            borderRadius: "999px",
            fontWeight: "700",
            fontSize: "15px",
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
          }}
        >
          Open website <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div
        style={{
          flex: "1",
          padding: "26px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4
          style={{
            margin: "0",
            fontFamily: "var(--font-display)",
            fontWeight: "800",
            fontSize: "22px",
            letterSpacing: "-0.015em",
          }}
        >
          {project.category}
        </h4>
        <p style={{ margin: "14px 0 18px", color: "#44506A", lineHeight: "1.55" }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "#EEF1F8",
                color: "#33405C",
                fontSize: "13px",
                padding: "5px 10px",
                borderRadius: "999px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-link"
          style={{
            marginTop: "auto",
            color: "#2447F5",
            fontWeight: "700",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          Visit website
        </a>
      </div>
    </article>
  );
}
