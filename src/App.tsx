import {useState} from "react"

import {Ribbon} from "./components/Ribbon.tsx"
import {Header} from "./components/Header.tsx"
import {Hero} from "./components/Hero.tsx"
import {TrainingDetails} from "./components/TrainingDetails.tsx"
import {Carousel} from "./components/Carousel.tsx"
import {Footer} from "./components/Footer.tsx"

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

            <Footer />

            <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
            <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
        </div>
    )
}