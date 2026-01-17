"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface InquiryFormProps {
    subject?: string;
    onSuccess?: () => void;
}

export default function InquiryForm({ subject, onSuccess }: InquiryFormProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: subject || "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            if (onSuccess) {
                setTimeout(onSuccess, 2000);
            }
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="bg-green-100 p-4 rounded-full mb-6">
                    <CheckCircle2 size={48} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
                <p className="text-dark/70 max-w-sm">
                    Your enquiry has been sent successfully. We will get back to you as soon as possible.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-dark/60 ml-1">
                        Your Name
                    </label>
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-dark/60 ml-1">
                        Email Address
                    </label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-dark/60 ml-1">
                        Phone (Optional)
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                        placeholder="+1 234 567 890"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-dark/60 ml-1">
                        Subject
                    </label>
                    <input
                        required
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                        placeholder="Tour Question"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-dark/60 ml-1">
                    Your Message
                </label>
                <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                ></textarea>
            </div>

            <button
                disabled={status === "loading"}
                type="submit"
                className="w-full bg-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
            >
                {status === "loading" ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <>
                        <Send size={20} />
                        <span>SEND ENQUIRY</span>
                    </>
                )}
            </button>

            {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg animate-in fade-in">
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">Something went wrong. Please try again.</span>
                </div>
            )}
        </form>
    );
}
