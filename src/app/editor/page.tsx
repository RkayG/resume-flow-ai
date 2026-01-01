"use client";

import { useState } from "react";

export default function EditorPage() {
    const [matchScore] = useState(85);
    const keywords = [
        { name: "Distributed Systems", found: true, priority: "High" },
        { name: "Microservices", found: true, priority: "High" },
        { name: "Golang", found: true, priority: "Crit." },
        { name: "CI/CD", found: true, priority: "Med" },
        { name: "System Design", found: false, priority: "Missing" },
        { name: "Pub/Sub", found: false, priority: "Low" },
        { name: "Kubernetes", found: true, priority: "High" },
        { name: "GCP", found: true, priority: "Med" },
    ];

    return (
        <div className="bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-white font-display h-screen flex flex-col overflow-hidden">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#233648] px-6 py-3 bg-[#101922] shrink-0 z-20">
                <div className="flex items-center gap-4 text-white">
                    <div className="size-8 flex items-center justify-center text-[#137fec]">
                        <span className="material-symbols-outlined text-3xl">smart_toy</span>
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">ResumeFlow AI</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8 items-center">
                    <div className="flex items-center gap-6 hidden md:flex">
                        <a className="text-[#93adc8] hover:text-white text-sm font-medium transition-colors" href="/">
                            Dashboard
                        </a>
                        <a className="text-[#93adc8] hover:text-white text-sm font-medium transition-colors" href="/history">
                            History
                        </a>
                        <a className="text-white text-sm font-medium" href="/editor">
                            Editor
                        </a>
                        <a className="text-[#93adc8] hover:text-white text-sm font-medium transition-colors" href="/settings">
                            Settings
                        </a>
                    </div>
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-[#233648]"
                        style={{
                            backgroundImage: `url("https://api.dicebear.com/7.x/avataaars/svg?seed=AlexChen")`,
                        }}
                    ></div>
                </div>
            </header>

            {/* Page Content */}
            <main className="flex flex-1 overflow-hidden relative">
                {/* Left + Center: Editors Area */}
                <div className="flex flex-col flex-1 min-w-0">
                    {/* Page Heading & Actions */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 border-b border-[#233648] bg-[#101922] shrink-0">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <h1 className="text-white text-2xl font-bold leading-tight">Senior Backend Engineer - Google</h1>
                                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                                    ATS Optimized
                                </span>
                            </div>
                            <p className="text-[#93adc8] text-sm">Last edited just now • Targeted Job ID: GOOG-2910</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 h-9 rounded-lg bg-[#233648] hover:bg-[#2f455a] text-white text-sm font-medium transition-colors">
                                <span className="material-symbols-outlined text-[18px]">refresh</span>
                                <span>Regenerate AI</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 h-9 rounded-lg bg-[#137fec] hover:bg-blue-600 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-900/20">
                                <span className="material-symbols-outlined text-[18px]">download</span>
                                <span>Export PDF</span>
                            </button>
                        </div>
                    </div>

                    {/* Split Editors Container */}
                    <div className="flex flex-1 overflow-hidden p-6 gap-6 bg-[#101922]">
                        {/* CV Editor */}
                        <div className="flex flex-col flex-1 bg-[#161e27] rounded-xl border border-[#233648] overflow-hidden shadow-sm flex-grow min-w-[350px]">
                            {/* Editor Toolbar */}
                            <div className="flex items-center justify-between px-4 py-2 border-b border-[#233648] bg-[#1a232d]">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#137fec] text-[20px]">description</span>
                                    <span className="text-sm font-semibold text-white">Curriculum Vitae</span>
                                </div>
                                <div className="flex items-center gap-1 bg-[#111a22] p-1 rounded-lg border border-[#233648]">
                                    <button className="p-1 hover:bg-[#233648] rounded text-[#93adc8] hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">format_bold</span>
                                    </button>
                                    <button className="p-1 hover:bg-[#233648] rounded text-[#93adc8] hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">format_italic</span>
                                    </button>
                                    <button className="p-1 hover:bg-[#233648] rounded text-[#93adc8] hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">format_underlined</span>
                                    </button>
                                    <div className="w-px h-4 bg-[#233648] mx-1"></div>
                                    <button className="p-1 hover:bg-[#233648] rounded text-[#93adc8] hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
                                    </button>
                                </div>
                                <div className="w-6"></div>
                            </div>

                            {/* Editor Content */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-[#1e242e]">
                                <div className="font-serif text-slate-200 max-w-[65ch] mx-auto space-y-4">
                                    <div className="border-b border-slate-600 pb-4 mb-4">
                                        <h1 className="text-2xl font-bold text-white mb-1">Alex Chen</h1>
                                        <p className="text-sm text-slate-400">San Francisco, CA • alex.chen@example.com • github.com/alexc</p>
                                    </div>

                                    <section>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#137fec] border-b border-slate-700 mb-2 pb-1">
                                            Professional Experience
                                        </h3>
                                        <div className="mb-4">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h4 className="font-bold text-white">Staff Software Engineer</h4>
                                                <span className="text-xs text-slate-400">2020 - Present</span>
                                            </div>
                                            <p className="text-sm italic text-slate-300 mb-2">Stripe, San Francisco</p>
                                            <ul className="list-disc list-outside ml-4 text-sm text-slate-300 space-y-1">
                                                <li>
                                                    Architected and led the migration of a legacy monolithic payments processing system to a{" "}
                                                    <span className="bg-[#137fec]/20 text-blue-200 px-1 rounded">microservices</span> architecture using Go and gRPC,
                                                    reducing latency by 40%.
                                                </li>
                                                <li>Designed scalable APIs handling over 1M requests per second during peak traffic events.</li>
                                                <li>
                                                    Mentored 5 senior engineers and established best practices for{" "}
                                                    <span className="bg-[#137fec]/20 text-blue-200 px-1 rounded">CI/CD</span> pipelines.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h4 className="font-bold text-white">Senior Backend Engineer</h4>
                                                <span className="text-xs text-slate-400">2017 - 2020</span>
                                            </div>
                                            <p className="text-sm italic text-slate-300 mb-2">Uber, San Francisco</p>
                                            <ul className="list-disc list-outside ml-4 text-sm text-slate-300 space-y-1">
                                                <li>Optimized real-time matching algorithms using Python and C++, improving driver utilization by 15%.</li>
                                                <li>Implemented comprehensive monitoring using Prometheus and Grafana.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#137fec] border-b border-slate-700 mb-2 pb-1">Skills</h3>
                                        <p className="text-sm text-slate-300">
                                            <strong className="text-white">Languages:</strong> Go, Python, Java, SQL, Rust
                                        </p>
                                        <p className="text-sm text-slate-300">
                                            <strong className="text-white">Technologies:</strong> Kubernetes, Docker, AWS, GCP, gRPC, Kafka, Redis
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>

                        {/* Motivation Letter Editor */}
                        <div className="flex flex-col flex-1 bg-[#161e27] rounded-xl border border-[#233648] overflow-hidden shadow-sm flex-grow min-w-[350px]">
                            {/* Editor Toolbar */}
                            <div className="flex items-center justify-between px-4 py-2 border-b border-[#233648] bg-[#1a232d]">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#137fec] text-[20px]">mail</span>
                                    <span className="text-sm font-semibold text-white">Motivation Letter</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#233648] hover:bg-[#2f455a] text-white text-xs font-medium transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">content_copy</span>
                                        Copy
                                    </button>
                                </div>
                            </div>

                            {/* Editor Content */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-[#1e242e]">
                                <div className="font-serif text-slate-200 max-w-[65ch] mx-auto space-y-4 leading-relaxed text-sm">
                                    <p>Dear Hiring Manager,</p>
                                    <p>
                                        I am writing to express my strong interest in the Senior Backend Engineer position at Google, as advertised. With over 7
                                        years of experience building high-performance{" "}
                                        <span className="bg-[#137fec]/20 text-blue-200 px-1 rounded">distributed systems</span> and a proven track record of
                                        optimizing large-scale infrastructure at Stripe and Uber, I am confident in my ability to contribute effectively to your
                                        engineering team.
                                    </p>
                                    <p>
                                        In my current role as a Staff Software Engineer at Stripe, I led the architectural transition from a monolith to{" "}
                                        <span className="bg-[#137fec]/20 text-blue-200 px-1 rounded">microservices</span>, a challenge that required not only deep
                                        technical expertise in <span className="bg-[#137fec]/20 text-blue-200 px-1 rounded">Go</span> and gRPC but also strategic
                                        planning and cross-team collaboration. This initiative resulted in a 40% reduction in system latency and significantly
                                        improved developer velocity. I understand that Google values scalability and reliability, and these are the core principles
                                        that drive my engineering decisions.
                                    </p>
                                    <p>
                                        I am particularly excited about Google's work in cloud infrastructure and AI integration. My experience with{" "}
                                        <span className="bg-[#137fec]/20 text-blue-200 px-1 rounded">Kubernetes</span> orchestration and cloud-native development on
                                        GCP aligns perfectly with the requirements of this role. I am eager to bring my expertise in backend optimization and my
                                        passion for building robust, scalable solutions to Google.
                                    </p>
                                    <p>
                                        Thank you for considering my application. I look forward to the possibility of discussing how my background and skills can
                                        contribute to the continued success of your team.
                                    </p>
                                    <p>Sincerely,</p>
                                    <p>Alex Chen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: Keyword Intelligence */}
                <aside className="w-80 border-l border-[#233648] bg-[#101922] flex flex-col shrink-0 z-10 hidden lg:flex">
                    <div className="p-6 border-b border-[#233648]">
                        <h3 className="text-white text-base font-bold mb-4">Match Analysis</h3>

                        {/* Match Score Widget */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative size-16 shrink-0">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path
                                        className="text-[#233648]"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></path>
                                    <path
                                        className="text-green-500"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeDasharray={`${matchScore}, 100`}
                                        strokeLinecap="round"
                                        strokeWidth="4"
                                    ></path>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center flex-col">
                                    <span className="text-sm font-bold text-white">{matchScore}%</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-medium text-sm">Strong Match</p>
                                <p className="text-[#93adc8] text-xs">Your profile aligns well with the JD.</p>
                            </div>
                        </div>

                        <div className="h-px bg-[#233648] w-full mb-4"></div>

                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-[#93adc8] uppercase tracking-wider">Keywords</span>
                            <span className="text-xs text-[#137fec] font-medium">12/15 Found</span>
                        </div>
                    </div>

                    {/* Keyword List */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
                        <div className="space-y-1">
                            {keywords.map((keyword, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between p-2 rounded-lg hover:bg-white/5 group cursor-pointer transition-colors ${!keyword.found ? "bg-red-500/5 border border-red-500/10" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`material-symbols-outlined text-[18px] ${keyword.found ? "text-green-500" : keyword.priority === "Missing" ? "text-red-500" : "text-[#93adc8]"
                                                }`}
                                        >
                                            {keyword.found ? "check_circle" : "cancel"}
                                        </span>
                                        <span className={`text-sm ${keyword.found ? "text-slate-200" : "text-slate-400"} group-hover:text-white`}>
                                            {keyword.name}
                                        </span>
                                    </div>
                                    <span
                                        className={`text-[10px] px-1.5 py-0.5 rounded ${keyword.priority === "Missing"
                                                ? "text-red-400 bg-red-500/20"
                                                : keyword.priority === "Crit."
                                                    ? "text-[#93adc8] bg-[#233648]"
                                                    : "text-[#93adc8] bg-[#233648]"
                                            }`}
                                    >
                                        {keyword.priority}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Suggestion Box */}
                    <div className="p-4 border-t border-[#233648] bg-[#161e27]">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-[#137fec] text-[20px] mt-0.5">lightbulb</span>
                            <div>
                                <p className="text-xs font-bold text-white mb-1">AI Suggestion</p>
                                <p className="text-xs text-[#93adc8] leading-normal">
                                    Try incorporating "System Design" in your Experience section under Uber to boost your match score.
                                </p>
                                <button className="mt-2 text-xs text-[#137fec] font-semibold hover:underline">Apply Fix</button>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}
