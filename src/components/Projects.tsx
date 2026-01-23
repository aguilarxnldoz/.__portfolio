import ProjectsCard from "./custom/ProjectCard";

export default function ProjectsContainer() {
    return (
        <>
            <div
                id="projects-container"
                className="grid sm:grid-cols-2 items-center justify-items-center my-15 gap-5"
            >
                <ProjectsCard
                    name="Circles"
                    src="/circles-icon.svg"
                    alt="Circles Social Platform"
                    url="https://idsp-circle-tawny.vercel.app/auth/login"
                    github="https://github.com/ILHT-IDSP/IDSP-Circle"
                    description="Circles is a full-stack social media platform designed for collaborative group posting. Users can create or join group accounts (“Circles”) where everyone can share photos and content together in a single feed. Circles makes it easy for teams, clubs, and friends to organize and share memories collectively, with a modern, intuitive interface and seamless group collaboration features."
                />
                <ProjectsCard
                    name="Panday"
                    src="/panday-icon.svg"
                    alt="Panday Career Roadmap"
                    url="https://panday.app"
                    github="https://github.com/panday-team/panday"
                    description="Panday is an AI-powered application that guides individuals into a deeper career in trades. The project displays an interactive roadmap that is personalized to the user's progress in their career/education. This allows PandayAI to provide the user with the necessary resources to carry on their journey in trades, whether they're beginning an education or completing a red seal."
                />
            </div>
        </>
    );
}
