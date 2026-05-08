import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getAllProjects } from "@/lib/projects";

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — design.somin`,
    description: project.descriptionKo,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const relatedProjects = project.related
    .map((s) => getProject(s))
    .filter(Boolean);

  return (
    <article>
      {/* ── Heading ── */}
      <section
        style={{
          padding:
            "clamp(40px,6vw,80px) var(--container-px) clamp(40px,5vw,60px)",
          maxWidth: "calc(var(--max-w) + var(--container-px) * 2)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(24px, 4vw, 48px)",
          }}
        >
          {/* Title row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "clamp(20px, 3vw, 25px)",
            }}
            className="detail-heading-grid"
          >
            {/* Left: title */}
            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(22px, 4vw, 34px)",
                lineHeight: 1.3,
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </h1>

            {/* Right: subtitle + description + info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(20px, 3vw, 40px)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "clamp(16px, 2.5vw, 22px)",
                    lineHeight: 1.4,
                    color: "var(--color-text)",
                  }}
                >
                  {project.titleKo}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: "clamp(14px, 1.8vw, 17px)",
                    lineHeight: 1.6,
                    color: "var(--color-text)",
                  }}
                >
                  {project.descriptionKo}
                </p>
              </div>

              {/* Info tags */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 15,
                }}
              >
                {project.info.map((item) => (
                  <div
                    key={item.label}
                    style={{ display: "flex", flexDirection: "column", gap: 10 }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        textTransform: "capitalize",
                        color: "var(--color-text-muted)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 500,
                        fontSize: "clamp(14px, 1.6vw, 16px)",
                        color: "var(--color-text)",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cover image grid (2 rows × 3 cols) ── */}
      <section
        style={{
          maxWidth: "calc(var(--max-w) + var(--container-px) * 2)",
          margin: "0 auto",
          padding: "0 var(--container-px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 4,
            background: "#18181b",
          }}
        >
          {project.coverImages.map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                overflow: "hidden",
              }}
              className="cover-img-wrap"
            >
              <Image
                src={src}
                alt={`${project.title} cover ${i + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, (max-width: 1070px) 33vw, 20vw"
                style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                className="cover-img"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Visual Concept text ── */}
      <section
        style={{
          padding:
            "clamp(60px, 8vw, 150px) var(--container-px) clamp(40px, 5vw, 100px)",
          maxWidth: "calc(var(--max-w) + var(--container-px) * 2)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(16px, 2vw, 25px)",
          }}
          className="concept-grid"
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "var(--color-text)",
              lineHeight: 1.4,
            }}
          >
            {project.visualConcept.heading}
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "clamp(14px, 1.8vw, 17px)",
              lineHeight: 1.6,
              color: "var(--color-text)",
            }}
          >
            {project.visualConcept.body}
          </p>
        </div>
      </section>

      {/* ── Image groups ── */}
      <section
        style={{
          maxWidth: "calc(var(--max-w) + var(--container-px) * 2)",
          margin: "0 auto",
          padding: "0 var(--container-px)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {project.imageGroups.map((group) => (
          <ImageGroup key={group.id} group={group} title={project.title} />
        ))}
      </section>

      {/* ── Related Works ── */}
      {relatedProjects.length > 0 && (
        <section
          style={{
            padding:
              "clamp(60px,8vw,150px) var(--container-px) clamp(60px,8vw,100px)",
            maxWidth: "calc(var(--max-w) + var(--container-px) * 2)",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(20px, 3vw, 29px)",
              letterSpacing: "-0.035em",
              color: "var(--color-text)",
              marginBottom: "clamp(32px, 4vw, 50px)",
            }}
          >
            Related Works
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,280px),1fr))",
              gap: "clamp(24px,3vw,25px)",
            }}
          >
            {relatedProjects.map((p) => p && (
              <Link
                key={p.slug}
                href={`/project/${p.slug}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 15,
                }}
                className="related-card"
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    background: "#f0f0f0",
                  }}
                >
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                    className="related-card-img"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: "clamp(14px,1.8vw,17px)",
                      color: "var(--color-text)",
                      letterSpacing: "-0.012em",
                      lineHeight: 1.4,
                    }}
                  >
                    {p.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(12px,1.5vw,14px)",
                      color: "var(--color-text-sub)",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <style>{`
            .related-card:hover .related-card-img { transform: scale(1.04); }
            .cover-img-wrap:hover .cover-img { transform: scale(1.03); }
          `}</style>
        </section>
      )}

      {/* Responsive heading grid */}
      <style>{`
        @media (min-width: 1070px) {
          .detail-heading-grid {
            grid-template-columns: 1fr 1fr !important;
            align-items: start;
          }
          .concept-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </article>
  );
}

function ImageGroup({
  group,
  title,
}: {
  group: { id: string; images: string[] };
  title: string;
}) {
  // Split into rows of 3
  const rows: string[][] = [];
  for (let i = 0; i < group.images.length; i += 3) {
    rows.push(group.images.slice(i, i + 3));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {rows.map((row, ri) => (
        <div
          key={ri}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 4,
          }}
        >
          {row.map((src, ci) => (
            <div
              key={ci}
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                background: "#f0f0f0",
              }}
              className="cover-img-wrap"
            >
              <Image
                src={src}
                alt={`${title} image`}
                fill
                sizes="(max-width: 768px) 33vw, (max-width: 1070px) 33vw, 20vw"
                style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                className="cover-img"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
