"use client";

import Image from "next/image";
import {motion, useScroll, useTransform} from "motion/react";
import Ghost from "@/components/custom/Ghost";
import {Sparkle} from "lucide-react";
import {useEffect, useState} from "react";

interface AmbientStar {
	id: number;
	top: string;
	left: string;
	size: number;
	delay: number;
	duration: number;
}

interface ShootingStar {
	id: number;
	top: string;
	left: string;
	size: number;
	delay: number;
	duration: number;
	distance: number;
	repeatDelay: number;
}

export default function HeroHeader() {
	const {scrollY} = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [0, 150]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	const [ambientStars, setAmbientStars] = useState<AmbientStar[]>([]);
	const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

	useEffect(() => {
		// Generate random ambient twinkling stars safely
		const generatedAmbient = Array.from({length: 40}).map((_, i) => ({
			id: i,
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
			size: Math.random() * 2 + 1, // smaller stars 1 to 3
			delay: Math.random() * 3,
			duration: Math.random() * 3 + 2,
		}));
		// We use a small timeout to bypass the React concurrent rendering strict mode warning for setState in useEffect
		setTimeout(() => setAmbientStars(generatedAmbient), 0);

		// Generate random shooting stars safely
		const generatedShooting = Array.from({length: 6}).map((_, i) => ({
			id: i,
			top: `${Math.random() * 50 - 20}%`, // Start higher up
			left: `${Math.random() * 80 + 20}%`, // Start further right
			size: Math.random() * 2 + 2,
			delay: Math.random() * 10, // stagger the shooting times heavily
			duration: Math.random() * 0.8 + 0.6, // Fast speed
			distance: Math.random() * 400 + 400, // Long travel distance
			repeatDelay: Math.random() * 8 + 5, // Wait 5-13 seconds before shooting again
		}));
		setTimeout(() => setShootingStars(generatedShooting), 0);
	}, []);

	return (
		<motion.div
			style={{y: y1, opacity}}
			className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-5 pb-10 md:py-32 min-h-[70vh]"
		>
			{/* Starry Sky Background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 rounded-3xl">
				{/* Ambient Twinkling Stars */}
				{ambientStars.map((star) => (
					<motion.div
						key={`ambient-${star.id}`}
						className="absolute text-crimson"
						style={{top: star.top, left: star.left}}
						animate={{scale: [1, 1.5, 1], opacity: [0.1, 0.7, 0.1]}}
						transition={{duration: star.duration, repeat: Infinity, ease: "easeInOut", delay: star.delay}}
					>
						<Sparkle
							className="fill-crimson"
							style={{width: star.size * 4, height: star.size * 4}}
						/>
					</motion.div>
				))}

				{/* Shooting Stars */}
				{shootingStars.map((star) => (
					<motion.div
						key={`shooting-${star.id}`}
						className="absolute text-crimson flex items-center justify-center"
						style={{top: star.top, left: star.left}}
						initial={{opacity: 0, x: 0, y: 0, scale: 0}}
						animate={{
							opacity: [0, 1, 1, 0],
							x: [-50, -star.distance],
							y: [50, star.distance],
							scale: [0, 1, 1, 0],
						}}
						transition={{
							duration: star.duration,
							repeat: Infinity,
							repeatDelay: star.repeatDelay,
							ease: "easeOut",
							delay: star.delay,
						}}
					>
						{/* Tail + Star Container rotated to face the trajectory */}
						<div className="relative flex items-center justify-center -rotate-45 origin-center">
							<div className="absolute left-1/2 w-20 h-0.5 bg-linear-to-r from-crimson to-transparent blur-[1px]" />
							<Sparkle
								className="fill-crimson relative z-10"
								style={{width: star.size * 4, height: star.size * 4}}
							/>
						</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{opacity: 0, scale: 0.8}}
				animate={{opacity: 1, scale: 1}}
				transition={{duration: 0.8, ease: "easeOut"}}
				className="relative"
			>
				{/* Background glow matching the shape */}
				<div className="absolute inset-0 bg-crimson/20 rounded-full md:rounded-2xl blur-2xl transform scale-110 -z-10 animate-pulse" />

				{/* <Image */}
				{/* 	className="rounded-full md:rounded-2xl shadow-2xl border-4 border-platinum/50 object-cover w-48 h-48 md:w-72 md:h-72 relative z-10" */}
				{/* 	src="/naldouche.jpg" */}
				{/* 	alt="Nald Ozem Aguilar" */}
				{/* 	width={300} */}
				{/* 	height={300} */}
				{/* 	priority */}
				{/* /> */}
			</motion.div>

			<div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
				<motion.div
					initial={{opacity: 0, y: 30}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, delay: 0.2}}
					className="text-crimson"
				>
					<h1 className="text-4xl md:text-6xl font-bold text-dark mb-4 tracking-tight md:text-center">Nald O. Aguilar</h1>
					<div className="flex items-center justify-center md:justify-start gap-4 mb-6">
						<Ghost className="w-10 h-8 md:w-10 md:h-10 text-crimson animate-bounce" />
						<h2 className="text-xl md:text-2xl font-medium text-dark/80">Full-stack Web Developer</h2>
						<Ghost className="w-10 h-8 md:w-10 md:h-10 text-crimson animate-bounce delay-200" />
					</div>
				</motion.div>

				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, delay: 0.4}}
					className="bg-platinum/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-lg border border-platinum max-w-lg"
				>
					<p className="text-base md:text-lg text-dark/90 leading-relaxed">
						I am a 2nd year student in Computer Science with an unhealthy addiction to tech. Using modern technologies, I build, deploy, and scale applications to industry standards.
					</p>
				</motion.div>
			</div>
		</motion.div>
	);
}
