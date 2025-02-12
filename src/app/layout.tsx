import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/shared/Topbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ryven",
  description: "This is description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} w-full overflow-w-hidden min-h-screen bg-background text-foreground antialiased`}
      >
        <header>
          <Topbar />
        </header>
        {children}
      </body>
    </html>
  );
}
