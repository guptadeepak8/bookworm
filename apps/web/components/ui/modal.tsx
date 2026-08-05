"use client";

import {
  ReactNode,
  useEffect,
} from "react";

import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;

  onClose(): void;

  title: string;

  description?: string;

  children: ReactNode;

  width?: string;
}

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  width = "max-w-xl",
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`relative w-full ${width} overflow-hidden rounded-[32px] border border-border bg-surface shadow-lg animate-in fade-in zoom-in-95 duration-200`}
      >
        <header className="flex items-start justify-between border-b border-border px-8 py-6">
          <div>
            <h2
              id="modal-title"
              className="text-2xl font-bold"
            >
              {title}
            </h2>

            {description && (
              <p className="mt-2 text-sm text-muted">
                {description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-xl transition hover:bg-background"
          >
            <X size={18} />
          </button>
        </header>

        <div className="p-8">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}