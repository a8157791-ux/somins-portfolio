# 📁 이미지 폴더 구조 & 파일명 규칙

## 폴더 구조

```
public/
└── images/
    ├── ui/                          # 사이트 UI 에셋
    │   ├── logo.svg                 # 로고 심볼
    │   └── logo-text.svg            # "design.somin" 텍스트 로고
    │
    ├── about/                       # About 페이지
    │   └── about-photo.jpg          # 프로필 사진
    │
    └── project/                     # 프로젝트별 폴더
        └── {slug}/                  # slug = URL 경로명 (예: lotte-sale)
            ├── thumbnail.jpg        # 홈 목록 썸네일 (4:3 비율 권장)
            ├── cover-01.jpg         # 상세 페이지 상단 커버 이미지 (6장: 01~06)
            ├── cover-02.jpg
            ├── cover-03.jpg
            ├── cover-04.jpg
            ├── cover-05.jpg
            ├── cover-06.jpg
            ├── img-01-01.jpg        # 이미지 그룹 01, 첫번째 (그룹-순번)
            ├── img-01-02.jpg
            ├── img-01-03.jpg
            ├── img-01-04.jpg
            ├── img-01-05.jpg
            ├── img-01-06.jpg
            ├── img-02-01.jpg        # 이미지 그룹 02
            └── ...
```

## 파일명 규칙

**소문자 + 대시(-) 사용** (언더바 X)

| 용도 | 규칙 | 예시 |
|------|------|------|
| 썸네일 | `thumbnail.jpg` | `thumbnail.jpg` |
| 커버 이미지 | `cover-{번호2자리}.jpg` | `cover-01.jpg` |
| 본문 이미지 | `img-{그룹2자리}-{순번2자리}.jpg` | `img-01-03.jpg` |
| UI 에셋 | `{이름}.svg` | `logo.svg`, `arrow-top.svg` |
| About 사진 | `about-photo.jpg` | - |

## 이미지 스펙 권장사항

| 용도 | 비율 | 최소 해상도 | 형식 |
|------|------|-------------|------|
| 홈 썸네일 | 4:3 | 800×600 | JPG |
| 커버 (상단 히어로) | 1:1 | 700×700 | JPG |
| 본문 이미지 그룹 | 1:1 | 700×700 | JPG |
| About 프로필 | 3:4 | 600×800 | JPG |
| 로고 | — | — | SVG |

## 현재 프로젝트 슬러그

- `lotte-sale` → `/project/lotte-sale`
  - 폴더: `public/images/project/lotte-sale/`

## 새 프로젝트 추가 방법

1. `public/images/project/{새-슬러그}/` 폴더 생성
2. 위 규칙대로 이미지 업로드
3. `lib/projects.ts`에 프로젝트 데이터 추가
