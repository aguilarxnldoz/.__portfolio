"use client";
import {useState, useEffect} from "react";
import {Menu, X} from "lucide-react";
import Link from "next/link";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

    return (
        <>
            {/* Mobile Navigation */}
            <button
                className={`z-3 md:hidden rounded-full bg-platinum p-3 sticky left-83 top-5 mr-8 shadow-lg `}
                onClick={handleClick}
            >
                {isOpen ? (
                    <>
                        <X
                            color="black"
                            size={40}
                            strokeWidth={2.5}
                        />
                    </>
                ) : (
                    <>
                        <Menu
                            color="black"
                            size={40}
                            strokeWidth={2.5}
                        />
                    </>
                )}
            </button>

            <nav
                id="navigation-screen"
                className={`z-2 fixed top-0 right-0 h-screen w-full bg-platinum transition-transform duration-300 ease-in-out flex flex-col justify-center items-center ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <ul className="text-center justify-center flex flex-col gap-5">
                    <li>
                        <Link
                            href={"#experience"}
                            onClick={() => setIsOpen(false)}
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"#projects"}
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"#techstack"}
                            onClick={() => setIsOpen(false)}
                        >
                            Techstack
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Desktop/Tablet  Navigation */}
            <nav
                id="navigation-bar"
                className={`z-2 w-full sticky top-0 bg-platinum py-2 hidden md:flex md:justify-center`}
            >
                <ul className="hidden md:flex flex-row justify-center space-x-20">
                    <li className="cursor-pointer hover:text-gray-300 sm:py-5 sm:hover:text-crimson sm:hover:border-b-10 sm:hover:transition-all sm:hover:duration-250">
                        <Link href={"#experience"}>Experience</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 sm:py-5 sm:hover:text-crimson sm:hover:border-b-10 sm:hover:transition-all sm:hover:duration-250">
                        <Link href={"#projects"}>Projects</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 sm:py-5 sm:hover:text-crimson sm:hover:border-b-10 sm:hover:transition-all sm:hover:duration-250">
                        <Link href={"#techstack"}>Techstack</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
