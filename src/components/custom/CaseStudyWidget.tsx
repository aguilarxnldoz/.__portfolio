"use client";

import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import {X} from "lucide-react";
import Image from "next/image";

interface CaseStudyWidgetProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function CaseStudyWidget({isOpen, onClose}: CaseStudyWidgetProps) {
	const dialogRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
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

	useEffect(() => {
		if (isOpen) dialogRef.current?.focus();
	}, [isOpen]);

	if (!isOpen) return null;

	const modalContent = (
		<div
			className="fixed inset-0 z-100 flex items-center justify-center"
			role="dialog"
			aria-modal="true"
			aria-label="Panday Case Study"
		>
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
				onClick={onClose}
			/>

			<div
				ref={dialogRef}
				tabIndex={-1}
				className="relative w-[min(95%,1200px)] max-h-[95vh] overflow-y-auto bg-platinum rounded-2xl p-6 shadow-2xl border border-dark z-10 text-dark"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-start justify-between gap-4">
					<div className="flex items-center gap-4">
						<Image
							src="/panday-icon.svg"
							alt="Panday Logo"
							width={60}
							height={60}
						/>
						<div>
							<h1 className="text-3xl font-bold">Panday</h1>
							<h3 className="text-xl font-semibold">AI-Powered Career Roadmap for Skilled Trades</h3>
						</div>
					</div>
					<button
						className="p-2 rounded-md hover:bg-black/5"
						onClick={onClose}
						aria-label="Close dialog"
					>
						<X />
					</button>
				</div>

				<div className="mt-8">
					{/* Content Section */}
					<div className="space-y-8 text-neutral-800 leading-relaxed">
						<section>
							<h2 className="text-2xl font-bold mb-2">Role</h2>
							<p className="font-semibold text-lg">Full-Stack Developer (AI Integration & Frontend)</p>
							<p>
								Involved in designing and implementing the Retrieval Augmented Generation (RAG) pipeline, building the chat API endpoints, integrating the AI assistant with the frontend visualization, and creating the source-citation
								system for AI responses.
							</p>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Background & Summary</h2>
							<p className="mb-4">
								The skilled trades represent one of the most promising career paths in Canada—yet navigating the certification journey remains surprisingly complicated. Between foundation programs, apprenticeship levels, technical
								training, and final Red Seal certification, aspiring electricians face a maze of requirements, deadlines, and bureaucratic steps that often feels overwhelming.
							</p>

							<div className="my-6 w-full rounded-xl overflow-hidden border border-dark">
								<Image
									src="/project-images/panday/panday_sample_1.png"
									alt="Panday visual roadmap overview"
									width={1200}
									height={675}
									className="w-full h-auto object-cover"
								/>
							</div>

							<p className="mb-4">
								Panday was created to solve this problem. The application transforms the complex electrician certification pathway in British Columbia into an interactive visual roadmap, paired with an AI-powered assistant that
								answers questions with verified sources from official career documentation.
							</p>
							<p className="mb-2">The platform enables users to:</p>
							<ul className="list-disc pl-6 space-y-1">
								<li>Explore their career progression through a visual node-based map</li>
								<li>Click any milestone to view detailed requirements and checklists</li>
								<li>Ask the AI assistant questions and receive source-backed answers</li>
								<li>Track their progress as they complete each stage</li>
								<li>Save conversation history for future reference</li>
							</ul>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Focus of Role</h2>
							<p className="mb-4">I owned two high-impact parts of this build: the AI chat architecture and the interaction quality of the roadmap UI.</p>

							<div className="space-y-6">
								<div>
									<h3 className="font-bold text-lg mb-2">AI Chatbot Implementation</h3>
									<p className="mb-2">
										I led the chatbot implementation with Gemini 2.5 and chose the Vercel AI SDK over a separate Python backend to keep the architecture within one maintainable Next.js stack.
									</p>
									<ul className="list-disc pl-6 space-y-1">
										<li>Built streaming chat behavior in a single application layer</li>
										<li>Integrated roadmap context so responses stay grounded and relevant</li>
										<li>Reduced operational overhead and made model iteration faster</li>
									</ul>
								</div>

								<div>
									<h3 className="font-bold text-lg mb-2">UI Animation & Node Interactivity</h3>
									<p className="mb-2">
										I was responsible for the interaction and animation system that makes the roadmap feel responsive, while preserving clarity as users navigate a dense node graph.
									</p>
									<ul className="list-disc pl-6 space-y-1">
										<li>Designed node feedback for hover, selection, and navigation states</li>
										<li>Aligned React state, Motion transitions, and React Flow transforms</li>
										<li>Eliminated jitter/timing conflicts to deliver smoother interaction</li>
									</ul>
								</div>
							</div>
						</section>

						<hr className="border-neutral-300" />
						<section>
							<h2 className="text-2xl font-bold mb-3">The Challenge</h2>
							<p className="mb-4">Building an AI-powered career guidance tool presented three core challenges that shaped the development process:</p>
							<div className="space-y-4">
								<div>
									<h3 className="font-bold text-lg">1. Accuracy Without Compromise</h3>
									<p>
										Users rely on Panday for real career decisions—getting information wrong isn&apos;t an option. The AI couldn&apos;t simply &quot;make things up.&quot; Every response needed to be grounded in verified sources
										from official SkilledTradesBC documentation and career resources.
									</p>
								</div>
								<div>
									<h3 className="font-bold text-lg">2. Complexity Made Simple</h3>
									<p>
										The underlying technical architecture—embeddings, vector databases, streaming responses, tool invocations—needed to remain invisible to users. Visitors to the portfolio shouldn&apos;t need a computer science
										degree to understand what the product does.
									</p>
								</div>
								<div>
									<h3 className="font-bold text-lg">3. Trust Through Transparency</h3>
									<p>
										When the AI provides guidance, users should know exactly where that information came from. The system needed to show sources, allow users to preview the original content, and link back to relevant roadmap
										nodes—building trust rather than presenting a &quot;black box&quot; response.
									</p>
								</div>
							</div>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">The Solution</h2>
							<p className="mb-4">The solution combines two complementary interfaces: an interactive visual roadmap powered by React Flow, and an AI chat assistant that serves as a knowledgeable career advisor.</p>

							<h3 className="font-bold text-xl mt-4 mb-2">Visual Roadmap Component</h3>
							<p className="mb-4">
								The main interface presents the career pathway as a connected graph of milestone nodes. Each node represents a significant step—Foundation Program, Level 1 Apprenticeship, Level 2 Technical Training, and ultimately the
								Red Seal Certification. Users can pan, zoom, and click any node to reveal detailed checklists of requirements, resources, and next steps.
							</p>
							<p className="mb-4">The visualization respects the user&apos;s current progress: it centers on their level, highlights what&apos;s been completed, and dims future stages to maintain focus on the immediate next step.</p>

							<h3 className="font-bold text-xl mt-4 mb-2">AI Assistant with Source Attribution</h3>
							<p className="mb-4">
								The chat interface allows users to ask natural questions—&quot;What do I need for Level 3?&quot; or &quot;How do I challenge the Red Seal exam?&quot;—and receive answers drawn directly from official career
								documentation.
							</p>
							<p className="mb-4">
								The key differentiator is the citation system. Each AI response displays its sources in a compact format, with hover cards that reveal the original text and direct links to the relevant roadmap node. Users can verify
								the information, explore deeper, and trust that the guidance is accurate.
							</p>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Design Process</h2>

							<h3 className="font-bold text-xl mt-4 mb-2">Understanding the User Journey</h3>
							<p className="mb-4">Before writing code, the development process began with understanding who would use the platform and what they actually needed.</p>

							<div className="my-6 w-full rounded-xl overflow-hidden border border-dark">
								<Image
									src="/project-images/panday/panday_sample_3.png"
									alt="Panday RAG pipeline technical setup"
									width={1200}
									height={675}
									className="w-full h-auto object-cover"
								/>
							</div>

							<p className="mb-4">
								<strong>Primary User:</strong> Career changers or new immigrants looking to enter the electrical trades in British Columbia. They often felt lost navigating government websites and needed a clear, trustworthy guide.
							</p>
							<p className="mb-4">
								<strong>Key Insight:</strong> These users didn&apos;t want to learn the system—they wanted the system to work for them. Complexity had to live behind the scenes.
							</p>
							<p className="mb-2">This insight directly influenced two major design decisions:</p>
							<ol className="list-decimal pl-6 space-y-2 mb-4">
								<li>
									<strong>The &quot;No Setup&quot; Approach:</strong> Users don&apos;t need to configure anything. They select their trade, current level, and entry path once, and the entire experience personalizes around them.
								</li>
								<li>
									<strong>Context-Aware Responses:</strong> The AI knows the user&apos;s current level. When someone at Level 2 asks about &quot;the next step,&quot; the assistant automatically provides Level 3 information—not a
									generic response that applies to everyone.
								</li>
							</ol>

							<h3 className="font-bold text-xl mt-6 mb-2">Designing the RAG Pipeline</h3>
							<p className="mb-4">The technical heart of the project is the Retrieval Augmented Generation system—what allows the AI to answer questions accurately. The design process broke this into four stages:</p>
							<div className="space-y-4 mb-4">
								<div>
									<h4 className="font-semibold">Stage 1: Document Preparation</h4>
									<p>Career documentation was processed into structured chunks, with each piece tagged to its source node in the roadmap. This creates a clear link between the AI&apos;s knowledge base and the visual interface.</p>
								</div>
								<div>
									<h4 className="font-semibold">Stage 2: Embedding Generation</h4>
									<p>
										Each chunk was converted into a numerical vector using OpenAI&apos;s embedding model. These vectors capture the semantic meaning of the text—so a question about &quot;electrical safety tickets&quot; would match
										content about &quot;safety certification requirements&quot; even without exact word matches.
									</p>
								</div>
								<div>
									<h4 className="font-semibold">Stage 3: Query Retrieval</h4>
									<p>
										When a user asks a question, it gets converted to a vector and compared against the document embeddings. The system retrieves the most semantically similar chunks—the ones most likely to answer the user&apos;s
										question.
									</p>
								</div>
								<div>
									<h4 className="font-semibold">Stage 4: Context Injection</h4>
									<p>
										The retrieved sources get injected into the AI&apos;s system prompt alongside the user&apos;s question. The AI then generates a response that naturally incorporates the source material, with explicit citations
										included in the output.
									</p>
								</div>
							</div>

							<h3 className="font-bold text-xl mt-6 mb-2">Source Citation UX</h3>
							<p className="mb-4">The citation system underwent several iterations. Early versions simply listed source titles at the bottom of responses—functional but not particularly useful.</p>

							<div className="my-6 w-full rounded-xl overflow-hidden border border-dark">
								<Image
									src="/project-images/panday/panday_sample_4.png"
									alt="Panday source citation implementation"
									width={1200}
									height={675}
									className="w-full h-auto object-cover"
								/>
							</div>

							<p className="mb-2">The final design presents sources as interactive cards inline with the response. Each card shows:</p>
							<ul className="list-disc pl-6 space-y-1 mb-4">
								<li>The source title (e.g., &quot;Level 2 Technical Training&quot;)</li>
								<li>A relevance score showing how strongly the content matched the question</li>
								<li>A hover preview showing the original text snippet</li>
								<li>A click-through to the full roadmap node</li>
							</ul>
							<p className="mb-4">This approach accomplishes three goals: it proves the response is grounded in real sources, it lets users verify information quickly, and it drives engagement back to the visual roadmap.</p>

							<h3 className="font-bold text-xl mt-6 mb-2">Differentiating Query Types</h3>
							<p className="mb-4">A critical design decision involved teaching the AI to distinguish between informational queries and actionable requests.</p>
							<p className="mb-4">When users ask &quot;What are the requirements for Level 3?&quot; they&apos;re seeking information—the AI responds with text only.</p>
							<p className="mb-4">When users ask &quot;Create a checklist to track my Level 3 progress,&quot; they want to track something—the AI proposes an interactive card they can accept or decline before anything gets created.</p>
							<p>This distinction prevents the AI from creating unwanted artifacts while still enabling powerful tracking features when users want them.</p>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Technical Highlights</h2>
							<p className="mb-4">While detailed code walkthroughs stay behind the scenes, several technical decisions worth noting:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									<strong>Hybrid Backend:</strong> The embeddings system supports both JSON file storage (simple, fast for small datasets) and PostgreSQL with vector extensions (scalable for growth). The system automatically falls
									back if one approach fails.
								</li>
								<li>
									<strong>Rate Limiting:</strong> The chat API protects against abuse using sliding-window rate limiting, ensuring fair access while allowing normal usage.
								</li>
								<li>
									<strong>Streaming Responses:</strong> AI responses stream in real-time rather than waiting for complete generation—creating a more responsive, conversational feel.
								</li>
								<li>
									<strong>Tool Invocation Pattern:</strong> When the AI needs to create roadmap items (custom checklists, resources), it proposes them interactively rather than acting immediately. Users review, edit if needed, and
									confirm before anything is saved.
								</li>
							</ul>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">What Made This Project Distinctive</h2>
							<p className="mb-4">Working on Panday required balancing several competing priorities that don&apos;t always align:</p>
							<ul className="space-y-4">
								<li>
									<strong>Accuracy vs. Accessibility:</strong> The AI needed to be technically sophisticated enough to retrieve relevant sources and generate coherent responses, while remaining simple enough that portfolio visitors
									(and their questions) don&apos;t require technical background to understand.
								</li>
								<li>
									<strong>Personalization vs. Complexity:</strong> Every user sees a different version of the roadmap based on their level and entry path—but the system shouldn&apos;t feel complicated. The personalization happens
									automatically; users just see what matters to them.
								</li>
								<li>
									<strong>Feature-Rich vs. Focused:</strong> The platform supports embeddings generation, chat history persistence, FAQ extraction pipelines, and custom node creation—but these features serve the core mission of
									helping people navigate their career. Extra complexity only exists when it directly enables that goal.
								</li>
							</ul>
						</section>

						<hr className="border-neutral-300" />

						<section>
							<h2 className="text-2xl font-bold mb-3">Conclusion</h2>
							<p className="mb-4">Panday demonstrates how AI can serve real career decisions responsibly—when accuracy, transparency, and user trust are built into the foundation rather than bolted on afterward.</p>
							<p className="mb-4">
								The project showcases full-stack development capabilities: designing data systems, building API endpoints, integrating AI models with user interfaces, and creating experiences that work reliably at scale. The
								portfolio-ready version of this work balances technical depth with accessibility, letting visitors appreciate the sophistication without needing to parse code.
							</p>
							<p>
								For visitors viewing this case study, the key takeaway is simple: the AI isn&apos;t a magic black box. It&apos;s a carefully designed system that retrieves relevant information, presents it clearly, and proves its work
								through transparent citations—helping real people make real decisions about their futures.
							</p>
						</section>
					</div>
				</div>

				<div className="mt-8 pt-4 border-t border-neutral-300 flex justify-end gap-3">
					<button
						onClick={onClose}
						className="px-4 py-2 rounded-md bg-transparent border border-dark font-medium hover:bg-neutral-100 transition-colors"
					>
						Close Case Study
					</button>
				</div>
			</div>
		</div>
	);

	if (typeof window === "undefined") return null;

	return createPortal(modalContent, document.body);
}
