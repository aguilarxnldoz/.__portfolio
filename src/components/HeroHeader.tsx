"use client";

import Image from "next/image";
import {motion, useScroll, useTransform} from "motion/react";
import Ghost from "@/components/custom/Ghost";
import { Sparkle } from "lucide-react";

const STARRY_BACKGROUND = [
	{ top: '15%', left: '10%', size: 4, delay: 0 },
	{ top: '20%', left: '85%', size: 5, delay: 1.5 },
	{ top: '40%', left: '50%', size: 3, delay: 0.5 },
	{ top: '60%', left: '15%', size: 6, delay: 2 },
	{ top: '75%', left: '80%', size: 4, delay: 1 },
	{ top: '85%', left: '30%', size: 5, delay: 2.5 },
	{ top: '10%', left: '50%', size: 3, delay: 1.2 },
	{ top: '35%', left: '25%', size: 4, delay: 0.8 },
	{ top: '55%', left: '75%', size: 5, delay: 1.8 },
	{ top: '80%', left: '60%', size: 3, delay: 0.3 },
	{ top: '45%', left: '90%', size: 4, delay: 2.2 },
	{ top: '5%', left: '70%', size: 5, delay: 0.7 },
	{ top: '90%', left: '10%', size: 6, delay: 1.4 },
	{ top: '30%', left: '5%', size: 3, delay: 2.1 },
	{ top: '70%', left: '45%', size: 4, delay: 0.9 },
];

export default function HeroHeader() {
	const {scrollY} = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [0, 150]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	return (
		<motion.div
			style={{y: y1, opacity}}
			className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-20 pb-10 md:py-32 min-h-[70vh]"
		>
			{/* Starry Sky Background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 rounded-3xl">
				{STARRY_BACKGROUND.map((star, i) => (
					<motion.div
						key={i}
						className="absolute text-crimson"
						style={{ top: star.top, left: star.left }}
						animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.6, 0.1] }}
						transition={{ duration: 3 + (i % 2), repeat: Infinity, ease: "easeInOut", delay: star.delay }}
					>
						<Sparkle className="fill-crimson" style={{ width: star.size * 4, height: star.size * 4 }} />
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

				<Image
					className="rounded-full md:rounded-2xl shadow-2xl border-4 border-platinum/50 object-cover w-48 h-48 md:w-72 md:h-72 relative z-10"
					src="/naldouche.jpg"
					alt="Nald Ozem Aguilar"
					width={300}
					height={300}
					priority
				/>
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
						<Ghost className="w-8 h-8 md:w-10 md:h-10 text-crimson animate-bounce" />
						<h2 className="text-xl md:text-2xl font-medium text-dark/80">Full-stack Web Developer</h2>
						<Ghost className="w-8 h-8 md:w-10 md:h-10 text-crimson animate-bounce delay-200" />
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
