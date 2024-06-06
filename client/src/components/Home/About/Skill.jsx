import { skills } from "../../../data/skill.js";

export function Skill() {
    return (
        <div>
            <div>
                <h3>TECH STACK</h3>
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
    );
}
