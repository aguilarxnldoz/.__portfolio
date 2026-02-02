"use client";

import {useEffect, useRef, useState} from "react";
import {X, ChevronLeft, ChevronRight} from "lucide-react";
import Link from "next/link";
import {SquareArrowOutUpRight} from "lucide-react";
import Image from "next/image";

interface ProjectWidgetProps {
    name: string;
    title?: string;
    description?: string;
    cancelLabel?: string;
    url: string;
    github: string;
    images?: string[];
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectWidget({name, title = "Project", description = "Project details go here.", cancelLabel = "Close", url, github, images, isOpen, onClose}: ProjectWidgetProps) {
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // prevent background scroll when dialog is open
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }

        if (isOpen) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    // focus the dialog when opened for a11y
    useEffect(() => {
        if (isOpen) dialogRef.current?.focus();
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={title}
        >
            {/* backdrop: semi-transparent + blur */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            <div
                ref={dialogRef}
                tabIndex={-1}
                className="relative w-[min(95%,1200px)] max-h-[95vh] overflow-y-auto bg-platinum rounded-2xl p-6 shadow-2xl border border-dark z-10"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h1>{name}</h1>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="mt-2 text-sm text-neutral-700">{description}</p>
                    </div>
                    <button
                        className="p-2 rounded-md hover:bg-black/5"
                        onClick={onClose}
                        aria-label="Close dialog"
                    >
                        <X />
                    </button>
                </div>

                <div className="mt-6">
                    {/* Image Slider */}
                    <div
                        id="project-gallery"
                        className="bg-white rounded-xl p-4 border border-dark"
                    >
                        {images && images.length > 0 && (
                            <div className="relative">
                                {/* Main Image Display */}
                                <div className="relative w-full aspect-video bg-neutral-100 rounded-lg overflow-hidden">
                                    <Image
                                        src={images[currentSlide]}
                                        alt={`${name} project - image ${currentSlide + 1}`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 95vw, 90vw"
                                        priority={currentSlide === 0}
                                    />

                                    {/* Navigation Arrows */}
                                    {images.length > 1 && (
                                        <>
                                            <button
                                                onClick={() => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button
                                                onClick={() => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                                aria-label="Next image"
                                            >
                                                <ChevronRight size={24} />
                                            </button>
                                        </>
                                    )}

                                    {/* Image Counter */}
                                    <div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
                                        {currentSlide + 1} / {images.length}
                                    </div>
                                </div>

                                {/* Thumbnail Navigation */}
                                {images.length > 1 && (
                                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                                        {images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${idx === currentSlide ? "border-crimson" : "border-transparent hover:border-neutral-300"}`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Thumbnail ${idx + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="80px"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
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
                            <p className="my-auto hover:underline hover:text-crimson">Visit!</p>
                        </Link>
                    </div>
                    <div className="flex flex-row-reverse justify-end gap-1">
                        <p className="my-auto hover:text-crimson">
                            <a href={github}>Source: {github}</a>
                        </p>
                        <svg
                            className="my-auto hover:text-crimson"
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

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-3 py-2 rounded-md bg-transparent border border-dark"
                    >
                        {cancelLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
