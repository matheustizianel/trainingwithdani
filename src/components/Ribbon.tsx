type TProps = {
    text?: string
}

export function Ribbon({text}: TProps) {
    return (
        <div className="w-full flex items-center bg-green-neon text-black font-bold uppercase text-s py-2 overflow-hidden select-none">
            <div className="flex shrink-0 whitespace-nowrap animate-ribbon">
                <span className="mx-4">
                    {text}
                </span>

                <span className="mx-4">
                    {text}
                </span>

                <span className="mx-4">
                    {text}
                </span>

                <span className="mx-4">
                    {text}
                </span>
            </div>
        </div>
    )
}