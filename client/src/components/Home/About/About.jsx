import { Skill } from "./Skill";
import { NavLink } from "react-router-dom";
import { PiArrowSquareOutLight } from "react-icons/pi";

export function About() {
    return (
        <section className="mb-24 xl:px-96 lg:px-52 px-10">
            <div className="mb-12">
                <div className="flex flex-row gap-3">
                    <div>
                        <h2>ABOUT</h2>
                    </div>
                    <div className="hover:text-primary-400 text-2xl relative group/item">
                        <NavLink to={"/about"}>
                            <PiArrowSquareOutLight />
                        </NavLink>
                        <div className="absolute top-0 left-8 invisible group-hover/item:visible">
                            <p className="text-sm">more details</p>
                        </div>
                    </div>
                </div>
                <div className="mb-4 text-justify">
                    <h6>
                        I'm a Full-Stack Software Engineer with a strong passion
                        in database architecture and optimization. I've
                        successfully implemented end-to-end solutions,
                        integrating solutions across the entire software stack.
                        My focus on continual learning drives me to deliver
                        impactful and scalable software solutions.
                    </h6>
                </div>
                <div className="text-justify">
                    <h6>
                        Outside of my work, I'm really into photography. I enjoy
                        capturing landscapes, potraits, and animals, which allows
                        me to express my creativity and attention to detail in a
                        different way. Besides, I love both indoor and outdoor sports such as
                        badminton, tennis, jogging, swimming, and hiking.
                    </h6>
                </div>
            </div>
            <Skill />
        </section>
    );
}
