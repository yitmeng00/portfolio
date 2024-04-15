import { NavLink } from "react-router-dom";
import CodeBlock from "./CodeBlock";

export function About() {
    const code = `const FUNFACTS = [
    "I can spend up to 2 / 3 hours at the same location to capture the perfect picture of a scenery or attraction, while most people only stay for 5 minutes.",
    "I once traveled overseas alone for a week, even though I didn't understand the language at all.",
];

FUNFACTS.forEach((funfact, index) => {
    console.log(\`Fun Fact \${index + 1}: \${funfact}\`);
});`;

    return (
        <>
            <div className="bg-primary-200 px-10 py-24 text-center sm:text-7xl text-5xl text-primary-600 font-bold">
                <p>ABOUT</p>
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10 flex flex-col gap-10 text-justify">
                <div>
                    <h6>
                        Hey there! I've always been that kid who asked "why" a
                        million times and never quite grew out of it. Learning
                        new things has been my passion forever. It's like
                        there's this whole world out there, waiting to be
                        explored, understood, and improved. That's why I dove
                        into the world of technology; it's the modern-day magic
                        wand that makes life more efficient, easier, safer, and
                        more fun.
                    </h6>
                </div>
                <div>
                    <h6>
                        Currently, I'm on the IT path as a full-stack software
                        engineer. My responsibilities involve delivering digital
                        solutions from scratch. I have successfully implemented
                        and delivered projects such as project management
                        system, e-claim system, and IoT monitoring system.
                    </h6>
                </div>
                <div>
                    <h6>
                        When I'm not writing code, or doing tech stuff, you'll
                        often find me with a camera in hand. Photography is my
                        zen zone. From sweeping landscapes to candid portraits
                        and even those adorable animal moments, I love freezing
                        life's beautiful moments in pixels.
                    </h6>
                </div>
                <div>
                    <h6>
                        And hey, life's not just about work; I love sports too
                        such as badminton, tennis, jogging, swimming, and
                        hiking. Besides sports, I'm big on giving back. Whether
                        it's getting my hands dirty planting trees, lending a
                        paw at the local pet shelter, or doing my bit for
                        cleaner beaches, I believe in making a positive mark
                        wherever I go. These activities bring balance to my life
                        and contribute to my overall well-being.
                    </h6>
                </div>
                <div>
                    <h6>
                        So yeah, that's me—a curious tech enthusiast,
                        photography enthusiast, sports lover, and someone who's
                        passionate about making a positive impact. Always ready
                        for the next adventure and looking to make a meaningful
                        impact along the way!
                    </h6>
                </div>
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10">
                <CodeBlock language="javascript" code={code} />
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10">
                <div>
                    <h2>TECH STACK</h2>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    <div>
                        <div className="mb-2 w-max border-2 border-b-primary-600 border-t-transparent border-x-transparent">
                            <h5>FRONT-END</h5>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>
                                <h6>React</h6>
                            </div>
                            <div>
                                <h6>Vite</h6>
                            </div>
                            <div>
                                <h6>JavaScript</h6>
                            </div>
                            <div>
                                <h6>TypeScript</h6>
                            </div>
                            <div>
                                <h6>jQuery</h6>
                            </div>
                            <div>
                                <h6>HTML</h6>
                            </div>
                            <div>
                                <h6>CSS</h6>
                            </div>
                            <div>
                                <h6>Bootstrap</h6>
                            </div>
                            <div>
                                <h6>Tailwind</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 w-max border-2 border-b-primary-600 border-t-transparent border-x-transparent">
                            <h5>BACK-END</h5>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>
                                <h6>Node.js</h6>
                            </div>
                            <div>
                                <h6>Express</h6>
                            </div>
                            <div>
                                <h6>Sequelize</h6>
                            </div>
                            <div>
                                <h6>Mongoose</h6>
                            </div>
                            <div>
                                <h6>PHP</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 w-max border-2 border-b-primary-600 border-t-transparent border-x-transparent">
                            <h5>DATABASE</h5>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>
                                <h6>MongoDB</h6>
                            </div>
                            <div>
                                <h6>MySQL</h6>
                            </div>
                            <div>
                                <h6>Redis</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 w-max border-2 border-b-primary-600 border-t-transparent border-x-transparent">
                            <h5>OTHERS</h5>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>
                                <h6>Agile</h6>
                            </div>
                            <div>
                                <h6>Docker</h6>
                            </div>
                            <div>
                                <h6>Git</h6>
                            </div>
                            <div>
                                <h6>Jest</h6>
                            </div>
                            <div>
                                <h6>REST</h6>
                            </div>
                            <div>
                                <h6>WebSocket</h6>
                            </div>
                            <div>
                                <h6>WordPress</h6>
                            </div>
                            <div>
                                <h6>Figma</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10">
                <div>
                    <h2>EDUCATION</h2>
                </div>
                <div className="flex flex-col">
                    <div>
                        <div className="flex sm:flex-row flex-col sm:justify-between">
                            <div className="font-bold">
                                <h6>UCSI University</h6>
                            </div>
                            <div className="font-light">
                                <h6>May 2019 - April 2022</h6>
                            </div>
                        </div>
                        <div className="mb-2">
                            <h6>Bachelor of Computer Science</h6>
                        </div>
                        <div>
                            <ul className="list-disc">
                                <li>
                                    <p>
                                        Dean's Honours List (6 semesters) |
                                        Graduated with CGPA 3.68.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="font-semibold">
                                            Go.Travel - A Smart Tourism Guide
                                            Mobile Application
                                        </span>
                                        . Developed for my final year project,
                                        and my journal article on this project
                                        was published by the Journal of Advances
                                        in Artificial Life Robotics.
                                        <span className="font-semibold">
                                            (10/2022)
                                        </span>{" "}
                                        —{" "}
                                        <NavLink
                                            to={
                                                "https://www.jstage.jst.go.jp/article/jaalr/3/2/3_7/_article"
                                            }
                                        >
                                            <span className="text-primary-600 underline font-semibold">
                                                Publication
                                            </span>
                                        </NavLink>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Conducted a showcase on SDGs in
                                        conjunction with JCI Malaysia Global
                                        Goals Summit 2019 to promote insights on
                                        the SDGs.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10">
                <div>
                    <h2>ACHIEVEMENT</h2>
                </div>
                <div className="flex flex-col">
                    <div>
                        <div className="flex sm:flex-row flex-col sm:justify-between">
                            <div className="font-bold">
                                <h6>Enterprise Design Thinking Practitioner</h6>
                            </div>
                            <div className="font-light">
                                <h6>March 10, 2022</h6>
                            </div>
                        </div>
                        <div className="mb-2">
                            <p>
                                Issued by IBM, this badge showcases proficiency
                                in leveraging design thinking methodologies for
                                enterprise-level problem-solving.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
