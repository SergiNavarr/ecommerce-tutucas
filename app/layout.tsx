import type { Metadata } from "next";
import {Urbanist} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";


const urbanist = Urbanist({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Tutuca´s",
  description: "Welcome to Tutuca´s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
