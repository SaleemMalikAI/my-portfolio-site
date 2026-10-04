import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ChatWidget } from "@/components/chat-widget";
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
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to verify the site in Google Search Console
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
};

// Runs before paint: saved choice, otherwise the system setting. Avoids a flash of the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");}catch(e){}if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.dataset.theme=t;})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        {/* Turn on once AI Gateway is set up on Vercel (see README) */}
        {process.env.NEXT_PUBLIC_ASSISTANT_ENABLED === "true" && <ChatWidget />}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
