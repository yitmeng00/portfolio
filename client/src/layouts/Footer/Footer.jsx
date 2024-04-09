import { PiCopyright } from "react-icons/pi";

export function Footer() {
    return (
        <footer>
            <div className="flex flex-row justify-center gap-1 bg-primary-200 py-2">
                <div className="self-center">
                    <PiCopyright />
                </div>
                <p> 2024. Designed & Developed by Ivan.</p>
            </div>
        </footer>
    );
}
