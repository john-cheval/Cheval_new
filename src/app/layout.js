import { Sora } from "next/font/google";
import "./globals.css";
import ServerNavbar from "@/components/Shared/ServerNavbar";
import ServerFooter from "@/components/Shared/Footer/ServerFooter";
import SideBar from "@/components/Shared/SideBar";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const metadata = {
  title: "Cheval App",
  description: "Web Design Agency in Dubai",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="notranslate"
      translate="no"
    >
      <body
        className={`${sora.variable} flex flex-col min-h-screen antialiased`}
      >
        <ServerNavbar />

        <main className="flex-grow-1">
          {" "}
          {/* <ScrollToTop /> */}
          {children}
          <SideBar />
        </main>
        <ServerFooter />
      </body>
    </html>
  );
}
