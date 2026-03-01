"use client";

import { ReactNode } from "react";
import { ToastProvider } from "./Toast";
import BackToTop from "./BackToTop";
import ScrollProgress from "./ScrollProgress";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      {children}
      <ScrollProgress />
      <BackToTop />
    </ToastProvider>
  );
}
