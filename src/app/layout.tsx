import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://librachat.ai"),
  title: {
    default: "Librachat — ИИ-ассистент нового поколения",
    template: "%s | Librachat",
  },
  description:
    "Librachat — мощный ИИ-ассистент для работы, обучения и творчества. Попробуйте бесплатно.",
  keywords: ["ИИ", "AI", "чат-бот", "ассистент", "нейросеть", "Librachat"],
  authors: [{ name: "Librachat" }],
  creator: "Librachat",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://librachat.ai",
    siteName: "Librachat",
    title: "Librachat — ИИ-ассистент нового поколения",
    description: "Мощный ИИ-ассистент для работы, обучения и творчества.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Librachat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Librachat — ИИ-ассистент нового поколения",
    description: "Мощный ИИ-ассистент для работы, обучения и творчества.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          (function(){
            try {
              var params = new URLSearchParams(window.location.search);
              var theme = params.get('theme');
              if (theme === 'gold') {
                var r = document.documentElement;
                r.style.setProperty('--t-bg-base','#080808');
                r.style.setProperty('--t-bg-surface','#0f0f0f');
                r.style.setProperty('--t-bg-card','#191919');
                r.style.setProperty('--t-bg-card-pop','#201c10');
                r.style.setProperty('--t-brand','#c9a227');
                r.style.setProperty('--t-brand-light','#e8c84a');
                r.style.setProperty('--t-brand-hover','#d4a82e');
                r.style.setProperty('--t-brand-glow','rgba(201,162,39,0.25)');
                r.style.setProperty('--t-brand-orb','rgba(201,162,39,0.1)');
                r.style.setProperty('--t-border','rgba(255,255,255,0.07)');
                r.style.setProperty('--t-border-pop','rgba(201,162,39,0.22)');
                r.style.setProperty('--t-btn-text','#000000');
                r.style.setProperty('--t-gradient','linear-gradient(135deg,#e8c84a,#c9a227)');
                r.style.setProperty('--t-dot','#c9a227');
                r.style.setProperty('--t-dot-glow','rgba(201,162,39,0.6)');
              }
            } catch(e) {}
          })();
        `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@700;800&display=swap" />
        <style dangerouslySetInnerHTML={{__html: `
          .mobile-burger-btn { display: none !important; }
          .desktop-nav { display: flex; }
          .desktop-nav-right { display: flex; }
          @media (max-width: 768px) {
            .mobile-burger-btn { display: flex !important; }
            .desktop-nav { display: none !important; }
            .desktop-nav-right { display: none !important; }
          }
        `}} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
