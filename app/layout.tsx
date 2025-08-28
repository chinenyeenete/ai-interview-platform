import type { Metadata } from "next";

//Customize font
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intraview",
  description: "An AI-powered interview prep platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // dark-mode is just better for your eyes...
    <html lang="en" className="dark">
      <body
      //customizes website font
      //probably customize this
        className={`${monaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
