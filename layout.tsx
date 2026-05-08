import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "design.somin — Portfolio",
  description:
    "A visual designer with 8+ years of experience working across branding, editorial and digital design.",
  openGraph: {
    title: "design.somin — Portfolio",
    description:
      "A visual designer with 8+ years of experience working across branding, editorial and digital design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
