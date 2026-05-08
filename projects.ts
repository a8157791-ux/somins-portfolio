export type ProjectInfo = {
  label: string;
  value: string;
};

export type ImageGroup = {
  id: string;
  images: string[]; // 3-column grid: [col1, col2, col3] repeated per row
};

export type Project = {
  slug: string;
  title: string;
  titleKo: string;
  descriptionKo: string;
  category: string;
  thumbnail: string; // /images/project/{slug}/thumbnail.jpg
  info: ProjectInfo[];
  coverImages: string[]; // first hero image group (6 images = 2 rows × 3 cols)
  visualConcept: {
    heading: string;
    body: string;
  };
  imageGroups: ImageGroup[];
  related: string[]; // slugs
};

export const projects: Project[] = [
  {
    slug: "lotte-sale",
    title: "Lotte Duty Free Online Sale Promotion",
    titleKo: "지금 가장 큰 혜택, 면세일에서 한 번에",
    descriptionKo:
      "롯데면세점 면세일은 다양한 브랜드와 카테고리의 할인 혜택을 한눈에 전달하는 온라인 메인 세일 행사로, 핵심 할인 정보와 참여 요소를 전면에 배치해 즉각적인 주목도를 높이고, 카테고리별 제품과 이벤트를 구조적으로 연결해 구매로 이어지는 흐름을 강화했습니다. 또한 반복되는 레이아웃 구조 안에서 강조 컬러와 그래픽 요소를 활용해 프로모션의 집중도를 높였습니다.",
    category: "Brand Identity",
    thumbnail: "/images/project/lotte-sale/thumbnail.jpg",
    info: [
      { label: "Client", value: "Lotte Duty Free" },
      { label: "Type", value: "Digital Campaign Design" },
      { label: "Date", value: "2025" },
    ],
    coverImages: [
      "/images/project/lotte-sale/cover-01.jpg",
      "/images/project/lotte-sale/cover-02.jpg",
      "/images/project/lotte-sale/cover-03.jpg",
      "/images/project/lotte-sale/cover-04.jpg",
      "/images/project/lotte-sale/cover-05.jpg",
      "/images/project/lotte-sale/cover-06.jpg",
    ],
    visualConcept: {
      heading: "Visual Concept",
      body: "The project visually structures the fundamental learning process of pastry techniques. A typography-driven layout and color contrast clearly define information hierarchy and content density, while a consistent typographic system establishes a refined brand tone.",
    },
    imageGroups: [
      {
        id: "group-01",
        images: [
          "/images/project/lotte-sale/img-01-01.jpg",
          "/images/project/lotte-sale/img-01-02.jpg",
          "/images/project/lotte-sale/img-01-03.jpg",
          "/images/project/lotte-sale/img-01-04.jpg",
          "/images/project/lotte-sale/img-01-05.jpg",
          "/images/project/lotte-sale/img-01-06.jpg",
        ],
      },
      {
        id: "group-02",
        images: [
          "/images/project/lotte-sale/img-02-01.jpg",
          "/images/project/lotte-sale/img-02-02.jpg",
          "/images/project/lotte-sale/img-02-03.jpg",
          "/images/project/lotte-sale/img-02-04.jpg",
          "/images/project/lotte-sale/img-02-05.jpg",
          "/images/project/lotte-sale/img-02-06.jpg",
        ],
      },
    ],
    related: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
