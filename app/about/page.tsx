

const experience = [
  { title: "UX/UI Designer, Musign", year: "2024 – 2025" },
  { title: "Freelancer, Mute Studio", year: "2024" },
  { title: "Editorial Designer, Publisher", year: "2017 – 2022" },
  { title: "Graphic Designer, Anyzac", year: "2015 – 2017" },
];

const selectedProjects = [
  { title: "Lotte Duty Free", sub: "Overall design direction (digital & offline)", year: "2024 – 2025" },
  { title: "Walkerhill Hotels & Resorts", sub: "Brand design direction and visual system maintenance", year: "2024" },
  { title: "2024 Paris Paralympics", sub: "Media book, photo book, and festival visual design", year: "2024" },
  { title: "iljumsa Studio", sub: "Editorial design training program completion", year: "2022 – 2023" },
  { title: "Bellboy Luke", sub: "Concept design and visual development", year: "2017" },
  { title: "Zombie Dumb Season 1", sub: "Character design, 2D graphic asset development", year: "2015 – 2016" },
];

export const metadata = {
  title: "About — design.somin",
};

export default function AboutPage() {
  return (
    <main>
      {/* ── Super Heading ── */}
      <section className="about-heading">
        <p className="about-heading__text">
          {"A visual designer with 8+ years of experience working across branding, editorial and digital design,\nI build clear and consistent visual systems."}
        </p>
      </section>

      {/* ── Intro: bio 좌 + photo 우 ── */}
      <section className="about-intro">
        {/* 좌: bio + 연락처 */}
        <div className="about-intro__left">
          <p className="about-intro__bio">
            {"With experience at a design agency,\nI have worked across branding and graphic design\nwith a foundation in editorial design.\nI have worked on projects across various fields,\nincluding beauty, fashion, food, and mobile.\n\nWorking across branding, editorial, and digital design,\nI approach each project by considering its context,\nenvironment, and how it communicates.\nI see design not simply as a final outcome,\nbut as a process of connecting ideas and structure\nto shape a cohesive experience.\n\nFrom maintaining and expanding brand identity systems\nto designing magazines, books, educational materials,\nand digital content, I have focused on building consistent\nvisual languages across a wide range of media.\nI am interested in how small elements come together\nto form a cohesive whole, and I value creating clear\nand organized visual structures even within\ncomplex contexts."}
          </p>
          <div className="about-intro__contacts">
            {[
              { label: "Email", value: "design.somin@gmail.com" },
              { label: "Phone", value: "(82) 10-5945-7667" },
              { label: "Location", value: "Los Angeles" },
            ].map((item) => (
              <div key={item.label} className="about-intro__contact-item">
                <span className="about-intro__contact-label">{item.label}</span>
                <span className="about-intro__contact-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 우: 프로필 이미지 */}
        <div className="about-intro__image">
          <picture>
            <source
              media="(max-width: 1070px)"
              srcSet="/images/about/about-somin.jpg"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/about-somin.jpg"
              srcSet="/images/about/about-somin.jpg 1x, /images/about/about-somin@2x.jpg 2x"
              alt="Somin Chung"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
          </picture>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="about-section">
        <div className="about-section__inner">
          <div className="about-section__label">Experience...</div>
          <div className="about-section__list">
            {experience.map((item) => (
              <div key={item.title} className="about-section__item">
                <div className="about-section__item-text">
                  <p className="about-section__item-title">{item.title}</p>
                </div>
                <p className="about-section__item-year">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Projects ── */}
      <section className="about-section" style={{ marginBottom: "80px" }}>
        <div className="about-section__inner">
          <div className="about-section__label">Selected Projects...</div>
          <div className="about-section__list">
            {selectedProjects.map((item) => (
              <div key={item.title} className="about-section__item">
                <div className="about-section__item-text">
                  <p className="about-section__item-title">{item.title}</p>
                  {item.sub && (
                    <p className="about-section__item-sub">{item.sub}</p>
                  )}
                </div>
                <p className="about-section__item-year">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
