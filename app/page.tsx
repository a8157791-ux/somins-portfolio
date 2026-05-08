import Image from "next/image";

const experiences = [
  {
    company: "Freelance Designer",
    period: "2022 — Present",
    role: "Visual Designer",
    desc: "Branding, editorial, and digital design across various industries.",
  },
  {
    company: "Design Agency",
    period: "2019 — 2022",
    role: "Senior Designer",
    desc: "Led visual identity systems for beauty, fashion, and lifestyle brands.",
  },
  {
    company: "Studio",
    period: "2016 — 2019",
    role: "Graphic Designer",
    desc: "Editorial design, magazines, books, and educational materials.",
  },
  {
    company: "Internship",
    period: "2015 — 2016",
    role: "Design Intern",
    desc: "Digital content, social media, and mobile UI.",
  },
];

const selectedProjects = [
  { title: "Lotte Duty Free Online Sale Promotion", category: "Digital Campaign Design", year: "2025" },
  { title: "Lotte Dutyfree Star Avenue", category: "Brand Identity", year: "2024" },
  { title: "Beauty Brand Identity System", category: "Branding", year: "2024" },
  { title: "Architecture Magazine Layout", category: "Editorial Design", year: "2023" },
  { title: "Fashion Lookbook", category: "Editorial Design", year: "2023" },
  { title: "Mobile App UI Design", category: "Digital Design", year: "2022" },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Super heading ── */}
      <section
        style={{
          padding:
            "clamp(40px, 6vw, 80px) var(--container-px) clamp(32px, 4vw, 60px)",
          maxWidth: "calc(var(--max-w) + var(--container-px) * 2)",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(18px, 3vw, 28px)",
            lineHeight: 1.5,
            color: "var(--color-text)",
            maxWidth: 900,
          }}
        >
          A visual designer with 8+ years of experience working across
          branding, editorial and digital design, I build clear and consistent
          visual systems.
        </h1>
      </section>

      {/* ── Intro: bio + photo ── */}
      <section
        style={{
          padding: "0 var(--container-px) clamp(60px, 8vw, 120px)",
          maxWidth: "calc(var(--max-w) + var(--container-px) * 2)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(40px, 5vw, 80px)",
            alignItems: "start",
          }}
          className="about-intro-grid"
        >
          {/* Left: bio + contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,80px)" }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.8vw, 17px)",
                lineHeight: 1.7,
                color: "var(--color-text)",
              }}
            >
              With experience at a design agency, I have worked across branding
              and graphic design with a foundation in editorial design. I have
              worked on projects across various fields, including beauty,
              fashion, food, and mobile. Working across branding, editorial, and
              digital design, I approach each project by considering its
              context, environment, and how it communicates.
              <br />
              <br />
              I see design not simply as a final outcome, but as a process of
              connecting ideas and structure to shape a cohesive experience.
              From maintaining and expanding brand identity systems to designing
              magazines, books, educational materials, and digital content, I
              have focused on building consistent visual languages across a wide
              range of media.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Email", value: "design.somin@gmail.com" },
                { label: "Phone", value: "(82) 10-5945-7667" },
                { label: "Location", value: "Los Angeles" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 24,
                    alignItems: "baseline",
                    fontSize: "clamp(13px, 1.6vw, 16px)",
                    borderBottom: "1px solid var(--color-border)",
                    paddingBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-text-muted)",
                      fontSize: "clamp(11px, 1.3vw, 13px)",
                      minWidth: 80,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--color-text)",
                      fontWeight: 400,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo — about-somin.jpg */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3 / 4",
              overflow: "hidden",
              background: "#f0f0f0",
            }}
            className="about-photo-wrap"
          >
            <Image
              src="/images/about/about-somin.jpg"
              alt="Somin Chung"
              fill
              sizes="(max-width: 1070px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
        </div>

        <style>{`
          @media (min-width: 1070px) {
            .about-intro-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ── Experience ── */}
      <section
        style={{
          padding:
            "clamp(40px,5vw,80px) var(--container-px) clamp(40px,5vw,80px)",
          borderTop: "1px solid var(--color-border)",
          maxWidth: "calc(var(--max-w) + var(--container-px) * 2)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(24px,4vw,60px)",
          }}
          className="about-section-grid"
        >
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.8vw, 17px)",
              letterSpacing: "-0.02em",
              color: "var(--color-text-muted)",
            }}
          >
            Experience...
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 8,
                  padding: "clamp(20px,3vw,32px) 0",
                  borderBottom: "1px solid var(--color-border)",
                }}
                className="exp-row"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "clamp(14px, 1.8vw, 17px)",
                      color: "var(--color-text)",
                    }}
                  >
                    {exp.company}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(12px, 1.4vw, 14px)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1.6vw, 15px)",
                    color: "var(--color-text-sub)",
                  }}
                >
                  {exp.role} — {exp.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (min-width: 1070px) {
            .about-section-grid {
              grid-template-columns: 1fr 2fr !important;
              align-items: start;
            }
          }
        `}</style>
      </section>

      {/* ── Selected Projects ── */}
      <section
        style={{
          padding:
            "clamp(40px,5vw,80px) var(--container-px) clamp(60px,8vw,120px)",
          borderTop: "1px solid var(--color-border)",
          maxWidth: "calc(var(--max-w) + var(--container-px) * 2)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(24px,4vw,60px)",
          }}
          className="about-section-grid"
        >
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.8vw, 17px)",
              letterSpacing: "-0.02em",
              color: "var(--color-text-muted)",
            }}
          >
            Selected Projects...
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {selectedProjects.map((proj, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  padding: "clamp(16px,2.5vw,28px) 0",
                  borderBottom: "1px solid var(--color-border)",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: "clamp(13px,1.6vw,16px)",
                      color: "var(--color-text)",
                    }}
                  >
                    {proj.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(12px,1.4vw,14px)",
                      color: "var(--color-text-sub)",
                    }}
                  >
                    {proj.category}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(12px,1.4vw,14px)",
                    color: "var(--color-text-muted)",
                    flexShrink: 0,
                  }}
                >
                  {proj.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
