import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import slide1 from "../assets/Agility & Metabolic Burn.jpg"
import slide2 from "../assets/group workout section.jpg"
import slide3 from "../assets/two people running.jpg"

type TSlide = {
    src: string;
    title: string;
    caption: string;
}

const SLIDES: TSlide[] = [
    {
        src: slide1,
        title: "Agility & Metabolic Burn",
        caption: "High-intensity interval stations engineered to spike fat burn and elevate endurance."
    },
    {
        src: slide2,
        title: "Functional Strength & Conditioning",
        caption: "High-energy outdoor drills utilizing free weights, medicine balls, and resistance circuits."
    },
    {
        src: slide3,
        title: "Coaching & Direct Guidance",
        caption: "Daniela Viega personally inspects your posture, form, and technique throughout each station."
    },
]



export function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    function prev() {
        setCurrentSlide(curr => (curr - 1 + SLIDES.length) % SLIDES.length)
    }

    function next() {
        setCurrentSlide(curr => (curr + 1) % SLIDES.length)
    }

    return (
        <section className="py-16 px-4 bg-surface/40">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-end mb-6">
                    <span className="text-xs font-black uppercase text-green-neon tracking-widest">Class Atmosphere</span>
                    <h2 className="text-3xl font-black uppercase tracking-tight mt-1 text-white">Experience The Workout</h2>
                </div>

                <div className="relative rounded-3xl overflow-hidden bg-dark border border-tb shadow-2xl">
                    <div className="relative h-72 sm:h-96 md:h-120 w-full overflow-hidden">
                        <img
                            src={SLIDES[currentSlide].src}
                            alt={SLIDES[currentSlide].title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6 z-10">
                            <div className="inline-block bg-green-neon text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded mb-2 shadow-sm">
                                In motion
                            </div>
                            <h3 className="text-xl md:text-2xl font-black uppercase text-white drop-shadow-md">
                                {SLIDES[currentSlide].title}
                            </h3>
                            <p className="text-xs md:text-sm text-neutral-300 mt-1 max-w-xl">
                                {SLIDES[currentSlide].caption}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-green-neon transition-all border border-neutral-700 cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        type="button"
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-green-neon transition-all border border-neutral-700 cursor-pointer"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-tb">
                        {SLIDES.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-2 rounded-full transition-all cursor-pointer ${
                                    currentSlide === idx ? "w-6 bg-green-neon" : "w-2 bg-neutral-600 hover:bg-neutral-400"
                                }`}
                                aria-label={`Slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>




        </section>
    )
}