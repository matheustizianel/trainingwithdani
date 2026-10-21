type TProps = {
    whatsappNumber?: string;
};

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

export function Footer({whatsappNumber = "+553184665184"}: TProps) {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Dani!%20I'd%20like%20more%20information%20about%20Hybrid%20Training.`;

    return (
        <footer className="w-full border-t border-tb bg-dark/80 backdrop-blur-sm select-none">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-neutral-500">
                <div>
                    <p className="font-semibold text-green-neon text-sm">
                        Training With Dani - Hybrid Workout
                    </p>
                    <p className="mt-2 text-neutral-400">
                        $15/month Fee • All Saturdays Included
                    </p>
                    <p className="mt-2 uppercase tracking-wider text-[10px] text-neutral-400">
                        All rights reserved
                    </p>
                </div>
                <div className="flex items-center gap-3">
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