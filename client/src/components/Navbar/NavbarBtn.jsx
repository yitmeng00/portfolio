import { useState } from "react";
import { IoReorderTwoOutline, IoCloseOutline } from "react-icons/io5";

export function NavbarBtn({ toggleNavbar }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        toggleNavbar();
    };

    return (
        <div onClick={handleToggle} className="fixed z-20 sm:end-14 sm:top-10 end-6 top-6">
            <button
                id="navbar__collapsible-btn"
                className={`rounded-full p-3 text-5xl ${
                    isOpen ? "bg-primary-200" : "bg-primary-300"
                }`}
            >
                {isOpen ? <IoCloseOutline /> : <IoReorderTwoOutline />}
            </button>
        </div>
    );
}
