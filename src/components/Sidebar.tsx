"use client";

export default function Sidebar() {
    return (
        <aside className="w-64 hidden md:flex flex-col border-r border-[#2d3642]/50 bg-[#151b24] h-full shrink-0">
            <div className="flex flex-col h-full p-4 justify-between">
                <div className="flex flex-col gap-8">
                    <div className="px-2">
                        <h1 className="text-white text-xl font-handwriting font-bold leading-normal">ResumeFlow AI</h1>
                        <p className="text-[#9dabb9] text-xs font-normal leading-normal mt-1">Automation Tool</p>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <a
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#137fec]/20 border-l-4 border-[#137fec] group transition-all"
                            href="/vault"
                        >
                            <span className="material-symbols-outlined text-[#137fec] group-hover:text-white transition-colors">lock</span>
                            <p className="text-white text-sm font-medium">Master Vault</p>
                        </a>
                        <a
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all text-[#9dabb9] hover:text-white"
                            href="/tracker"
                        >
                            <span className="material-symbols-outlined">work</span>
                            <p className="text-sm font-medium">Job Tracker</p>
                        </a>
                        <a
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all text-[#9dabb9] hover:text-white"
                            href="/settings"
                        >
                            <span className="material-symbols-outlined">account_circle</span>
                            <p className="text-sm font-medium">Profile Settings</p>
                        </a>
                    </nav>
                </div>
                <div className="px-2 pb-2">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#137fec] to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                            JD
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-white">John Doe</span>
                            <span className="text-[10px] text-[#9dabb9]">Pro Plan</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
