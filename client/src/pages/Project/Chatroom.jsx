import { useState } from "react";
import { NavbarBtn } from "../../components/Navbar";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

export function Chatroom() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <NavbarBtn toggleNavbar={toggleNavbar} />
            {navbarOpen ? <Navbar /> : null}
            <div className="relative">
                <div className="bg-primary-200 px-10 py-24 text-center sm:text-7xl text-5xl text-primary-600 font-bold">
                    <p>Chatroom</p>
                </div>
                <div className="xl:px-40 lg:px-32 px-10 py-10">
                    <div className="flex flex-col items-center mb-3">
                        <img
                            src="/portfolio/assets/project/chatroom.png"
                            alt="Chatroom"
                            className="size-3/4"
                        />
                    </div>
                    <div className="mb-8">
                        <div className="flex flex-row gap-3">
                            <div>
                                <h3>ABOUT THIS PROJECT</h3>
                            </div>
                            <div>
                                <p className="px-2 py-1 rounded-full bg-green-200 text-sm">
                                    Completed
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 text-justify">
                            <h6>
                                I developed a Chatroom as a chat client for my
                                personal project, focusing on facilitating
                                real-time conversations in an interactive and
                                user-friendly environment. The Chatroom allows
                                users to engage in discussions, share ideas, and
                                connect with others seamlessly.
                            </h6>
                            <h6>
                                One of the defining features of this Chatroom is
                                its versatility in user interaction. Users have
                                the option to enter the chatroom with their
                                preferred usernames, enabling personalized
                                conversations and easy identification within the
                                chat. Alternatively, users can choose to join
                                anonymously, preserving privacy while
                                participating in discussions.
                            </h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>TECH STACK</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <div className="rounded border border-black px-2 py-1">
                                <p>HTML</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>CSS</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Tailwind</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>JavaScript</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>WebSocket</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Node.js</p>
                            </div>
                            <div className="rounded border border-black px-2 py-1">
                                <p>Express</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
