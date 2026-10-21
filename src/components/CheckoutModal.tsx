import { useEffect } from "react";
import { CreditCard, X, ShieldCheck, Check } from "lucide-react";
import { STRIPE_PAYMENT_LINK } from "../services/stripe";

type TProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function CheckoutModal({ isOpen, onClose }: TProps) {
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

    const handleProceed = () => {
        if (STRIPE_PAYMENT_LINK) {
            window.open(STRIPE_PAYMENT_LINK, "_blank");
            onClose();
        } else {
            alert("Please paste the Dani's Stripe Payment Link into src/services/stripe.ts");
        }
    };

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
                    className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-lg"
                    aria-label="Close checkout modal"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center">
                    <div className="w-12 h-12 bg-green-neon/20 text-green-neon rounded-full flex items-center justify-center mx-auto mb-3">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black uppercase text-white">Monthly Subscription</h3>
                    <p className="text-xs text-neutral-400 mt-1">Full access to all Saturday group training sessions</p>
                </div>

                <div className="my-5 p-4 rounded-xl bg-dark border border-tb space-y-2.5 text-xs">
                    <div className="flex justify-between text-neutral-300">
                        <span>Program:</span>
                        <span className="font-bold text-white">Hybrid Training (Saturdays)</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                        <span>Rescheduling:</span>
                        <span className="font-bold text-green-neon flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Flexible with Dani
            </span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                        <span>Billing Cycle:</span>
                        <span className="text-neutral-400">Monthly recurring (cancel anytime)</span>
                    </div>
                    <div className="flex justify-between text-neutral-300 pt-2 border-t border-tb text-sm font-black">
                        <span>Total:</span>
                        <span className="text-green-neon">$15.00 / month</span>
                    </div>
                </div>

                <div className="space-y-3">
                    <button
                        type="button"
                        onClick={handleProceed}
                        className="w-full py-3.5 bg-green-neon hover:bg-green-neonHover text-black font-black uppercase text-xs tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_var(--color-green-neonGlow)] cursor-pointer"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Proceed to Secure Stripe Checkout
                    </button>
                    <p className="text-[10px] text-center text-neutral-500">
                        Encrypted payment processed directly into instructor's verified account.
                    </p>
                </div>
            </div>
        </div>
    );
}