export default function Ghost({className = "w-[140px] h-[140px]"}: {className?: string}) {
    return (
        <div className={`relative ${className}`}>
            <div className="w-full h-full grid grid-cols-[repeat(14,1fr)] grid-rows-[repeat(14,1fr)] animate-up-down">
                {/* Red Body Parts (Background Layer) */}
                {/* Row 1 */}
                <div className="col-start-6 col-span-4 row-start-1 bg-red-600"></div>
                <div className="col-start-10 row-start-1 animate-flicker-1 bg-red-600"></div>

                {/* Row 2 */}
                <div className="col-start-4 col-span-8 row-start-2 bg-red-600"></div>

                {/* Row 3 */}
                <div className="col-start-3 col-span-10 row-start-3 bg-red-600"></div>

                {/* Rows 4-6 */}
                <div className="col-start-2 col-span-12 row-start-4 row-span-3 bg-red-600"></div>

                {/* Rows 7-12 (Body) */}
                <div className="col-start-1 col-span-14 row-start-7 row-span-6 bg-red-600"></div>

                {/* Row 13 (Bottom details) */}
                <div className="col-start-1 col-span-2 row-start-13 bg-red-600"></div>
                <div className="col-start-3 row-start-13 animate-flicker-1 bg-red-600"></div>
                <div className="col-start-4 row-start-13 bg-red-600"></div>
                <div className="col-start-5 row-start-13 animate-flicker-0 bg-red-600"></div>
                <div className="col-start-6 row-start-13 bg-red-600"></div>
                <div className="col-start-7 col-span-2 row-start-13 animate-flicker-1 bg-red-600"></div>
                <div className="col-start-9 row-start-13 bg-red-600"></div>
                <div className="col-start-10 row-start-13 animate-flicker-0 bg-red-600"></div>
                <div className="col-start-11 row-start-13 bg-red-600"></div>
                <div className="col-start-12 row-start-13 animate-flicker-1 bg-red-600"></div>
                <div className="col-start-13 col-span-2 row-start-13 bg-red-600"></div>

                {/* Row 14 (Bottom edge animations) */}
                <div className="col-start-1 row-start-14 animate-flicker-0 bg-red-600"></div>
                <div className="col-start-2 row-start-14 animate-flicker-1 bg-red-600"></div>
                <div className="col-start-3 row-start-14 animate-flicker-1 bg-red-600"></div>
                <div className="col-start-4 row-start-14 animate-flicker-0 bg-red-600"></div>
                <div className="col-start-5 row-start-14 animate-flicker-0 bg-red-600"></div>
                <div className="col-start-6 row-start-14 animate-flicker-0 bg-red-600"></div>
                <div className="col-start-7 col-span-2 row-start-14 animate-flicker-1 bg-red-600"></div>
                <div className="col-start-9 row-start-14 animate-flicker-0 bg-red-600"></div>
                <div className="col-start-10 row-start-14 animate-flicker-0 bg-red-600"></div>
                <div className="col-start-11 row-start-14 animate-flicker-0 bg-red-600"></div>
                <div className="col-start-12 row-start-14 animate-flicker-1 bg-red-600"></div>
                <div className="col-start-13 row-start-14 animate-flicker-1 bg-red-600"></div>
                <div className="col-start-14 row-start-14 animate-flicker-0 bg-red-600"></div>

                {/* Eyes (White Layer) */}
                {/* Left Eye */}
                <div className="col-start-3 col-span-2 row-start-4 row-span-5 bg-white z-10"></div>
                <div className="col-start-2 col-span-4 row-start-5 row-span-3 bg-white z-10"></div>

                {/* Right Eye */}
                <div className="col-start-9 col-span-2 row-start-4 row-span-5 bg-white z-10"></div>
                <div className="col-start-8 col-span-4 row-start-5 row-span-3 bg-white z-10"></div>

                {/* Pupils (Blue Layer) */}
                <div className="col-start-2 col-span-2 row-start-6 row-span-2 bg-black z-20 animate-eyes-movement"></div>
                <div className="col-start-8 col-span-2 row-start-6 row-span-2 bg-black z-20 animate-eyes-movement"></div>
            </div>
            <div className="bg-black w-full h-full absolute rounded-full [transform:rotateX(80deg)] blur-[20px] top-[80%] animate-shadow-movement -z-10"></div>
        </div>
    );
}
