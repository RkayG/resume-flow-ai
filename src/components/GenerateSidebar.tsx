"use client";

export default function GenerateSidebar() {
    return (
        <aside className="hidden lg:flex w-[280px] flex-col border-r border-[#e5e7eb] dark:border-[#283039] bg-white dark:bg-[#101922] h-full flex-shrink-0 transition-colors duration-200">
            <div className="flex flex-col h-full justify-between p-4">
                <div className="flex flex-col gap-4">
                    {/* User Profile Area */}
                    <div className="flex gap-3 items-center p-2 rounded-xl bg-[#f6f7f8] dark:bg-[#1c2127] border border-[#e5e7eb] dark:border-[#283039]">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-sm"
                            style={{
                                backgroundImage: `url("https://api.dicebear.com/7.x/avataaars/svg?seed=Alex")`,
                            }}
                        ></div>
                        <div className="flex flex-col overflow-hidden">
                            <h1 className="text-gray-900 dark:text-white text-base font-semibold leading-tight truncate">Alex Dev</h1>
                            <p className="text-[#6b7280] dark:text-[#9dabb9] text-xs font-medium leading-normal">Pro Plan Member</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-2 mt-2">
                        <a
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6b7280] dark:text-[#9dabb9] hover:bg-gray-100 dark:hover:bg-[#1c2127] hover:text-gray-900 dark:hover:text-white transition-all group"
                            href="/"
                        >
                            <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">dashboard</span>
                            <span className="text-sm font-medium">Dashboard</span>
                        </a>
                        <a
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#137fec]/10 text-[#137fec] dark:bg-[#283039] dark:text-white border-l-4 border-[#137fec] shadow-sm"
                            href="/generate"
                        >
                            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                edit_document
                            </span>
                            <span className="text-sm font-medium">Tailor Application</span>
                        </a>
                        <a
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6b7280] dark:text-[#9dabb9] hover:bg-gray-100 dark:hover:bg-[#1c2127] hover:text-gray-900 dark:hover:text-white transition-all group"
                            href="/history"
                        >
                            <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">history</span>
                            <span className="text-sm font-medium">History</span>
                        </a>
                        <a
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6b7280] dark:text-[#9dabb9] hover:bg-gray-100 dark:hover:bg-[#1c2127] hover:text-gray-900 dark:hover:text-white transition-all group"
                            href="/vault"
                        >
                            <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">person</span>
                            <span className="text-sm font-medium">My Roles</span>
                        </a>
                    </nav>
                </div>

                {/* Bottom Settings */}
                <div className="flex flex-col gap-2 border-t border-[#e5e7eb] dark:border-[#283039] pt-4">
                    <a
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#6b7280] dark:text-[#9dabb9] hover:bg-gray-100 dark:hover:bg-[#1c2127] hover:text-gray-900 dark:hover:text-white transition-all group"
                        href="/settings"
                    >
                        <span className="material-symbols-outlined text-[24px] group-hover:rotate-45 transition-transform">settings</span>
                        <span className="text-sm font-medium">Settings</span>
                    </a>
                </div>
            </div>
        </aside>
    );
}
