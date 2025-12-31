"use client";

import { useState } from "react";

interface BulletPoint {
    id: string;
    text: string;
    tags: string[];
}

interface Experience {
    id: string;
    title: string;
    company: string;
    companyLogo: string;
    startDate: string;
    endDate: string | null;
    isCurrent: boolean;
    bullets: BulletPoint[];
}

export default function ExperienceCard({ experience, isOpen = false }: { experience: Experience; isOpen?: boolean }) {
    const [bullets, setBullets] = useState<BulletPoint[]>(experience.bullets);
    const [formData, setFormData] = useState(experience);

    const addBullet = () => {
        const newBullet: BulletPoint = {
            id: Date.now().toString(),
            text: "",
            tags: [],
        };
        setBullets([...bullets, newBullet]);
    };

    const deleteBullet = (id: string) => {
        setBullets(bullets.filter((b) => b.id !== id));
    };

    const updateBullet = (id: string, text: string) => {
        setBullets(bullets.map((b) => (b.id === id ? { ...b, text } : b)));
    };

    return (
        <details className="group bg-[#1c2b39] border border-[#324d67] rounded-xl overflow-hidden shadow-lg shadow-black/20 transition-all" open={isOpen}>
            <summary className="flex cursor-pointer items-center justify-between px-6 py-4 bg-[#233648]/50 hover:bg-[#233648] transition-colors select-none">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center overflow-hidden">
                        <img
                            className="w-full h-full object-contain"
                            src={formData.companyLogo}
                            alt={`${formData.company} Logo`}
                            onError={(e) => {
                                e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTEyIDJDMiAyIDIgMjIgMTIgMjJzMTAtMjAgMTAtMjBTMjIgMiAxMiAyeiIvPjwvc3ZnPg==";
                            }}
                        />
                    </div>
                    <div>
                        <p className="text-white text-base font-bold">{formData.title}</p>
                        <p className="text-[#92adc9] text-sm">
                            {formData.company} • {formData.startDate} - {formData.isCurrent ? "Present" : formData.endDate}
                        </p>
                    </div>
                </div>
                <span className="material-symbols-outlined text-[#92adc9] group-open:rotate-180 transition-transform">expand_more</span>
            </summary>

            {/* Editing Form */}
            <div className="p-6 flex flex-col gap-6 border-t border-[#324d67]/50">
                {/* Top Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#92adc9] uppercase tracking-wider">Job Title</label>
                        <input
                            className="bg-[#111a22] border border-[#324d67] rounded-lg px-4 py-2.5 text-white text-sm focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] outline-none transition-all placeholder:text-gray-600"
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#92adc9] uppercase tracking-wider">Company</label>
                        <input
                            className="bg-[#111a22] border border-[#324d67] rounded-lg px-4 py-2.5 text-white text-sm focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] outline-none transition-all placeholder:text-gray-600"
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#92adc9] uppercase tracking-wider">Start Date</label>
                        <input
                            className="bg-[#111a22] border border-[#324d67] rounded-lg px-4 py-2.5 text-white text-sm focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] outline-none transition-all [color-scheme:dark]"
                            type="month"
                            value={formData.startDate}
                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#92adc9] uppercase tracking-wider">End Date</label>
                        <div className="flex gap-2 items-center">
                            <input
                                className="bg-[#111a22] border border-[#324d67] rounded-lg px-4 py-2.5 text-white text-sm focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] outline-none transition-all flex-1 [color-scheme:dark]"
                                type="month"
                                value={formData.endDate || ""}
                                disabled={formData.isCurrent}
                                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                            />
                            <div className="flex items-center gap-2 px-2">
                                <input
                                    className="w-4 h-4 rounded border-gray-600 text-[#137fec] focus:ring-[#137fec] bg-[#111a22]"
                                    id={`currentRole-${formData.id}`}
                                    type="checkbox"
                                    checked={formData.isCurrent}
                                    onChange={(e) => setFormData({ ...formData, isCurrent: e.target.checked, endDate: e.target.checked ? null : formData.endDate })}
                                />
                                <label className="text-sm text-white cursor-pointer" htmlFor={`currentRole-${formData.id}`}>
                                    Present
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bullet Points Manager */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-[#92adc9] uppercase tracking-wider">Key Achievements & Responsibilities</label>
                        <button className="text-xs flex items-center gap-1 text-purple-400 hover:text-purple-300 font-medium">
                            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                            Optimize with Gemini
                        </button>
                    </div>
                    <div className="space-y-3">
                        {bullets.map((bullet) => (
                            <div key={bullet.id} className="group/bullet flex items-start gap-3">
                                <span className="material-symbols-outlined text-gray-600 cursor-move pt-3 text-[18px] opacity-0 group-hover/bullet:opacity-100 transition-opacity">
                                    drag_indicator
                                </span>
                                <div className="flex-1 relative">
                                    <textarea
                                        className="w-full bg-[#111a22] border border-[#324d67] rounded-lg px-4 py-3 text-white text-sm focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] outline-none resize-none leading-relaxed scrollbar-hide"
                                        rows={2}
                                        value={bullet.text}
                                        onChange={(e) => updateBullet(bullet.id, e.target.value)}
                                    />
                                    {bullet.tags.length > 0 && (
                                        <div className="absolute bottom-2 right-2 flex gap-1">
                                            {bullet.tags.map((tag, idx) => (
                                                <span key={idx} className="px-2 py-0.5 rounded-md bg-[#233648] text-[10px] text-gray-300 border border-[#324d67]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button className="pt-3 text-gray-600 hover:text-red-400 transition-colors" onClick={() => deleteBullet(bullet.id)}>
                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={addBullet}
                        className="self-start mt-1 flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#233648] hover:bg-[#2f465c] text-xs font-bold text-white transition-colors border border-[#324d67]"
                    >
                        <span className="material-symbols-outlined text-[14px]">add</span> Add Bullet
                    </button>
                </div>

                {/* Actions */}
                <div className="flex justify-end pt-4 border-t border-[#324d67]/30 gap-3">
                    <button className="px-5 py-2 rounded-lg text-sm font-bold text-[#92adc9] hover:text-white hover:bg-white/5 transition-colors">Cancel</button>
                    <button className="px-6 py-2 rounded-lg bg-[#137fec] hover:bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-500/20 transition-all">
                        Save Changes
                    </button>
                </div>
            </div>
        </details>
    );
}
