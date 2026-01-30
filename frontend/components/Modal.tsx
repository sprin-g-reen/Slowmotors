"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div
                ref={modalRef}
                className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-200"
                role="dialog"
                aria-modal="true"
            >
                <div className="sticky top-0 right-0 z-10 flex justify-between items-center p-4 bg-white border-b border-gray-100">
                    <h2 className="text-xl font-bold text-dark">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-dark hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
            {/* Click outside to close area */}
            <div
                className="fixed inset-0 -z-10"
                onClick={onClose}
                aria-hidden="true"
            />
        </div>,
        document.body
    );
}
