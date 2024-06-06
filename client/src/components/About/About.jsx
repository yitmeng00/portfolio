import { NavLink } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import { PiArrowSquareOutLight } from "react-icons/pi";
import { aboutData } from "../../data/about.js";
import { skills } from "../../data/skill.js";
import { educations } from "../../data/education.js";
import { achievements } from "../../data/achievement.js";

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
                {aboutData.map((paragraph, index) => (
                    <div key={index}>
                        <h6>{paragraph}</h6>
                    </div>
                ))}
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10">
                <CodeBlock language="javascript" code={code} />
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10">
                <div>
                    <h2>TECH STACK</h2>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {skills.map((skill) => (
                        <div key={skill.id}>
                            <div className="mb-2 w-max border-2 border-b-primary-600 border-t-transparent border-x-transparent">
                                <h5>{skill.category.toUpperCase()}</h5>
                            </div>
                            <div className="flex flex-col gap-1">
                                {skill.techstack.map((tech, index) => (
                                    <div key={index}>
                                        <h6>{tech}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10">
                <div>
                    <h2>EDUCATION</h2>
                </div>
                <div className="flex flex-col">
                    {educations.map((education) => (
                        <div key={education.id}>
                            <div className="flex sm:flex-row flex-col sm:justify-between">
                                <div className="font-bold">
                                    <h6>{education.institution}</h6>
                                </div>
                                <div className="font-light">
                                    <h6>{education.duration}</h6>
                                </div>
                            </div>
                            <div className="mb-2">
                                <h6>{education.degree}</h6>
                            </div>
                            <div>
                                <ul className="list-disc">
                                    {education.achievements.map(
                                        (achievement, idx) => (
                                            <li key={idx}>
                                                <p>
                                                    {typeof achievement ===
                                                    "string" ? (
                                                        achievement
                                                    ) : (
                                                        <>
                                                            <span className="font-semibold">
                                                                {
                                                                    achievement.project
                                                                }
                                                            </span>
                                                            .{" "}
                                                            {
                                                                achievement.description
                                                            }
                                                            <span className="font-semibold">
                                                                (
                                                                {
                                                                    achievement.publicationDate
                                                                }
                                                                )
                                                            </span>{" "}
                                                            —{" "}
                                                            <NavLink
                                                                to={
                                                                    achievement.publicationLink
                                                                }
                                                            >
                                                                <span className="text-primary-600 underline font-semibold">
                                                                    Publication
                                                                </span>
                                                            </NavLink>
                                                        </>
                                                    )}
                                                </p>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="xl:px-40 lg:px-32 px-10 py-10">
                <div>
                    <h2>ACHIEVEMENT</h2>
                </div>
                <div className="flex flex-col gap-8">
                    {achievements.map((achievement, index) => (
                        <div key={index}>
                            <div className="flex sm:flex-row flex-col sm:justify-between">
                                <div className="font-bold">
                                    <h6>{achievement.title}</h6>
                                </div>
                                <div className="font-light">
                                    <h6>{achievement.date}</h6>
                                </div>
                            </div>
                            <div className="mb-2">
                                <h6>Issued by {achievement.issuedBy}</h6>
                            </div>
                            <div className="flex sm:flex-row flex-col gap-5 sm:items-center">
                                <div>
                                    <img
                                        className="size-40 max-w-max"
                                        src={achievement.imageUrl}
                                        alt={achievement.title
                                            .toLowerCase()
                                            .split(" ")
                                            .join("-")}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>{achievement.description}</p>
                                    <NavLink to={achievement.credentialLink}>
                                        <div className="flex flex-row items-center gap-2 border border-primary-600 rounded w-max px-2 py-1">
                                            <button>Show credential</button>
                                            <PiArrowSquareOutLight />
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
