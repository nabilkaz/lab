import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar, {
  NavigationItem,
  NavigationList,
} from "@/components/Navigation/Navigation";
import { SearchContainer } from "@/components/Search/Search";
import SearchInput from "@/components/Search/Search";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nabil Kazerouni • Product Designer",
  description: "Nabil Kazerouni is a product designer based in California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen p-8 pb-20 sm:p-20">
          <div className="max-w-[680px] mx-auto">
            <NavBar className="w-full mb-12 flex justify-between items-center">
              <NavigationList>
                <NavigationItem href="/">Home</NavigationItem>
                <NavigationItem href="/topics">Topics</NavigationItem>
                <NavigationItem href="/notes">Notes</NavigationItem>
                <NavigationItem href="/projects">Projects</NavigationItem>
                <NavigationItem href="/about">About</NavigationItem>
              </NavigationList>
              <SearchContainer>
                <SearchInput />
              </SearchContainer>
            </NavBar>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
