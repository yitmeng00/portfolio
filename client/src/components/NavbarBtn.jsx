import { useState } from "react";
import { IoReorderTwoOutline, IoCloseOutline } from "react-icons/io5";

export function NavbarBtn({ toggleNavbar }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        toggleNavbar();
    };

    return (
        <div
            onClick={handleToggle}
            id="navbar__collapsible-btn"
            className="absolute z-10 end-14 top-10"
        >
            <button className="rounded-full bg-gray-200 p-3 text-5xl">
                {isOpen ? <IoCloseOutline /> : <IoReorderTwoOutline />}
            </button>
        </div>
    );
}
