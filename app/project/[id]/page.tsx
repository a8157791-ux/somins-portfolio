import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectById, getLatestProjects } from "@/data/index";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

type ImageItem =
  | { type: "single"; files: [string] }
  | { type: "pair"; files: [string, string] };

function groupImages(images: string[]): ImageItem[] {
  const result: ImageItem[] = [];
  const used = new Set<string>();
  for (const file of images) {
    if (used.has(file)) continue;
    const match = file.match(/^(.+?)a(\.\w+)$/);
    if (match) {
      const pairB = `${match[1]}b${match[2]}`;
      if (images.includes(pairB)) {
        result.push({ type: "pair", files: [file, pairB] });
        used.add(file);
        used.add(pairB);
        continue;
      }
    }
    result.push({ type: "single", files: [file] });
    used.add(file);
  }
  return result;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Not Found" };
  return { title: `${project.title} — design.somin` };
}

export default async function DetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const related = getLatestProjects(id, 3);
  const imageBase = `project/${project.imageFolder ?? project.id}`;

  return (
    <main>
      {/* ── Heading ── */}
      <section className="detail-heading">
        <div className="detail-heading__title-wrap">
          <h1 className="detail-heading__title" dangerouslySetInnerHTML={{ __html: project.title }}/>
        </div>
        <div className="detail-heading__right">
          <div className="detail-heading__desc-wrap">
            <p className="detail-heading__subtitle">{project.subtitle}</p>
            <p className="detail-heading__desc">{project.description}</p>
          </div>
          <div className="detail-info">
            {project.info.map((item: { label: string; value: string }) => (
              <div key={item.label} className="detail-info__item">
                <span className="detail-info__label">{item.label}</span>
                <span className="detail-info__value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contents ── */}
      <div className="detail-contents">

        {/* Cover 이미지 */}
        {project.cover && (
          <div className="detail-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${imageBase}/${project.cover}`}
              alt={project.title}
              style={{ width: "100%", display: "block" }}
            />
          </div>
        )}

        {/* Visual Concept */}
        {(project.conceptTitle || project.conceptText) && (
          <div className="detail-concept">
            <p className="detail-concept__title">{project.conceptTitle ?? "Visual Concept"}</p>
            <div className="detail-concept__text">
              <p>{project.conceptText}</p>
            </div>
          </div>
        )}

        {/* 본문 이미지 그룹 */}
        {project.images && project.images.length > 0 && (
          <div className={`detail-image-group${(project as any).imageGap !== false ? " has-gap" : ""}`}>
            {groupImages(project.images).map((item: ImageItem, idx: number) =>
              item.type === "pair" ? (
                <div key={idx} className="detail-image-row">
                  {item.files.map((f: string) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={f} src={`/images/${imageBase}/${f}`} alt="" style={{ width: "100%", display: "block" }} />
                  ))}
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={idx} src={`/images/${imageBase}/${item.files[0]}`} alt="" style={{ width: "100%", display: "block" }} />
              )
            )}
          </div>
        )}
      </div>

      {/* ── Related Works ── */}
      {related.length > 0 && (
        <section className="related-works">
          <h2 className="related-works__title">Related Works</h2>
          <div className="related-works__grid">
            {related.map((p: { id: string; title: string; category: string; thumbnail?: string }) => (
              <Link key={p.id} href={`/project/${p.id}`} className="related-card">
                <div className="related-card__image">
                  {p.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.thumbnail} alt={p.title} />
                  ) : (
                    <div className="img-placeholder">No Image</div>
                  )}
                </div>
                <div className="related-card__info">
                  <p className="related-card__title">{p.title}</p>
                  <p className="related-card__category">{p.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
