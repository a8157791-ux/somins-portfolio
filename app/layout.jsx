import "./globals.css";

export const metadata = {
  title: "design.somin — Portfolio",
  description: "A visual designer with 8+ years of experience working across branding, editorial and digital design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
