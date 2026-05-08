/**
 * 📋 프로젝트 자동 수집 파일
 * ─────────────────────────────────────────
 * 새 프로젝트를 추가할 때:
 * 1. data/projects/ 폴더에 새 .js 파일 만들기
 * 2. 아래 import 한 줄 추가하기
 * 그러면 메인 목록에 자동으로 나타납니다!
 * ─────────────────────────────────────────
 */

import lotteSale from "./projects/lotte-sale";
// import parisParalympics from "./projects/paris-paralympics";  ← 다음 프로젝트 추가 예시
// import walkerhill from "./projects/walkerhill";

const allProjects = [
  lotteSale,
  // parisParalympics,
  // walkerhill,
];

// order 값 기준으로 정렬
export const projects = allProjects.sort((a, b) => a.order - b.order);

// id로 특정 프로젝트 찾기
export function getProjectById(id) {
  return projects.find((p) => p.id === id) || null;
}

// 관련 프로젝트 3개 가져오기 (현재 프로젝트 제외)
export function getRelatedProjects(currentId, count = 3) {
  const others = projects.filter((p) => p.id !== currentId);
  return others.slice(0, count);
}
