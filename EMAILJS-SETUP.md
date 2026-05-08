# 📧 Contact 이메일 수신 설정 가이드 (EmailJS)

## 왜 EmailJS?
- 서버 없이 클라이언트에서 바로 이메일 발송
- 무료 플랜: 월 200건 (개인 포트폴리오에 충분)
- Gmail, Outlook 등 연결 가능

---

## 설정 순서

### 1. EmailJS 계정 생성
- https://www.emailjs.com 접속 → Sign Up (무료)

### 2. Email Service 연결
- Dashboard → Email Services → Add New Service
- Gmail 선택 → Google 계정 연동 (design.somin@gmail.com)
- Service ID 복사해두기 (예: `service_abc123`)

### 3. Email Template 생성
- Dashboard → Email Templates → Create New Template
- 아래 템플릿 사용:

```
Subject: [Portfolio] New message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

- Template ID 복사해두기 (예: `template_xyz789`)

### 4. Public Key 확인
- Dashboard → Account → General → Public Key 복사

### 5. 코드에 값 입력

`app/contact/page.tsx` 파일에서 상단 상수 수정:

```typescript
const EMAILJS_SERVICE_ID = "service_abc123";    // ← 본인 Service ID
const EMAILJS_TEMPLATE_ID = "template_xyz789";  // ← 본인 Template ID
const EMAILJS_PUBLIC_KEY = "your_public_key";   // ← 본인 Public Key
```

### 6. EmailJS 패키지 설치

```bash
npm install @emailjs/browser
```

---

## 주의사항
- Public Key는 클라이언트에 노출되어도 됨 (설계상 안전)
- 스팸 방지: EmailJS 대시보드에서 도메인 화이트리스트 설정 권장
- 월 200건 초과 시 유료 플랜 ($15/월) 또는 다른 방식 고려

## 대안: Resend + Server Action
서버 방식을 원하면 `Resend` + Next.js Server Action 조합도 가능 (월 3,000건 무료)
→ 요청시 해당 방식으로도 코드 작성 가능
