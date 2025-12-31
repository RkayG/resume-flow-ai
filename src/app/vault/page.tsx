"use client";

import Sidebar from "@/components/Sidebar";
import ExperienceCard from "@/components/ExperienceCard";

const mockExperiences = [
    {
        id: "1",
        title: "Senior Software Engineer",
        company: "Amazon",
        companyLogo: "https://logo.clearbit.com/amazon.com",
        startDate: "2020-01",
        endDate: null,
        isCurrent: true,
        bullets: [
            {
                id: "b1",
                text: "Designed and implemented a scalable microservices architecture using Java and AWS Lambda, reducing latency by 40%.",
                tags: ["Java", "AWS"],
            },
            {
                id: "b2",
                text: "Led a team of 5 engineers to migrate legacy monolith systems to Kubernetes clusters, improving deployment velocity by 200%.",
                tags: ["K8s", "Leadership"],
            },
        ],
    },
    {
        id: "2",
        title: "Software Engineer Intern",
        company: "Microsoft",
        companyLogo: "https://logo.clearbit.com/microsoft.com",
        startDate: "2019-06",
        endDate: "2019-08",
        isCurrent: false,
        bullets: [
            {
                id: "b3",
                text: "Developed internal tooling for Azure DevOps using C# and .NET Core.",
                tags: ["C#", ".NET"],
            },
        ],
    },
];

export default function VaultPage() {
    return (
        <div className="flex h-screen w-full overflow-hidden">
            <Sidebar />

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Bar / Header */}
                <header className="w-full border-b border-[#324d67]/30 bg-[#111a22]/50 backdrop-blur-md sticky top-0 z-20">
                    <div className="max-w-[1400px] mx-auto p-6 md:p-8">
                        <div className="flex flex-wrap justify-between items-end gap-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Master Vault</h2>
                                <p className="text-[#92adc9] text-sm md:text-base font-normal max-w-xl">
                                    Your complete career DNA. The AI uses this data to tailor your applications automatically.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#233648] hover:bg-[#2f465c] text-white text-sm font-bold transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">upload_file</span>
                                    <span className="hidden sm:inline">Import Resume</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#0077b5] hover:bg-[#006097] text-white text-sm font-bold transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">link</span>
                                    <span className="hidden sm:inline">Import from LinkedIn</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto w-full p-6 md:p-8">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20">
                        {/* LEFT COLUMN: Work Experience (Dominant) */}
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            <div className="flex items-center justify-between pb-2 border-b border-[#324d67]/30">
                                <h3 className="text-white text-xl font-bold">Work Experience</h3>
                                <button className="flex items-center gap-2 text-[#137fec] hover:text-blue-400 text-sm font-bold transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">add</span>
                                    Add New Role
                                </button>
                            </div>

                            {/* Experience Cards */}
                            {mockExperiences.map((exp, idx) => (
                                <ExperienceCard key={exp.id} experience={exp} isOpen={idx === 0} />
                            ))}

                            {/* Add New Button Large */}
                            <button className="group flex flex-col items-center justify-center gap-2 w-full h-32 border-2 border-dashed border-[#324d67] rounded-xl hover:border-[#137fec]/50 hover:bg-[#137fec]/5 transition-all cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-[#233648] group-hover:bg-[#137fec] group-hover:text-white text-[#92adc9] flex items-center justify-center transition-colors">
                                    <span className="material-symbols-outlined">add</span>
                                </div>
                                <span className="text-[#92adc9] font-medium text-sm group-hover:text-white">Add Previous Role</span>
                            </button>
                        </div>

                        {/* RIGHT COLUMN: Skills & Summaries */}
                        <div className="lg:col-span-4 flex flex-col gap-8">
                            {/* Technical Arsenal Widget */}
                            <div className="bg-[#1c2b39] border border-[#324d67] rounded-xl p-5 flex flex-col gap-5 shadow-lg shadow-black/20 sticky top-24">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white text-lg font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#137fec]">code</span>
                                        Technical Arsenal
                                    </h3>
                                    <button className="text-[#92adc9] hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {/* Languages */}
                                    <div>
                                        <p className="text-xs font-bold text-[#92adc9] uppercase tracking-wider mb-2">Languages</p>
                                        <div className="flex flex-wrap gap-2">
                                            {["Python", "Go", "TypeScript", "Rust"].map((lang, idx) => (
                                                <span
                                                    key={lang}
                                                    className="px-3 py-1 rounded-full bg-[#233648] text-white text-xs font-medium border border-[#324d67] flex items-center gap-1.5 hover:border-[#137fec] transition-colors cursor-default"
                                                >
                                                    {lang}{" "}
                                                    <span className={`w-1.5 h-1.5 rounded-full ${idx < 3 ? "bg-emerald-400" : "bg-yellow-400"}`}></span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Infrastructure */}
                                    <div>
                                        <p className="text-xs font-bold text-[#92adc9] uppercase tracking-wider mb-2">Infrastructure</p>
                                        <div className="flex flex-wrap gap-2">
                                            {["AWS", "Docker", "Terraform"].map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="px-3 py-1 rounded-full bg-[#233648] text-white text-xs font-medium border border-[#324d67] hover:border-[#137fec] transition-colors cursor-default"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="mt-2 w-full py-2 border border-dashed border-[#324d67] rounded-lg text-xs font-bold text-[#92adc9] hover:text-white hover:bg-white/5 transition-colors">
                                        + Add Skill Category
                                    </button>
                                </div>
                            </div>

                            {/* Summary Templates Widget */}
                            <div className="bg-[#1c2b39] border border-[#324d67] rounded-xl p-5 flex flex-col gap-4 shadow-lg shadow-black/20">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-white text-lg font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-purple-400">person</span>
                                        Personal Branding
                                    </h3>
                                    <button className="text-[#137fec] hover:text-blue-400 transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">add_circle</span>
                                    </button>
                                </div>
                                {/* Template Card 1 */}
                                <div className="p-3 rounded-lg bg-[#111a22] border border-[#137fec]/30 cursor-pointer hover:border-[#137fec] transition-all group">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-white text-sm font-bold">Generalist / Tech Lead</p>
                                        <span className="material-symbols-outlined text-[#92adc9] text-[16px] group-hover:text-[#137fec]">edit_note</span>
                                    </div>
                                    <p className="text-[#92adc9] text-xs line-clamp-2">
                                        Results-oriented Senior Software Engineer with 8+ years of experience building scalable distributed systems...
                                    </p>
                                </div>
                                {/* Template Card 2 */}
                                <div className="p-3 rounded-lg bg-[#111a22] border border-[#324d67] cursor-pointer hover:border-gray-500 transition-all group">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-white text-sm font-bold">Startup Founder Focus</p>
                                        <span className="material-symbols-outlined text-[#92adc9] text-[16px] group-hover:text-white">edit_note</span>
                                    </div>
                                    <p className="text-[#92adc9] text-xs line-clamp-2">
                                        Product-minded engineering leader with a passion for rapid prototyping and 0-to-1 product development...
                                    </p>
                                </div>
                            </div>

                            {/* AI Status */}
                            <div className="bg-gradient-to-br from-[#1c2b39] to-[#111a22] border border-[#324d67] rounded-xl p-4 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#137fec] to-purple-600 flex items-center justify-center animate-pulse">
                                    <span className="material-symbols-outlined text-white">auto_awesome</span>
                                </div>
                                <div>
                                    <p className="text-white text-xs font-bold">Gemini Analysis Active</p>
                                    <p className="text-[#92adc9] text-[10px]">Your Vault is 85% optimized for ATS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
