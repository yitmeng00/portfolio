import { useState } from "react";
import { IoReorderTwoOutline, IoCloseOutline } from "react-icons/io5";

export function NavbarBtn({ toggleNavbar }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        toggleNavbar();
    };

    return (
        <div onClick={handleToggle} className="fixed z-20 end-14 top-10">
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
