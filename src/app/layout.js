import { Plus_Jakarta_Sans, Figtree } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { LeadModalProvider } from "@/components/modal/LeadModalProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import ContactSidebar from "@/components/ContactSidebar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${siteConfig.name} | Digital Marketing Training Academy`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${figtree.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-bg text-text font-body flex flex-col selection:bg-accent selection:text-ink"
      >
        <LeadModalProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <ContactSidebar />
          <Footer />
          <StickyMobileCta />
        </LeadModalProvider>
      </body>
    </html>
  );
}
