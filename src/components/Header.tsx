import logo from "../assets/logo-twd-dark.jpeg"

type TProps = {
    onCTAClick: () => void;
}

export function Header({ onCTAClick }: TProps) {
    return (
        <header className="w-full border-b border-tb/80 sticky top-0 z-40 bg-dark/80 backdrop-blur-3xl backdrop-saturate-150 shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-all">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3.5 select-none">
                    <div className="w-16 h-16 bg-green-neon text-black rounded-xl flex items-center justify-center font-black text-2xl shadow-[0_0_20px_var(--color-green-neon-glow)] shrink-0">
                        <img src={logo} alt={"TWD - Training With Dani logo"} />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl text-white uppercase">
                            Training
                            <span className="text-green-neon"> With Dani</span>
                        </h1>
                        <span className="text-sm font-bold uppercase mt-1 text-zinc-400">Hybrid Workout</span>
                    </div>
                </div>

                <button
                    onClick={onCTAClick}
                    className="bg-green-neon hover:bg-green-neonHover text-black font-bold uppercase text-xs sm:text-sm tracking-wider px-6 py-3 rounded-full transition-all duration-200 shadow-[0_0_20px_var(--color-green-neonGlow)] hover:scale-105 cursor-pointer">

                    Reserve your Spot • $15
                </button>
            </div>
        </header>
    )
}