import {useEffect} from "react"
import {MapPin, X, ExternalLink} from "lucide-react"

type TProps = {
    isOpen: boolean;
    onClose: () => void;
}

export function LocationModal({isOpen, onClose}: TProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                className="bg-surface border border-neutral-700 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl relative animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-4 border-b border-tb bg-dark/80">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-green-neon"/>
                        <h3 className="font-black text-sm uppercase tracking-wide text-white">
                            Meeting Point Location
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6"/>
                    </button>
                </div>

                <div className="p-4 space-y-4">
                    <div className="w-full h-64 rounded-xl overflow-hidden border border-tb bg-black">
                        <iframe
                            title="Workout Location Map"
                            width="100%"
                            height="100%"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1371.6357692197728!2d-81.5216907303171!3d30.122952158419462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5cd0004694701%3A0xc50bb1b59097794d!2sLuxor%20Club%20Playground!5e1!3m2!1sen!2sus!4v1792556292093!5m2!1sen!2sus"
                            loading="lazy"
                            className="opacity-90 contrast-125"
                        />
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-base">Outdoor Park at Luxor Club</h4>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                            Meeting time is <strong>08:20 AM</strong> (workout starts promptly at 8:30 AM). Look for
                            Dani right by outdoor park parking lot.
                        </p>
                    </div>

                    <div className="bg-dark p-3 rounded-xl border border-tb text-xs text-neutral-400">
                        🚗 <strong>Parking:</strong> No Fee to park your vehicle.
                    </div>

                    <a
                        href="https://maps.app.goo.gl/JqXHwuPQFant88Vs8"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3 bg-green-neon hover:bg-green-neonHover text-black font-black uppercase text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_var(--color-green-neonGlow)]"
                    >
                        <ExternalLink className="w-6 h-6"/>
                        Open in your Maps app
                    </a>
                </div>
            </div>
        </div>
    )
}