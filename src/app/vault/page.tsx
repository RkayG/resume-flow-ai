"use client";

import Sidebar from "@/components/Sidebar";

export default function VaultPage() {
    return (
        <div className="flex h-screen w-full overflow-hidden">
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Navigation / Mobile Header */}
                <header className="h-16 border-b border-[#2d3642]/50 flex items-center justify-between px-6 md:px-10 bg-[#1c232d] shrink-0 z-10">
                    <div className="md:hidden font-handwriting text-lg font-bold">ResumeFlow AI</div>
                    <div className="hidden md:flex flex-col">
                        <h2 className="text-2xl font-handwriting font-bold text-white tracking-wide">Master Vault</h2>
                        <span className="text-xs text-[#9dabb9]">The source code of your career</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#137fec] hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                            <span className="material-symbols-outlined text-[20px]">magic_button</span>
                            <span>Generate CV</span>
                        </button>
                    </div>
                </header>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
                    <div className="max-w-6xl mx-auto flex flex-col gap-10 pb-20">
                        {/* Section: Executive Summaries */}
                        <section className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-white font-handwriting text-2xl font-bold">Executive Summaries</h3>
                                <button className="text-[#137fec] text-sm font-medium hover:underline">View all</button>
                            </div>
                            <div className="flex overflow-x-auto pb-4 gap-4 -mx-2 px-2 snap-x">
                                {/* Card 1 */}
                                <div className="snap-start shrink-0 w-72 bg-[#1c232d] border border-[#2d3642] rounded-xl p-4 flex flex-col gap-4 shadow-sm hover:border-[#137fec]/50 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                                            <span className="material-symbols-outlined">code</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">Full-stack Lead</h4>
                                            <p className="text-xs text-[#9dabb9]">Node/React Focus</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#9dabb9] line-clamp-3">
                                        Experienced Technical Lead with 8+ years specializing in scalable MERN stack architectures. Proven track record of reducing latency by 40%...
                                    </p>
                                    <div className="pt-2 mt-auto border-t border-white/5 flex justify-end">
                                        <button className="text-xs font-bold text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded transition-colors">Edit Draft</button>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="snap-start shrink-0 w-72 bg-[#1c232d] border border-[#2d3642] rounded-xl p-4 flex flex-col gap-4 shadow-sm hover:border-[#137fec]/50 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                                            <span className="material-symbols-outlined">brush</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">Frontend Specialist</h4>
                                            <p className="text-xs text-[#9dabb9]">UI/UX Focus</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#9dabb9] line-clamp-3">
                                        Passionate Frontend Engineer obsessed with pixel-perfect implementation and micro-interactions. Expert in Tailwind CSS and Framer Motion...
                                    </p>
                                    <div className="pt-2 mt-auto border-t border-white/5 flex justify-end">
                                        <button className="text-xs font-bold text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded transition-colors">Edit Draft</button>
                                    </div>
                                </div>

                                {/* Add New Card */}
                                <div className="snap-start shrink-0 w-72 bg-[#151b24] border border-dashed border-[#2d3642] rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-[#137fec]/50 hover:bg-[#1c232d] transition-all cursor-pointer text-[#9dabb9] hover:text-[#137fec] min-h-[180px]">
                                    <span className="material-symbols-outlined text-4xl mb-1">add_circle</span>
                                    <span className="text-sm font-medium">Create New Pitch</span>
                                </div>
                            </div>
                        </section>

                        {/* Section: Split Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Left Column: Experience (8 cols) */}
                            <div className="lg:col-span-8 flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-handwriting text-2xl font-bold">Professional Experience</h3>
                                    <button className="flex items-center gap-1 text-sm bg-[#137fec]/10 text-[#137fec] px-3 py-1.5 rounded-lg hover:bg-[#137fec]/20 transition-colors">
                                        <span className="material-symbols-outlined text-base">add</span>
                                        Add Role
                                    </button>
                                </div>

                                {/* Current Role Form (Expanded) */}
                                <div className="bg-[#1c232d] border border-[#2d3642] rounded-xl p-6 shadow-sm">
                                    <div className="flex justify-between items-start mb-6">
                                        <h4 className="text-lg font-medium text-white flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[#137fec]">edit_document</span>
                                            Senior Software Engineer
                                        </h4>
                                        <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded uppercase tracking-wider">Current</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-[#9dabb9] mb-1.5">Company</label>
                                            <input
                                                className="w-full bg-[#101922] border border-[#2d3642] rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-[#137fec] focus:border-[#137fec] placeholder-gray-600"
                                                type="text"
                                                defaultValue="TechGlobal Inc."
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-[#9dabb9] mb-1.5">Location</label>
                                            <div className="relative">
                                                <input
                                                    className="w-full bg-[#101922] border border-[#2d3642] rounded-lg px-3 py-2 pl-9 text-sm text-white focus:ring-1 focus:ring-[#137fec] focus:border-[#137fec]"
                                                    type="text"
                                                    defaultValue="San Francisco, CA"
                                                />
                                                <span className="material-symbols-outlined absolute left-2.5 top-2 text-gray-500 text-lg">location_on</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-[#9dabb9] mb-1.5">Start Date</label>
                                            <input
                                                className="w-full bg-[#101922] border border-[#2d3642] rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-[#137fec] focus:border-[#137fec]"
                                                type="month"
                                                defaultValue="2021-03"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-[#9dabb9] mb-1.5">End Date</label>
                                            <input
                                                className="w-full bg-[#101922] border border-[#2d3642] rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-[#137fec] focus:border-[#137fec]"
                                                type="month"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-xs font-medium text-[#9dabb9] mb-1.5 flex justify-between">
                                            Key Responsibilities
                                            <span className="text-[10px] text-gray-500 font-normal">Supports Markdown</span>
                                        </label>
                                        <textarea
                                            className="w-full h-32 bg-[#101922] border border-[#2d3642] rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-[#137fec] focus:border-[#137fec] font-mono leading-relaxed"
                                            defaultValue="- Spearheaded the migration from monolith to microservices using Go and gRPC, improving system uptime by 99.9%.
- Optimized database queries reducing load times by 40% for the main dashboard.
- Mentored junior developers and instituted code review best practices."
                                        />
                                    </div>
                                    <div className="flex justify-end gap-3 pt-2">
                                        <button className="px-4 py-2 text-sm font-medium text-[#9dabb9] hover:text-white transition-colors">Cancel</button>
                                        <button className="px-4 py-2 text-sm font-bold bg-[#137fec] text-white rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-colors">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>

                                {/* Previous Roles Timeline */}
                                <div className="relative pl-8 border-l border-[#2d3642] space-y-8">
                                    {/* Timeline Item 1 */}
                                    <div className="relative">
                                        <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-[#101922] bg-gray-600"></div>
                                        <div className="group bg-[#1c232d]/50 hover:bg-[#1c232d] border border-transparent hover:border-[#2d3642] rounded-xl p-4 transition-all cursor-pointer">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="text-white font-medium group-hover:text-[#137fec] transition-colors">Software Engineer II</h4>
                                                    <p className="text-sm text-[#9dabb9]">DataFlow Systems • Austin, TX</p>
                                                </div>
                                                <span className="text-xs text-gray-500 font-mono">2018 - 2021</span>
                                            </div>
                                            <p className="text-sm text-gray-400 line-clamp-2">
                                                Developed internal tools for data visualization using D3.js and React. Implemented CI/CD pipelines with Jenkins.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline Item 2 */}
                                    <div className="relative">
                                        <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-[#101922] bg-gray-600"></div>
                                        <div className="group bg-[#1c232d]/50 hover:bg-[#1c232d] border border-transparent hover:border-[#2d3642] rounded-xl p-4 transition-all cursor-pointer">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="text-white font-medium group-hover:text-[#137fec] transition-colors">Junior Developer</h4>
                                                    <p className="text-sm text-[#9dabb9]">StartUp Inc • Remote</p>
                                                </div>
                                                <span className="text-xs text-gray-500 font-mono">2016 - 2018</span>
                                            </div>
                                            <p className="text-sm text-gray-400 line-clamp-2">Collaborated on the MVP launch. Assisted in backend API development using Express.js.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Skills (4 cols) */}
                            <div className="lg:col-span-4 flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-handwriting text-2xl font-bold">Technical Arsenal</h3>
                                    <button className="text-[#137fec] hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">settings</span>
                                    </button>
                                </div>

                                <div className="bg-[#1c232d] border border-[#2d3642] rounded-xl overflow-hidden flex flex-col h-full min-h-[500px]">
                                    {/* Search */}
                                    <div className="p-4 border-b border-[#2d3642] bg-[#151b24]">
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-500 text-lg">search</span>
                                            <input
                                                className="w-full bg-[#101922] border border-[#2d3642] rounded-lg py-2 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] placeholder-gray-600 transition-all"
                                                placeholder="Add skill (e.g. Python)..."
                                                type="text"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-4 flex flex-col gap-6 overflow-y-auto">
                                        {/* Category: Languages */}
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Languages</h5>
                                                <span className="text-[10px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">4</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                {[
                                                    { name: "JavaScript", color: "bg-yellow-400", level: 4 },
                                                    { name: "TypeScript", color: "bg-blue-500", level: 3 },
                                                    { name: "Go", color: "bg-cyan-400", level: 2 },
                                                ].map((lang) => (
                                                    <div key={lang.name} className="flex items-center justify-between group p-2 rounded hover:bg-white/5 transition-colors cursor-pointer">
                                                        <div className="flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full ${lang.color}`}></div>
                                                            <span className="text-sm text-white">{lang.name}</span>
                                                        </div>
                                                        <div className="flex gap-0.5">
                                                            {[...Array(5)].map((_, i) => (
                                                                <div key={i} className={`w-1.5 h-3 rounded-sm ${i < lang.level ? "bg-[#137fec]" : i === lang.level ? "bg-[#137fec]/30" : "bg-gray-700"}`}></div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Category: Frameworks */}
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Frameworks</h5>
                                                <span className="text-[10px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">3</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {[
                                                    { name: "React", level: "green" },
                                                    { name: "Next.js", level: "green" },
                                                    { name: "Tailwind", level: "yellow" },
                                                ].map((fw) => (
                                                    <div
                                                        key={fw.name}
                                                        className="px-3 py-1.5 bg-[#101922] border border-[#2d3642] rounded-full flex items-center gap-2 group hover:border-[#137fec]/50 transition-colors cursor-pointer"
                                                    >
                                                        <span className="text-sm text-white">{fw.name}</span>
                                                        <span className={`w-2 h-2 rounded-full ${fw.level === "green" ? "bg-green-400" : "bg-yellow-400"}`}></span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Category: Tools & Cloud */}
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tools & Cloud</h5>
                                                <span className="text-[10px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">3</span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                {[
                                                    { name: "AWS", icon: "cloud", color: "text-[#137fec]", progress: 75 },
                                                    { name: "Docker", icon: "deployed_code", color: "text-blue-400", progress: 100 },
                                                    { name: "Figma", icon: "design_services", color: "text-pink-400", progress: 50 },
                                                ].map((tool) => (
                                                    <div
                                                        key={tool.name}
                                                        className="p-2 bg-[#101922] border border-[#2d3642] rounded-lg flex flex-col gap-1 hover:bg-white/5 transition-colors cursor-pointer"
                                                    >
                                                        <div className="flex justify-between items-start">
                                                            <span className="text-xs font-medium text-white">{tool.name}</span>
                                                            <span className={`material-symbols-outlined text-[16px] ${tool.color}`}>{tool.icon}</span>
                                                        </div>
                                                        <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden mt-1">
                                                            <div className="bg-[#137fec] h-full" style={{ width: `${tool.progress}%` }}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Card */}
                                <div className="bg-blue-900/20 border border-blue-900/50 rounded-xl p-4 flex gap-3">
                                    <span className="material-symbols-outlined text-[#137fec] shrink-0">info</span>
                                    <div>
                                        <h6 className="text-white text-sm font-bold">Pro Tip</h6>
                                        <p className="text-xs text-[#9dabb9] mt-1">Adding proficiency levels helps Gemini AI match you better with Senior roles vs Junior roles.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Global Floating Actions (Mobile only) */}
            <div className="fixed bottom-6 right-6 md:hidden">
                <button className="w-14 h-14 bg-[#137fec] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined">save</span>
                </button>
            </div>
        </div>
    );
}
