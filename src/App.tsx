import {useState} from "react"

import {Ribbon} from "./components/Ribbon.tsx"
import {Header} from "./components/Header.tsx"
import {Hero} from "./components/Hero.tsx"
import {TrainingDetails} from "./components/TrainingDetails.tsx"
import {Carousel} from "./components/Carousel.tsx"

import {LocationModal} from "./components/LocationModal.tsx"
import {CheckoutModal} from "./components/CheckoutModal.tsx"

import {STRIPE_PAYMENT_LINK} from "./services/stripe.ts"

export function App() {
    const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false)
    const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false)

    function handleClick() {
        if (STRIPE_PAYMENT_LINK) {
            window.open(STRIPE_PAYMENT_LINK, "_blank");
        } else {
            setIsCheckoutOpen(true)
        }
    }

    function handleLearnMore() {
        const el = document.getElementById("workout-details");
        el?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="min-h-screen bg-dark text-white selection:bg-green-neon selection:text-black">
            <main>
                <Ribbon text="Limited spots per group • Weekly Fee: Only $15/week for all saturdays • Flexible class reschedule with your Personal Trainer Daniela Viega" />

                <Header onCTAClick={handleClick} />

                <Hero
                    onLearnMore={handleLearnMore}
                    onCTAClick={handleClick}
                    onOpenLocation={() => setIsLocationOpen(true)}
                />

                <TrainingDetails id="workout-details" />

                <Carousel />
            </main>

            <footer className="flex justify-between items-center max-w-6xl mx-auto py-8 text-center text-xs text-neutral-500">
                <div>
                    <p className="font-semibold text-green-neon">
                        Training With Dani - Hybrid Workout
                    </p>

                    <p className="mt-1">$15/week Fee • All Saturdays Included • Direct Stripe Billing</p>

                    <p className="mt-1 uppercase">All rights reserved</p>
                </div>

                <div className="flex gap-2.5">
                    <a className=" bg-green-neonGlow/20 rounded-lg p-4 inline-flex justify-center items-center">
                        <img src="/instagram.svg"  alt="instagram logo" />
                    </a>

                    <a className=" bg-green-neonGlow/20 rounded-lg p-4 inline-flex justify-center items-center">
                        <img src="/whatsapp.svg"  alt="whatsApp logo" />
                    </a>
                </div>
            </footer>

            <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
            <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
        </div>
    )
}