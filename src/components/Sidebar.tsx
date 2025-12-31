"use client";

export default function Sidebar() {
    return (
        <div className="hidden md:flex flex-col w-72 h-full border-r border-[#324d67]/30 bg-[#111a22] p-4 shrink-0">
            <div className="flex flex-col gap-8 h-full">
                {/* Logo */}
                <div className="flex flex-col px-2">
                    <h1 className="text-white text-xl font-bold leading-normal tracking-tight flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#137fec]">auto_awesome</span>
                        ResumeFlow AI
                    </h1>
                    <p className="text-[#92adc9] text-xs font-medium pl-8">High-Level Automation</p>
                </div>

                {/* Nav Menu */}
                <nav className="flex flex-col gap-2 flex-1">
                    {/* Active Item */}
                    <a
                        className="flex items-center gap-3 px-3 py-3 rounded-lg bg-[#233648] group transition-all"
                        href="/vault"
                    >
                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                            database
                        </span>
                        <div className="flex flex-col">
                            <span className="text-white text-sm font-bold leading-none">Master Vault</span>
                            <span className="text-[10px] text-gray-400 mt-1 font-normal">Manage Career DNA</span>
                        </div>
                    </a>

                    <a
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                        href="/search"
                    >
                        <span className="material-symbols-outlined">search</span>
                        <span className="text-sm font-medium leading-normal">Job Search</span>
                    </a>

                    <a
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                        href="/generate"
                    >
                        <span className="material-symbols-outlined">memory</span>
                        <span className="text-sm font-medium leading-normal">Generator</span>
                    </a>

                    <a
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-all text-gray-400 hover:text-white mt-auto"
                        href="/settings"
                    >
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm font-medium leading-normal">Settings</span>
                    </a>
                </nav>

                {/* User Profile */}
                <div className="flex items-center gap-3 px-3 py-2 border-t border-[#324d67]/30 pt-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#137fec] to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-[#137fec]/20">
                        JD
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-white text-sm font-bold truncate">John Doe</p>
                        <p className="text-[#92adc9] text-xs truncate">Senior Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
