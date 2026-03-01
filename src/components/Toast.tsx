"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastContextValue {
  addToast: (message: string, type?: Toast["type"]) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

let nextId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: Toast["type"] = "success") => {
    const id = nextId++;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[300] flex flex-col gap-3 max-md:bottom-4 max-md:right-4 max-md:left-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 px-5 py-3.5 border font-heading text-[13px] tracking-[1px] shadow-lg animate-[slideIn_0.3s_ease-out] ${
              toast.type === "success"
                ? "bg-green/10 border-green/30 text-green"
                : toast.type === "error"
                ? "bg-red/10 border-red/30 text-red"
                : "bg-blue/10 border-blue/30 text-blue"
            }`}
            style={{ backdropFilter: "blur(12px)" }}
          >
            <span>
              {toast.type === "success" ? "\u2713" : toast.type === "error" ? "\u2717" : "\u2139"}
            </span>
            <span className="flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="bg-transparent border-none text-current cursor-pointer opacity-60 hover:opacity-100 text-[16px]"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
