"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  label: string;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, label, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/85 z-[200] flex items-center justify-center p-10 max-md:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-dark border border-border max-w-[600px] w-full max-h-[80vh] overflow-y-auto p-10 max-md:p-6 relative">
        <button
          className="absolute top-4 right-5 bg-transparent border-none text-muted text-[24px] hover:text-white z-10"
          onClick={onClose}
          aria-label="Close dialog"
        >
          &times;
        </button>
        <div className="font-mono text-[10px] tracking-[4px] uppercase text-red mb-3">
          {"// "}{label}
        </div>
        <h2 id="modal-title" className="font-heading text-[24px] text-white font-bold my-3 mb-5 uppercase">
          {title}
        </h2>
        <div className="text-light leading-[1.8] space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
