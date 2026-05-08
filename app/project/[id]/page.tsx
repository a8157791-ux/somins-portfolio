import { notFound } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import { getProjectById, getRelatedProjects } from "@/data/index";

export async function generateMetadata({ params }) {
  const project = getProjectById(params.id);
  if (!project) return { title: "Not Found" };
  return { title: `${project.title} — design.somin` };
}

export default function DetailPage({ params }) {
  const project = getProjectById(params.id);
  if (!project) notFound();

  const related = getRelatedProjects(params.id, 3);
  const imageBase = project.imageFolder ?? project.id;

  return (
    <div className="page-container">
      <main>
        {/* ── 헤딩 영역 ── */}
        <section className="detail-heading">
          <h1 className="detail-heading__title">{project.title}</h1>
          <div className="detail-heading__right">
            <div>
              <p className="detail-heading__subtitle">{project.subtitle}</p>
              <p className="detail-heading__desc" style={{ marginTop: "16px" }}>
                {project.description}
              </p>
            </div>
            <div className="detail-info">
              {project.info.map((item) => (
                <div key={item.label} className="detail-info__item">
                  <span className="detail-info__label">{item.label}</span>
                  <span className="detail-info__value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 이미지 + 텍스트 영역 ── */}
        <section className="detail-content">
          {/* 첫 번째 이미지 그룹 */}
          {project.imageGroups.length > 0 && (
            <ImageGroup
              group={project.imageGroups[0]}
              projectId={imageBase}
            />
          )}

          {/* 본문 텍스트 */}
          {project.bodyText && (
            <div className="detail-textwrap">
              <p className="detail-textwrap__text">{project.bodyText}</p>
              <p className="detail-textwrap__text">{project.bodyText}</p>
            </div>
          )}

          {/* 나머지 이미지 그룹들 */}
          {project.imageGroups.slice(1).map((group, idx) => (
            <ImageGroup key={idx} group={group} projectId={imageBase} />
          ))}
        </section>

        {/* ── 관련 프로젝트 ── */}
        {related.length > 0 && (
          <section className="related-works">
            <h2 className="related-works__title">Related Works</h2>
            <div className="related-works__grid">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function ImageGroup({ group, projectId }) {
  return (
    <div className={`detail-image-group cols-${group.cols}`}>
      {group.images.map((filename, idx) => {
        const src = `/images/${projectId}/${filename}`;
        return (
          <div key={idx} style={{ overflow: "hidden", background: "#f0f0f0" }}>
            <img
              src={src}
              alt=""
              style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="img-placeholder"
              style={{ display: "none", aspectRatio: "16/10" }}
            >
              {filename}
            </div>
          </div>
        );
      })}
    </div>
  );
}
