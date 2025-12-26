"use client";
import {useState, useEffect} from "react";
import {Menu, X} from "lucide-react";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

    return (
        <>
            {/* Mobile Navigation */}
            <button
                className={`z-3 md:hidden rounded-full bg-platinum p-3 sticky left-83 top-5 shadow-lg`}
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
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Techstack</li>
                </ul>
            </nav>

            {/* Desktop/Tablet  Navigation */}
            <nav
                id="navigation-bar"
                className={`w-full sticky top-0 bg-platinum py-10 hidden md:flex md:justify-center mb-7`}
            >
                <ul className="hidden md:flex flex-row justify-center space-x-5">
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Techstack</li>
                </ul>
            </nav>
        </>
    );
}
