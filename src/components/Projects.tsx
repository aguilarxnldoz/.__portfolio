import ProjectsCard from "./custom/ProjectCard";

const PROJECT_PATH = "/project-images/";

export default function ProjectsContainer() {
    return (
        <>
            <div
                id="projects-container"
                className="grid sm:grid-cols-2 items-center justify-items-center my-15 gap-5"
            >
                <ProjectsCard
                    name="Panday"
                    src="/panday-icon.svg"
                    alt="Panday Career Roadmap"
                    url="https://panday.app"
                    github="https://github.com/panday-team/panday"
                    description="Panday is an AI-powered application that guides individuals into a deeper career in trades by supplying the user with resources that are currently scattered throughout the web. The project displays an interactive roadmap that is personalized to the user's progress in their career/education. This allows PandayAI to provide the user with the necessary resources to carry on their journey in trades, whether they're beginning an education or completing a red seal."
                    title="AI-Powered Career Roadmap"
                    images={[`${PROJECT_PATH}panday/panday_sample_1.png`, `${PROJECT_PATH}panday/panday_sample_2.png`]}
                    technologies={["NextJS", "TypeScript", "openai GPT-5.1", "Sentence Transformers", "pgvector", "Prisma", "PostgreSQL", "Llama Index"]}
                />
                <ProjectsCard
                    name="Circles"
                    src="/circles-icon.svg"
                    alt="Circles Social Platform"
                    url="https://idsp-circle-eight.vercel.app/home"
                    github="https://github.com/ILHT-IDSP/IDSP-Circle"
                    description="Circles is a full-stack, group-first social platform that solves scattered group communication by letting users create or join shared accounts called “Circles.” Instead of one user posting with tagged users or noisy group chats, each Circle has a single collaborative feed and album system where members post, organize memories, and coordinate activities together. This makes it ideal for teams, clubs, families, and friend groups who want one place to build a collective presence with clear ownership, roles, and easy content creation"
                    title="Social Media Application"
                    images={[`${PROJECT_PATH}circles/circles_sample_1.png`, `${PROJECT_PATH}circles/circles_sample_2.png`]}
                    technologies={["NextJS", "TypeScript", "React", "Prisma", "PostgreSQL", "cloudinary"]}
                />
            </div>
        </>
    );
}
