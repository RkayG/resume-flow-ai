export default function Home() {
  return (
    <div className="min-h-screen bg-[#111a22] flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="material-symbols-outlined text-[#137fec] text-5xl">auto_awesome</span>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            ResumeFlow AI
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-[#92adc9] max-w-2xl mx-auto leading-relaxed">
          Eliminate the grunt work of tailoring job applications. Generate ATS-optimized CVs and motivation letters in <span className="text-[#137fec] font-bold">under 2 minutes</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a
            href="/vault"
            className="px-8 py-4 rounded-lg bg-[#137fec] hover:bg-blue-600 text-white text-lg font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">database</span>
            Go to Master Vault
          </a>
          <a
            href="/generate"
            className="px-8 py-4 rounded-lg bg-[#233648] hover:bg-[#2f465c] text-white text-lg font-bold transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined">memory</span>
            Generate Resume
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          <div className="bg-[#1c2b39] border border-[#324d67] rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-[#137fec] mb-2">45 min → 2 min</div>
            <p className="text-sm text-[#92adc9]">Time to tailor a resume</p>
          </div>
          <div className="bg-[#1c2b39] border border-[#324d67] rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-[#137fec] mb-2">90%+</div>
            <p className="text-sm text-[#92adc9]">ATS keyword match rate</p>
          </div>
          <div className="bg-[#1c2b39] border border-[#324d67] rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-[#137fec] mb-2">Unlimited</div>
            <p className="text-sm text-[#92adc9]">Career history entries</p>
          </div>
        </div>
      </div>
    </div>
  );
}
