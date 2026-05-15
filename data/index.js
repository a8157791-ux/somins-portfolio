/**
 * 📋 프로젝트 자동 수집 파일
 * ─────────────────────────────────────────
 * 새 프로젝트를 추가할 때:
 * 1. data/projects/ 폴더에 새 .js 파일 만들기
 * 2. 아래 import 한 줄 추가하기
 * 그러면 메인 목록에 자동으로 나타납니다!
 * ─────────────────────────────────────────
 */

import lotteDiscovery from "./projects/lotte-discovery";
import lotteDuty from "./projects/lotte-duty";
import lotteFashion from "./projects/lotte-fashion";
import lotteSeason from "./projects/lotte-season";
import lotteStar from "./projects/lotte-star";
 
const allProjects = [
  lotteDuty,
  lotteDiscovery,
  lotteFashion,
  lotteSeason,
  lotteStar,
];
 
export default allProjects;

// order 값 기준으로 정렬
export const projects = allProjects.sort((a, b) => a.order - b.order);

// id로 특정 프로젝트 찾기
export function getProjectById(id) {
  return projects.find((p) => p.id === id) || null;
}

// 최신 프로젝트 n개 가져오기 (현재 프로젝트 제외)
export function getLatestProjects(currentId, count = 3) {
  return projects.filter((p) => p.id !== currentId).slice(0, count);
}

// 관련 프로젝트 (하위 호환용)
export function getRelatedProjects(currentId, count = 3) {
  return getLatestProjects(currentId, count);
}
