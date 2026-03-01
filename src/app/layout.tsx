import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Common Defense — Strategic Infrastructure & Economic Leverage",
  description: "Provide for the common defence. Strategic infrastructure mapping, organized resistance, and civic defense of American democracy.",
  openGraph: {
    title: "Common Defense",
    description: "Provide for the common defence. Strategic infrastructure mapping and organized civic resistance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientProviders>
          {/* CRT grain + scanline overlays */}
          <div className="grain-overlay" aria-hidden="true" />
          <div className="scanlines" aria-hidden="true" />

          <NavBar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
