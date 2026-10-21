type TProps = {
    instagramHandle?: string;
    whatsappNumber?: string;
};

function SimpleInstagramIcon({ className }: { className?: string }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
    );
}

function SimpleWhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.276-.101-.477-.15-.678.15-.2.3-.778.977-.954 1.178-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.635-.929-2.242-.244-.59-.493-.51-.678-.52-.176-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.482 1.079 2.913 1.23 3.114.15.2 2.126 3.246 5.15 4.553.72.311 1.282.497 1.721.637.723.23 1.381.197 1.901.12.58-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.176-1.429-.076-.126-.276-.201-.577-.351zM12.042 0C5.394 0 0 5.393 0 12.042c0 2.123.555 4.197 1.609 6.02L0 24l6.126-1.607a12.003 12.003 0 0 0 5.916 1.549h.005c6.648 0 12.042-5.395 12.042-12.044 0-3.218-1.253-6.243-3.528-8.519C18.285 1.253 15.26 0 12.042 0zm0 22.013h-.004a9.99 9.99 0 0 1-5.097-1.392l-.365-.217-3.785.993 1.01-3.69-.238-.379a9.998 9.998 0 0 1-1.536-5.286c0-5.526 4.496-10.022 10.026-10.022 2.678 0 5.195 1.043 7.088 2.937a10.003 10.003 0 0 1 2.935 7.088c0 5.527-4.497 10.023-10.024 10.023z"/>
        </svg>
    );
}

export function Footer({instagramHandle = "danielaviegaeua", whatsappNumber = "+19047053626"}: TProps) {
    const instagramUrl = `https://instagram.com/${instagramHandle}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Dani!%20I'd%20like%20more%20information%20about%20Hybrid%20Training.`;

    return (
        <footer className="w-full border-t border-tb bg-dark/80 backdrop-blur-sm select-none">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-neutral-500">
                <div>
                    <p className="font-semibold text-green-neon text-sm">
                        Training With Dani - Hybrid Workout
                    </p>
                    <p className="mt-2 text-neutral-400">
                        $15/month Fee • All Saturdays Included • Direct Stripe Billing
                    </p>
                    <p className="mt-2 uppercase tracking-wider text-[10px] text-neutral-400">
                        All rights reserved
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram profile"
                        className="group p-3 rounded-xl bg-surface border border-tb text-neutral-400 hover:text-green-neon hover:border-green-neon/50 hover:bg-neutral-900 hover:shadow-[0_0_15px_var(--color-green-neonGlow)] transition-all duration-200 hover:scale-110 cursor-pointer inline-flex items-center justify-center"
                    >
                        <SimpleInstagramIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
                    </a>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact via WhatsApp"
                        className="group p-3 rounded-xl bg-surface border border-tb text-neutral-400 hover:text-green-neon hover:border-green-neon/50 hover:bg-neutral-900 hover:shadow-[0_0_15px_var(--color-green-neonGlow)] transition-all duration-200 hover:scale-110 cursor-pointer inline-flex items-center justify-center"
                    >
                        <SimpleWhatsAppIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
                    </a>
                </div>
            </div>
        </footer>
    );
}