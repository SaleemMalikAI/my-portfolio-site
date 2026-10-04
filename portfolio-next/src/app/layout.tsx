import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} · ${profile.role}`;
const description =
  "AI Full Stack Engineer in Lahore building Next.js frontends, FastAPI services and LLM features (RAG, LangChain, multi-agent workflows).";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title,
  description,
  authors: [{ name: profile.name, url: profile.url }],
  keywords: [
    "Saleem Malik",
    "AI Full Stack Engineer",
    "Next.js developer",
    "FastAPI",
    "LangChain",
    "RAG",
    "Lahore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.url,
    title,
    description,
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
