import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Software Engineer",
  description:
    "Personal portfolio showcasing my work, experience, and skills as a software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
