# 🎨 design.somin 포트폴리오 사이트

## 📖 새 프로젝트 추가하는 법 (코딩 몰라도 OK!)

### Step 1. 이미지 폴더 만들기

`public/images/` 폴더 안에 새 폴더를 만드세요.
폴더 이름은 **영문 소문자 + 하이픈**만 사용하세요.

예시:
```
public/images/my-new-project/
  thumb.jpg   ← 메인 목록 썸네일
  01.jpg
  02.jpg
  03.jpg
```

### Step 2. 프로젝트 데이터 파일 만들기

`data/projects/lotte-sale.js` 파일을 복사해서 새 이름으로 저장 후 내용 수정

### Step 3. index.js에 등록하기

`data/index.js` 파일에 import 한 줄 + 배열에 추가 한 줄

### Step 4. GitHub push → 자동 배포 완료!

## 이미지 규칙
- thumb.jpg: 800×600px (썸네일)
- 상세 이미지: 1600×1000px 권장
- 형식: jpg, png, webp 모두 가능
