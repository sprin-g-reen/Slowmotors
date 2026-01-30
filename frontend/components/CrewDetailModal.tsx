"use client";
import Modal from "./Modal";

interface CrewMemberDetail {
    full_name: string;
    role: string;
    title: string;
    paragraphs: string[];
}

interface CrewDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    member?: CrewMemberDetail;
}

export default function CrewDetailModal({ isOpen, onClose, member }: CrewDetailModalProps) {
    if (!member) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={member.full_name}>
            <div className="space-y-6">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">
                        {member.title}
                    </h3>
                    <p className="text-secondary font-bold uppercase text-sm tracking-wider">
                        {member.role}
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed font-serif italic text-lg bg-primary/5 p-8 rounded-2xl border-l-4 border-primary shadow-sm space-y-4">
                    {member.paragraphs.map((p, index) => (
                        <p key={index}>{p}</p>
                    ))}
                </div>
            </div>
        </Modal>
    );
}
