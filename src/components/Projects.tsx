"use client";

import ProjectsCard from "./custom/ProjectCard";
import {motion, useInView} from "motion/react";
import {useRef} from "react";

const PROJECT_PATH = "/project-images/";

const projects = [
    {
        name: "Panday",
        src: "/panday-icon.svg",
        alt: "Panday Career Roadmap",
        url: "https://panday.app/roadmap",
        github: "https://github.com/panday-team/panday",
        description:
            "Panday is an AI-powered application that guides individuals into a deeper career in trades by supplying the user with resources that are currently scattered throughout the web. The project displays an interactive roadmap that is personalized to the user's progress in their career/education. This allows PandayAI to provide the user with the necessary resources to carry on their journey in trades, whether they're beginning an education or completing a red seal.",
        title: "AI-Powered Career Roadmap",
        images: [`${PROJECT_PATH}panday/panday_sample_1.png`, `${PROJECT_PATH}panday/panday_sample_2.png`],
        technologies: ["NextJS", "TypeScript", "openai GPT-5.1", "Sentence Transformers", "pgvector", "Prisma", "PostgreSQL", "Llama Index"],
    },
    {
        name: "Circles",
        src: "/circles-icon.svg",
        alt: "Circles Social Platform",
        url: "https://idsp-circle-eight.vercel.app/home",
        github: "https://github.com/ILHT-IDSP/IDSP-Circle",
        description:
            'Circles is a full-stack, group-first social platform that solves scattered group communication by letting users create or join shared accounts called "Circles." Instead of one user posting with tagged users or noisy group chats, each Circle has a single collaborative feed and album system where members post, organize memories, and coordinate activities together. This makes it ideal for teams, clubs, families, and friend groups who want one place to build a collective presence with clear ownership, roles, and easy content creation',
        title: "Social Media Application",
        images: [`${PROJECT_PATH}circles/circles_sample_1.png`, `${PROJECT_PATH}circles/circles_sample_2.png`],
        technologies: ["NextJS", "TypeScript", "React", "Prisma", "PostgreSQL", "cloudinary"],
    },
    {
        name: "boppy",
        src: "/boppy-icon.svg",
        alt: "boppy Audio Visualizer",
        url: "https://boppy-woad.vercel.app",
        github: "https://github.com/aguilarxnldoz/boppy.git",
        description: "boppy is a pure front-end application that renders visuals for music by using the Web Audio and Canvas API",
        title: "Social Media Application",
        images: [`${PROJECT_PATH}boppy/boppy_sample_1.png`, `${PROJECT_PATH}boppy/boppy_sample_2.png`],
        technologies: ["TypeScript", "React", "Vite", "TailwindCSS", "Web Audio API"],
    },
];

// Light floating configs - much gentler than techstack
const floatConfigs = [
    {y: [-2, 2], rotate: [-0.5, 0.5], duration: 4.2},
    {y: [-1.5, 2.5], rotate: [-0.5, 1], duration: 4.2},
];

function ProjectItem({project, index}: {project: (typeof projects)[0]; index: number}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {amount: 0.3, once: false});

    const isLeftSide = index % 2 === 0;
    const floatConfig = floatConfigs[index % floatConfigs.length];

    return (
        <motion.div
            ref={ref}
            key={project.name}
            animate={
                isInView
                    ? {
                          opacity: 1,
                          x: 0,
                          y: floatConfig.y,
                          rotate: floatConfig.rotate,
                      }
                    : {
                          opacity: 0,
                          x: isLeftSide ? -100 : 100,
                      }
            }
            transition={{
                opacity: {duration: 0.5},
                x: {duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]},
                y: {
                    duration: floatConfig.duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                },
                rotate: {
                    duration: floatConfig.duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                },
                delay: isInView ? index * 0.1 : 0,
            }}
            className="w-full will-change-transform"
        >
            <ProjectsCard
                name={project.name}
                src={project.src}
                alt={project.alt}
                url={project.url}
                github={project.github}
                description={project.description}
                title={project.title}
                images={project.images}
                technologies={project.technologies}
            />
        </motion.div>
    );
}

export default function ProjectsContainer() {
    return (
        <div
            id="projects-container"
            className="grid sm:grid-cols-2 items-center justify-items-center my-15 gap-5"
        >
            {projects.map((project, index) => (
                <ProjectItem
                    key={project.name}
                    project={project}
                    index={index}
                />
            ))}
        </div>
    );
}
