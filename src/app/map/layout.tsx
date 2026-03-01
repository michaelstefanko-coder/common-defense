import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Infrastructure Map — Common Defense",
  description: "Interactive map of North American cargo infrastructure and economic leverage points.",
};

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
