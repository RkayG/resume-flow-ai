"use client";

import { useState } from "react";
import GenerateSidebar from "@/components/GenerateSidebar";

export default function GeneratePage() {
    const [jobDescription, setJobDescription] = useState("");
    const [selectedRole, setSelectedRole] = useState("sr-backend");
    const [generateCV, setGenerateCV] = useState(true);
    const [generateCoverLetter, setGenerateCoverLetter] = useState(true);
    const [generateColdEmail, setGenerateColdEmail] = useState(false);

    return (
        <div className="flex h-screen w-full">
            <GenerateSidebar />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden bg-[#f6f7f8] dark:bg-[#101922] relative">
                {/* Top Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-[#e5e7eb] dark:border-[#283039] px-6 py-4 bg-white/80 dark:bg-[#111418]/90 backdrop-blur-md z-10 sticky top-0">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-[#137fec] to-blue-600 text-white shadow-lg shadow-[#137fec]/20">
                            <span className="material-symbols-outlined text-[24px]">auto_awesome</span>
                        </div>
                        <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-tight">ResumeFlow AI</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 bg-gray-100 dark:bg-[#1c2127] rounded-full px-4 py-1.5 border border-[#e5e7eb] dark:border-[#283039]">
                            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-medium text-[#6b7280] dark:text-[#9dabb9]">Gemini 1.5 Pro Active</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="relative flex size-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-[#1c2127] text-[#6b7280] dark:text-[#9dabb9] transition-colors">
                                <span className="material-symbols-outlined text-[22px]">notifications</span>
                                <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 border-2 border-white dark:border-[#111418]"></span>
                            </button>
                            <button className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-[#1c2127] text-[#6b7280] dark:text-[#9dabb9] transition-colors lg:hidden">
                                <span className="material-symbols-outlined text-[22px]">menu</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Scrollable Page Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-[1000px] mx-auto p-6 md:p-10 flex flex-col gap-8 pb-32">
                        {/* Page Heading with Handwritten Font */}
                        <div className="flex flex-col gap-2">
                            <h1 className="text-gray-900 dark:text-white text-5xl font-handwriting font-bold tracking-wide transform -rotate-1 origin-bottom-left">
                                Tailor Application
                            </h1>
                            <p className="text-[#6b7280] dark:text-[#9dabb9] text-lg font-normal max-w-2xl">
                                Configure parameters for the AI generation engine. Paste the job description and select your persona.
                            </p>
                        </div>

                        {/* Main Form Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* Left Column: Role & Options */}
                            <div className="md:col-span-4 flex flex-col gap-6">
                                {/* Role Selector */}
                                <div className="flex flex-col gap-2 group">
                                    <label className="text-gray-900 dark:text-white text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px] text-[#137fec]">badge</span>
                                        Target Role
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none w-full bg-white dark:bg-[#1c2127] text-gray-900 dark:text-white border border-[#e5e7eb] dark:border-[#283039] rounded-xl px-4 py-3.5 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-[#137fec]/50 focus:border-[#137fec] transition-all shadow-sm hover:border-gray-300 dark:hover:border-gray-600"
                                            value={selectedRole}
                                            onChange={(e) => setSelectedRole(e.target.value)}
                                        >
                                            <option value="">Select a persona...</option>
                                            <option value="sr-backend">Senior Backend Engineer</option>
                                            <option value="full-stack">Full Stack Lead</option>
                                            <option value="arch">Systems Architect</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#6b7280] dark:text-[#9dabb9]">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="text-xs text-[#137fec] font-medium hover:underline flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">add</span> Create new role
                                        </button>
                                    </div>
                                </div>

                                {/* Configuration Toggles */}
                                <div className="flex flex-col gap-3 p-4 rounded-xl bg-gray-50 dark:bg-[#1c2127] border border-[#e5e7eb] dark:border-[#283039]">
                                    <span className="text-gray-900 dark:text-white text-sm font-semibold mb-1">Output Options</span>

                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="peer sr-only"
                                                checked={generateCV}
                                                onChange={(e) => setGenerateCV(e.target.checked)}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#137fec]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#137fec]"></div>
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                            Tailored CV
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="peer sr-only"
                                                checked={generateCoverLetter}
                                                onChange={(e) => setGenerateCoverLetter(e.target.checked)}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#137fec]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#137fec]"></div>
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                            Cover Letter
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="peer sr-only"
                                                checked={generateColdEmail}
                                                onChange={(e) => setGenerateColdEmail(e.target.checked)}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#137fec]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#137fec]"></div>
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                            Cold Email Draft
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Right Column: Job Description */}
                            <div className="md:col-span-8 flex flex-col gap-2 h-full">
                                <div className="flex justify-between items-end">
                                    <label className="text-gray-900 dark:text-white text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px] text-[#137fec]">description</span>
                                        Job Description
                                    </label>
                                    <button className="text-xs text-[#6b7280] dark:text-[#9dabb9] hover:text-[#137fec] transition-colors flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">link</span> Import from URL
                                    </button>
                                </div>
                                <div className="flex-1 relative group">
                                    <textarea
                                        className="w-full h-full min-h-[300px] bg-white dark:bg-[#1c2127] text-gray-900 dark:text-white border border-[#e5e7eb] dark:border-[#283039] rounded-xl p-5 text-base font-normal leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-[#137fec]/50 focus:border-[#137fec] transition-all shadow-sm placeholder:text-[#6b7280]/50 dark:placeholder:text-[#9dabb9]/50"
                                        placeholder="Paste the full job description here... 

Example: 'We are looking for a Senior Backend Engineer with experience in Python, AWS, and Kubernetes...'"
                                        value={jobDescription}
                                        onChange={(e) => setJobDescription(e.target.value)}
                                    />
                                    {/* Decorative element */}
                                    <div className="absolute bottom-4 right-4 text-xs text-[#6b7280] dark:text-[#9dabb9] bg-gray-100 dark:bg-[#111418] px-2 py-1 rounded border border-[#e5e7eb] dark:border-[#283039] opacity-0 group-hover:opacity-100 transition-opacity">
                                        Markdown Supported
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Area */}
                        <div className="flex flex-col gap-6 mt-4">
                            <button className="w-full bg-[#137fec] hover:bg-blue-600 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg shadow-[#137fec]/20 hover:shadow-[#137fec]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3">
                                <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
                                Generate Application Package
                            </button>
                        </div>

                        {/* Console / Progress Visual */}
                        <div className="rounded-xl overflow-hidden border border-[#e5e7eb] dark:border-[#283039] bg-[#0d1117] shadow-xl mt-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-[#21262d]">
                                <span className="material-symbols-outlined text-[16px] text-[#9dabb9]">terminal</span>
                                <span className="text-xs font-mono text-[#9dabb9]">Generation Console</span>
                                <div className="ml-auto flex gap-1.5">
                                    <div className="size-2.5 rounded-full bg-[#ff5f56]"></div>
                                    <div className="size-2.5 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="size-2.5 rounded-full bg-[#27c93f]"></div>
                                </div>
                            </div>
                            <div className="p-4 font-mono text-sm h-32 overflow-y-auto">
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-green-400 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                                        <span>System initialized. ResumeFlow Agent v2.4 ready.</span>
                                    </p>
                                    <p className="text-blue-400 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[14px]">info</span>
                                        <span>Model Context loaded: Senior Backend Engineer (Alex Dev)</span>
                                    </p>
                                    <p className="text-gray-500 pl-6 border-l border-gray-700 ml-1.5">&gt; Waiting for Job Description input...</p>
                                    <p className="text-gray-400 flex items-center gap-2 mt-2">
                                        <span className="animate-cursor inline-block w-2 h-4 bg-[#137fec] align-middle"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
