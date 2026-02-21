"use client";

import Image from "next/image";
import {useState} from "react";
import ProjectWidget from "./ProjectWidget";

interface IProject {
    name: string;
    src: string;
    alt: string;
    url: string;
    title?: string;
    description: string;
    github: string;
    images?: string[];
    technologies?: string[];
}

export default function ProjectsCard({name, src, alt, description, title, url, github, images, technologies}: IProject) {
    const [isHovered, setIsHovered] = useState(false);
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    return (
        <>
            <div
                className="relative w-full p-6 rounded-2xl shadow-crimson shadow-xs border-dark border cursor-pointer overflow-hidden bg-platinum"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsWidgetOpen(true)}
            >
                {/* Animated gradient overlay - top left */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-crimson to-transparent transition-all duration-250 ease-out origin-bottom"
                    style={{
                        transform: isHovered ? "scale(1)" : "scale(0)",
                        opacity: isHovered ? 1 : 0,
                    }}
                />
                {/* Animated gradient overlay - bottom right */}
                <div
                    className="absolute inset-0 bg-gradient-to-tl from-dark to-transparent transition-all duration-150 ease-out origin-top"
                    style={{
                        transform: isHovered ? "scale(1)" : "scale(0)",
                        opacity: isHovered ? 1 : 0,
                    }}
                />
                {/* Content layer */}
                <div className={`relative hover:transition-colors duration-500 ${isHovered ? "text-platinum" : ""}`}>
                    <div className="flex flex-row gap-40 sm:gap-5 lg:justify-between">
                        <div className="flex flex-col">
                            <div className={`icon-display bg-cover flex flex-row gap-2`}>
                                <div className="m-auto">
                                    <Image
                                        src={src}
                                        width={50}
                                        height={50}
                                        alt={alt}
                                    />
                                </div>
                                <div className="w-full">
                                    <h3 className="my-auto">{name}</h3>
                                </div>
                            </div>
                            <h4 className="inline mt-4">{title}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectWidget
                name={name}
                title={title}
                description={description}
                url={url}
                github={github}
                images={images}
                isOpen={isWidgetOpen}
                onClose={() => setIsWidgetOpen(false)}
                technologies={technologies as string[]}
            />
        </>
    );
}
