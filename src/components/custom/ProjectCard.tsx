"use client";

import Image from "next/image";
import Link from "next/link";

import {SquareArrowOutUpRight, ChevronRight, ChevronDown} from "lucide-react";
import {useState} from "react";

interface IProject {
    name: string;
    src: string;
    alt: string;
    url: string;
    description: string;
    github: string;
}

export default function ProjectsCard({name, src, alt, description, url, github}: IProject) {
    const [displayDescription, setDisplayDescription] = useState<boolean>(false);

    const handleClick = () => {
        displayDescription ? setDisplayDescription(false) : setDisplayDescription(true);
    };

    return (
        <>
            <div className="w-full h-auto bg-platinum p-6 rounded-2xl shadow-crimson shadow-xs border-dark border">
                <div className="flex flex-row gap-2 items-center">
                    <Image
                        src={src}
                        width={50}
                        height={50}
                        alt={alt}
                    />
                    <h3 className="my-auto">{name}</h3>
                    <button
                        className="ml-auto sm:hidden"
                        onClick={handleClick}
                    >
                        {displayDescription ? <ChevronDown /> : <ChevronRight />}
                    </button>
                </div>

                <div className={`${displayDescription ? "block" : "hidden"} h-auto max-h-full hover:opacity-90 sm:block my-4 sm:h-115 md:h-100 lg:h-50 xl:h-40`}>
                    <p>{description}</p>
                </div>

                <div className="mt-5 sm:mt-4 md:mt-2 flex flex-col gap-2">
                    <div className="flex flex-row gap-1">
                        <Link
                            href={url}
                            className="flex flex-row gap-1"
                        >
                            <SquareArrowOutUpRight
                                size={25}
                                className="hover:text-crimson hover:underline"
                                strokeWidth={2.25}
                            />
                            <p className="my-auto hover:underline hover:text-crimson">Visit {name}!</p>
                        </Link>
                    </div>
                    <div className="flex flex-row-reverse justify-end gap-1">
                        <p className="my-auto">
                            <a href={github}>Source</a>
                        </p>
                        <svg
                            className="my-auto"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23 9V15H22V17H21V19H20V20H19V21H18V22H16V23H15V18H14V17H15V16H17V15H18V14H19V9H18V6H16V7H15V8H14V7H10V8H9V7H8V6H6V9H5V14H6V15H7V16H9V18H7V17H6V16H4V17H5V19H6V20H9V23H8V22H6V21H5V20H4V19H3V17H2V15H1V9H2V7H3V5H4V4H5V3H7V2H9V1H15V2H17V3H19V4H20V5H21V7H22V9H23Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}
