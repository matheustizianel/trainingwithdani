import {
    Dumbbell,
    HeartPulse,
    Flame,
    Trophy,
    RefreshCw,
    CheckCircle2
} from "lucide-react";

type TProps = {
    id?: string;
}

export function TrainingDetails({id}: TProps) {
    return (
        <section id={id} className="py-16 px-4 max-w-6xl mx-auto">
            <div className="bg-surface border border-tb rounded-3xl p-6 sm:p-6 lg:p-10 shadow-2xl overflow-hidden">
                <div className="w-full">
                    <span className="text-xs font-black uppercase text-green-neon tracking-widest">Exclusive Coaching</span>
                    <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-1">
                        What is <strong className="text-green-neon">Hybrid Training</strong>?
                    </h2>
                    <p className="text-neutral-300 mt-4 leading-relaxed text-sm sm:text-base">
                        <strong className="text-green-neon">Hybrid Training</strong> combines <strong className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-neon">functional strength</strong>, <strong className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-neon">core stability</strong>, <strong className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-neon">metabolic endurance</strong>, and <strong className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-neon">athletic conditioning</strong> in an outdoor refreshing atmosphere under the open sky. Led directly by <strong className="text-green-neon">Daniela Viega</strong>, each session is carefully developed to build full-body power, burn calories in a fast pace, and improve your cardiovascular health.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-tb">
                    <div className="group bg-dark/70 border border-tb p-6 rounded-2xl flex flex-col items-center gap-4 transition-all hover:border-green-neonGlow">
                        <div className=" bg-green-neonGlow/20 rounded-lg p-3 inline-flex justify-center items-center">
                            <Dumbbell className="w-8 h-8 text-green-neon group-hover:scale-110 transition-transform" />
                        </div>

                        <div className="flex flex-col items-center text-center gap-2">
                            <h2 className="uppercase font-black">More Strength</h2>
                            <p className="text-xs text-neutral-400">Compound movements with free weights and sandbags for functional power.</p>
                        </div>
                    </div>

                    <div className="group bg-dark/70 border border-tb p-6 rounded-2xl flex flex-col items-center gap-4 transition-all hover:border-green-neonGlow">
                        <div className=" bg-green-neonGlow/20 rounded-lg p-3 inline-flex justify-center items-center">
                            <HeartPulse className="w-8 h-8 text-green-neon group-hover:scale-110 transition-transform" />
                        </div>

                        <div className="flex flex-col items-center text-center gap-2">
                            <h2 className="uppercase font-black">More Endurance</h2>
                            <p className="text-xs text-neutral-400">Stamina-building circuits designed to elevate real-world aerobic capacity.</p>
                        </div>
                    </div>

                    <div className="group bg-dark/70 border border-tb p-6 rounded-2xl flex flex-col items-center gap-4 transition-all hover:border-green-neonGlow">
                        <div className=" bg-green-neonGlow/20 rounded-lg p-3 inline-flex justify-center items-center">
                            <Flame className="w-8 h-8 text-green-neon group-hover:scale-110 transition-transform" />
                        </div>

                        <div className="flex flex-col items-center text-center gap-2.5">
                            <h2 className="uppercase font-black">More Conditioning</h2>
                            <p className="text-xs text-neutral-400">Dynamic agility and core drills that ramp up your metabolic burn.</p>
                        </div>
                    </div>

                    <div className="group bg-dark/70 border border-tb p-6 rounded-2xl flex flex-col items-center gap-4 transition-all hover:border-green-neonGlow">
                        <div className=" bg-green-neonGlow/20 rounded-lg p-3 inline-flex justify-center items-center">
                            <Trophy className="w-8 h-8 text-green-neon group-hover:scale-110 transition-transform" />
                        </div>

                        <div className="flex flex-col items-center text-center gap-2">
                            <h2 className="uppercase font-black">More Achievements</h2>
                            <p className="text-xs text-neutral-400">Celebrate weekly physical milestones alongside an inspiring community.</p>
                        </div>
                    </div>
                </div>

                <a
                    href="https://wa.me/+553184665184"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer mt-6 gap-4 sm:gap-6 lg:gap-10 bg-dark/90 border border-green-neon/20 rounded-2xl p-5 sm:p-6"
                >
                    <div className="flex items-start gap-3 flex-1">
                        <div className="bg-green-neonGlow/20 rounded-lg p-3 inline-flex justify-center items-center shrink-0">
                            <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-green-neon group-hover:rotate-180 transition-transform ease-out duration-300" />
                        </div>

                        <div>
                            <h2 className="uppercase mb-1 sm:mb-2 font-bold text-white text-sm sm:text-base leading-snug">
                                Need to reschedule? No problem!
                            </h2>
                            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                                Life happens. Students can reschedule any Saturday session directly with Dani for an upcoming date or makeup class.
                            </p>
                        </div>
                    </div>

                    <div className="self-start sm:self-center px-4 py-2.5 sm:px-5 sm:py-3 flex justify-center items-center gap-2.5 bg-green-neonGlow/20 rounded-lg text-green-neon font-medium shrink-0">
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        <span className="text-xs sm:text-sm whitespace-nowrap">Flexible Makeup Guaranteed</span>
                    </div>
                </a>
            </div>
        </section>
    )
}