"use client";

import ShowStack from "./custom/ShowStack";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const directions = [
    { x: -50, y: -30 },
    { x: 0, y: -50 },
    { x: 50, y: -30 },
    { x: 50, y: 0 },
    { x: -50, y: 0 },
    { x: -50, y: 30 },
    { x: 0, y: 50 },
    { x: 50, y: 30 },
    { x: -40, y: -40 },
    { x: 40, y: 40 },
];

const exitDirections = [
    { x: 100, y: 60 },
    { x: -80, y: 100 },
    { x: 100, y: -60 },
    { x: -100, y: 0 },
    { x: 80, y: 0 },
    { x: 100, y: -60 },
    { x: 0, y: -100 },
    { x: -100, y: -60 },
    { x: 80, y: 80 },
    { x: -80, y: -80 },
];

// Floating animation configs - each icon has unique bubbly motion
const floatConfigs = [
    { y: [-8, 8], rotate: [-3, 3], duration: 2.1 },
    { y: [-6, 10], rotate: [-2, 4], duration: 2.8 },
    { y: [-10, 6], rotate: [-4, 2], duration: 2.3 },
    { y: [-5, 9], rotate: [-3, 3], duration: 2.6 },
    { y: [-9, 7], rotate: [-4, 4], duration: 2.2 },
    { y: [-7, 8], rotate: [-2, 3], duration: 2.9 },
    { y: [-11, 5], rotate: [-3, 5], duration: 2.4 },
    { y: [-6, 7], rotate: [-4, 2], duration: 2.7 },
    { y: [-8, 9], rotate: [-2, 4], duration: 2.5 },
    { y: [-10, 8], rotate: [-3, 3], duration: 2.0 },
];

const techStack = [
    { src: "techstack-icons/typescript-icon.svg", alt: "TypeScript", title: "TypeScript" },
    { src: "techstack-icons/react-icon.svg", alt: "React.js", title: "React" },
    { src: "techstack-icons/next-icon.svg", alt: "Next.JS", title: "Next.JS" },
    { src: "techstack-icons/tailwindcss-icon.svg", alt: "TailwindCSS", title: "TailwindCSS" },
    { src: "techstack-icons/html-icon.svg", alt: "HTML5", title: "HTML" },
    { src: "techstack-icons/css-icon.svg", alt: "CSS3", title: "CSS" },
    { src: "techstack-icons/python-icon.svg", alt: "Python", title: "Python" },
    { src: "techstack-icons/sql-icon.svg", alt: "MySQL", title: "SQL", className: "pt-2" },
    { src: "techstack-icons/redis-icon.svg", alt: "Redis", title: "Redis" },
    { src: "techstack-icons/docker-icon.svg", alt: "Docker", title: "Docker" },
];

function TechStackItem({ tech, index, isVisible }: { tech: typeof techStack[0]; index: number; isVisible: boolean }) {
    const entryDir = directions[index];
    const exitDir = exitDirections[index];
    const floatConfig = floatConfigs[index];

    return (
        <motion.div
            key={tech.title}
            initial={{
                opacity: 0,
                x: entryDir.x,
                y: entryDir.y,
                scale: 0.5,
            }}
            animate={isVisible ? {
                opacity: 1,
                x: 0,
                y: floatConfig.y,
                scale: 1,
                rotate: floatConfig.rotate,
            } : {
                opacity: 0,
                x: exitDir.x,
                y: exitDir.y,
                scale: 0.5,
            }}
            transition={{
                opacity: { duration: 0.4 },
                x: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                y: { 
                    duration: isVisible ? floatConfig.duration : 0.5, 
                    repeat: isVisible ? Infinity : 0, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                },
                scale: { duration: 0.5 },
                rotate: { 
                    duration: isVisible ? floatConfig.duration : 0.5, 
                    repeat: isVisible ? Infinity : 0, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                },
                delay: isVisible ? index * 0.05 : 0,
            }}
            whileHover={{
                scale: 1.15,
                rotate: 0,
                y: 0,
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.96 }}
            className="cursor-pointer will-change-transform"
        >
            <ShowStack
                src={tech.src}
                alt={tech.alt}
                title={tech.title}
                className={tech.className}
            />
        </motion.div>
    );
}

export default function TechStackContainer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isVisible = useInView(containerRef, { 
        amount: 0.1,
        once: false 
    });

    return (
        <div ref={containerRef} className="md:w-auto mx-auto p-3.5 mt-10 md:mt-20 xl:w-210">
            <div className="opacity-80 rounded-xl w-full lg:w-200 m-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-5 m-auto lg:w-200 p-2">
                    {techStack.map((tech, index) => (
                        <TechStackItem 
                            key={tech.title}
                            tech={tech} 
                            index={index} 
                            isVisible={isVisible} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
