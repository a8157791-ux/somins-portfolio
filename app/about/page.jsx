import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="page-container">
      <Header />
      <main>
        {/* ── 인트로 헤딩 ── */}
        <section className="about-heading">
          <p className="about-heading__text">
            A visual designer with 8+ years of experience working across branding, editorial and digital design,{" "}
            I build clear and consistent visual systems.
          </p>
        </section>

        {/* ── 자기소개 + 프로필 이미지 ── */}
        <section className="about-intro">
          <div>
            <p className="about-intro__bio">
              With experience at a design agency, I have worked across branding and graphic design
              with a foundation in editorial design. I have worked on projects across various fields,
              including beauty, fashion, food, and mobile.
              <br /><br />
              Working across branding, editorial, and digital design,
              I approach each project by considering its context,
              environment, and how it communicates. I see design not simply as a final outcome,
              but as a process of connecting ideas and structure to shape a cohesive experience.
              <br /><br />
              From maintaining and expanding brand identity systems to designing magazines, books,
              educational materials, and digital content, I have focused on building consistent
              visual languages across a wide range of media.
            </p>
            <div className="about-intro__contacts">
              <div className="about-intro__contact-item">
                <span className="about-intro__contact-label">Email</span>
                <span className="about-intro__contact-value">design.somin@gmail.com</span>
              </div>
              <div className="about-intro__contact-item">
                <span className="about-intro__contact-label">Phone</span>
                <span className="about-intro__contact-value">(82) 10-5945-7667</span>
              </div>
              <div className="about-intro__contact-item">
                <span className="about-intro__contact-label">Location</span>
                <span className="about-intro__contact-value">Los Angeles</span>
              </div>
            </div>
          </div>
          <div className="about-intro__image">
            {/* 프로필 사진: /public/images/about-photo.jpg 로 교체하세요 */}
            <div className="img-placeholder" style={{ height: "100%", minHeight: "400px" }}>
              about-photo.jpg
            </div>
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
      <Footer />
    </div>
  );
}
