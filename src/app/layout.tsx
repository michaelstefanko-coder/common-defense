import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Common Defense",
  description: "A platform for organized, nonviolent resistance to the capture of American democracy.",
  openGraph: {
    title: "Common Defense",
    description: "Provide for the common defence. A platform for organized, nonviolent resistance.",
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
          <NavBar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
