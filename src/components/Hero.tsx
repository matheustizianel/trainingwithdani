import {
    Calendar,
    Clock,
    ExternalLink,
    MapPin,
    Sparkles,
    CircleChevronRightIcon,
    ShieldCheck,
    ArrowRight
} from "lucide-react";

type TProps = {
    onOpenLocation: () => void;
    onLearnMore: () => void;
    onCTAClick: () => void;
}

export function Hero({ onOpenLocation, onLearnMore, onCTAClick }: TProps) {
    return (
        <section className="w-full pt-16 pb-16 px-4 flex flex-col items-center justify-center bg-dark overflow-hidden border-b border-tb">
            <div className="flex justify-center items-center gap-2 px-4 py-3 rounded-full border border-green-neon/40 bg-dark/80 shadow-[0_0_15px_var(--color-green-neonGlow)] select-none">
                <Sparkles className="w-4 h-4 text-green-neon" />
                <span className="text-sm font-bold text-white uppercase">Outdoor Group Workout</span>
            </div>

            <div className="mt-6 text-center">
                <h1 className="flex flex-col text-6xl sm:text-7xl md:text-8xl font-black italic uppercase leading-[0.9]">
                    <span>HYBRID</span>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-green-neon to-emerald-400 drop-shadow-[0_0_35px_rgba(163,230,53,0.45)]">
                        TRAINING
                    </span>
                </h1>

                <p className="mt-4 text-zinc-400 italic text-md font-medium tracking-wide">
                    "More than a workout, an evolution."
                </p>
            </div>

            <div className="mt-10 w-full max-w-5xl p-2.5 sm:p-3 rounded-2xl bg-[#121212]/90 border border-zinc-800/80 shadow-2xl backdrop-blur-md">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                    <div className="relative bg-surface/80 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-zinc-800/60 min-h-22">
                        <span className="absolute -top-3 bg-linear-to-r from-emerald-400 to-green-neon text-black text-xs font-black uppercase px-3 py-1 rounded-full shadow-sm">
                            Classes start Oct 24th
                        </span>

                        <Calendar className="w-6 h-6 mt-2 text-green-neon mb-1" />

                        <span className="text-[10px] font-bold uppercase mb-2.5 tracking-wider text-neutral-400">
                            Class Schedule
                        </span>

                        <p className="text-xs sm:text-sm font-black uppercase text-white mt-0.5">
                            EVERY SATURDAY
                        </p>
                    </div>

                    <div className="bg-surface/80 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-zinc-800/60 min-h-22">
                        <Clock className="w-6 h-6 text-green-neon mb-1" />

                        <span className="text-[10px] font-bold uppercase mb-2.5 tracking-wider text-neutral-400">
                            Time
                        </span>

                        <p className="text-xs sm:text-sm font-black uppercase text-white mt-0.5">
                            08:30 AM
                        </p>
                    </div>

                    <button
                        type="button"
                        className="group bg-surface/80 border border-zinc-800/60 rounded-xl p-4 flex flex-col items-center justify-between text-left min-h-22 hover:border-green-neon/60 transition-all hover:bg-neutral-900 cursor-pointer"
                        onClick={onOpenLocation}
                    >
                        <div className="flex flex-col items-center justify-between gap-1 text-neutral-400 mb-4 w-full">
                            <MapPin className="w-6 h-6 text-green-neon mb-1 group-hover:scale-110 transition-transform" />

                            <span className="text-xs uppercase font-semibold group-hover:text-green-neon transition-colors">Location</span>
                        </div>

                        <div>
                            <div className="flex gap-2 mb-2">
                                <p className="text-sm font-black text-white uppercase leading-tight flex items-center justify-between">
                                    Outdoor Park
                                </p>
                                <ExternalLink className="w-6 h-6 text-neutral-500 group-hover:text-green-neon transition-colors" />
                            </div>

                            <span className="text-xs group-hover:text-green-neon font-semibold underline underline-offset-2 transition-colors">
                                Tap To open
                            </span>
                        </div>
                    </button>

                    <div className="bg-[#101908] rounded-xl p-4 flex flex-col items-center justify-center text-center border border-lime-500/40 min-h-22">
                        <span className="text-[10px] font-bold uppercase mt-1 mb-2.5 tracking-wider text-green-neon">
                          Weekly Fee
                        </span>

                        <p className="text-xl sm:text-3xl font-black text-green-neon leading-tight">
                            $15
                            <span className="text-xs font-semibold text-neutral-400">/week</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex gap-3 items-center mt-6 px-5 py-2 rounded-full border border-green-neon bg-dark/90 shadow-[0_0_20px_var(--color-green-neonGlow)] select-none">
                <CircleChevronRightIcon className="w-6 h-6" />
                <span className="text-xs font-black uppercase tracking-widest text-green-neon">
                    Are you ready for the challenge?
                </span>
                <CircleChevronRightIcon className="w-6 h-6" />
            </div>

            <div className="mt-6 flex items-center gap-1.5 text-xs text-neutral-500 font-medium select-none">
                <ShieldCheck className="w-6 h-6 text-green-neon" />
                <span>Direct and secure checkout processed via <strong className="text-neutral-400 font-bold">Stripe</strong></span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl">
                <button
                    type="button"
                    onClick={onCTAClick}
                    className="w-full sm:flex-1 py-4 px-6 bg-green-neon hover:bg-green-neonHover text-black font-black uppercase text-xs sm:text-sm tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_var(--color-green-neon-glow)] hover:scale-[1.02] cursor-pointer"
                >
                    <span>Be part of our training group now</span>
                    <ArrowRight className="w-6 h-6 stroke-3" />
                </button>

                <button
                    type="button"
                    onClick={onLearnMore}
                    className="w-full sm:w-auto py-4 px-6 bg-[#1a1a1a] hover:bg-neutral-800 text-neutral-200 font-bold uppercase text-xs sm:text-sm tracking-wider rounded-xl border border-neutral-800 transition-colors cursor-pointer"
                >
                    Learn More
                </button>
            </div>
        </section>
    )
}