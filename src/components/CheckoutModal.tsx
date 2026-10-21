import { useState, useEffect } from "react"
import { X, Check, Copy, ShieldCheck, ArrowRight } from "lucide-react"

type TProps = {
    isOpen: boolean;
    onClose: () => void;
    zelleInfo?: string;
    venmoUsername?: string;
    cashAppTag?: string;
    whatsappNumber?: string;
}

export function CheckoutModal({
                                 isOpen,
                                 onClose,
                                 zelleInfo = "dani.training@gmail.com",
                                 venmoUsername = "Dani-Training",
                                 cashAppTag = "$DaniTraining",
                                 whatsappNumber = "+19047053626"
                             }: TProps) {

    const [copiedField, setCopiedField] = useState<string | null>(null)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }

        if (isOpen) {
            document.body.style.overflow = "hidden"
            window.addEventListener("keydown", handleKeyDown)
        }

        return () => {
            document.body.style.overflow = "unset"
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text)
        setCopiedField(field)
        setTimeout(() => setCopiedField(null), 2500)
    }

    const whatsappMessageUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi Dani! I just sent the $15 fee for Hybrid Training. Here is my receipt to confirm my spot!"
    )}`

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                className="bg-surface border border-neutral-700 w-full max-w-md rounded-2xl p-6 relative shadow-2xl animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 cursor-pointer"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center">
                    <div className="inline-block bg-green-neon/20 text-green-neon text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                        Direct Instant Payment
                    </div>
                    <h3 className="text-xl font-black uppercase text-white">Claim Your Spot</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                        Hybrid Training • <strong className="text-green-neon">$15.00 / week</strong>
                    </p>
                </div>

                <div className="mt-5 space-y-3">
                    <div className="bg-dark border border-tb p-3.5 rounded-xl flex items-center justify-between">
                        <div>
              <span className="text-[10px] font-black uppercase text-[#7414CA] tracking-wider bg-[#7414CA]/15 px-2 py-0.5 rounded">
                Zelle
              </span>
                            <p className="text-sm font-bold text-white mt-1 select-all">{zelleInfo}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => copyToClipboard(zelleInfo, "zelle")}
                            className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-green-neon rounded-lg border border-tb transition-colors cursor-pointer"
                            title="Copy Zelle info"
                        >
                            {copiedField === "zelle" ? (
                                <Check className="w-4 h-4 text-green-neon" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </button>
                    </div>

                    <div className="bg-dark border border-tb p-3.5 rounded-xl flex items-center justify-between">
                        <div>
              <span className="text-[10px] font-black uppercase text-[#008CFF] tracking-wider bg-[#008CFF]/15 px-2 py-0.5 rounded">
                Venmo
              </span>
                            <p className="text-sm font-bold text-white mt-1">@{venmoUsername}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => copyToClipboard(venmoUsername, "venmo")}
                            className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-green-neon rounded-lg border border-tb transition-colors cursor-pointer"
                            title="Copy Venmo username"
                        >
                            {copiedField === "venmo" ? (
                                <Check className="w-4 h-4 text-green-neon" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </button>
                    </div>

                    <div className="bg-dark border border-tb p-3.5 rounded-xl flex items-center justify-between">
                        <div>
              <span className="text-[10px] font-black uppercase text-[#00D632] tracking-wider bg-[#00D632]/15 px-2 py-0.5 rounded">
                Cash App
              </span>
                            <p className="text-sm font-bold text-white mt-1">{cashAppTag}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => copyToClipboard(cashAppTag, "cashapp")}
                            className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-green-neon rounded-lg border border-tb transition-colors cursor-pointer"
                            title="Copy Cash App tag"
                        >
                            {copiedField === "cashapp" ? (
                                <Check className="w-4 h-4 text-green-neon" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="mt-5 p-3.5 rounded-xl bg-green-neon/10 border border-green-neon/30 text-xs text-neutral-300">
                    <p className="font-semibold text-white">
                        📸 Next Step: Send Payment Confirmation
                    </p>
                    <p className="mt-0.5 text-[11px] text-neutral-400">
                        After sending the $15, tap below to forward your receipt screenshot directly to Dani’s WhatsApp to confirm your spot.
                    </p>
                </div>

                <div className="mt-4">
                    <a
                        href={whatsappMessageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 bg-green-neon hover:bg-green-neonHover text-black font-black uppercase text-xs tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_var(--color-green-neonGlow)] cursor-pointer"
                    >
                        <span>Send Confirmation on WhatsApp</span>
                        <ArrowRight className="w-4 h-4 stroke-3" />
                    </a>
                </div>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-neutral-500">
                    <ShieldCheck className="w-4 h-4 text-green-neon" />
                    <span>Zero processing fees • Direct to instructor</span>
                </div>
            </div>
        </div>
    );
}