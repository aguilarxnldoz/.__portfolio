export default function Ghost({className = "w-[140px] h-[140px]"}: {className?: string}) {
    return (
        <div className={`relative ${className}`}>
            <div className="w-full h-full grid grid-cols-[repeat(14,1fr)] grid-rows-[repeat(14,1fr)] animate-up-down">
                <div className="col-start-6 col-span-4 row-start-1 bg-crimson"></div>
                <div className="col-start-10 row-start-1 animate-flicker-1 bg-crimson"></div>
                <div className="col-start-4 col-span-8 row-start-2 bg-crimson"></div>
                <div className="col-start-3 col-span-10 row-start-3 bg-crimson"></div>
                <div className="col-start-2 col-span-12 row-start-4 row-span-3 bg-crimson"></div>
                <div className="col-start-1 col-span-14 row-start-7 row-span-6 bg-crimson"></div>
                <div className="col-start-1 col-span-2 row-start-13 bg-crimson"></div>
                <div className="col-start-3 row-start-13 animate-flicker-1 bg-crimson"></div>
                <div className="col-start-4 row-start-13 bg-crimson"></div>
                <div className="col-start-5 row-start-13 animate-flicker-0 bg-crimson"></div>
                <div className="col-start-6 row-start-13 bg-crimson"></div>
                <div className="col-start-7 col-span-2 row-start-13 animate-flicker-1 bg-crimson"></div>
                <div className="col-start-9 row-start-13 bg-crimson"></div>
                <div className="col-start-10 row-start-13 animate-flicker-0 bg-crimson"></div>
                <div className="col-start-11 row-start-13 bg-crimson"></div>
                <div className="col-start-12 row-start-13 animate-flicker-1 bg-crimson"></div>
                <div className="col-start-13 col-span-2 row-start-13 bg-crimson"></div>
                <div className="col-start-1 row-start-14 animate-flicker-0 bg-crimson"></div>
                <div className="col-start-2 row-start-14 animate-flicker-1 bg-crimson"></div>
                <div className="col-start-3 row-start-14 animate-flicker-1 bg-crimson"></div>
                <div className="col-start-4 row-start-14 animate-flicker-0 bg-crimson"></div>
                <div className="col-start-5 row-start-14 animate-flicker-0 bg-crimson"></div>
                <div className="col-start-6 row-start-14 animate-flicker-0 bg-crimson"></div>
                <div className="col-start-7 col-span-2 row-start-14 animate-flicker-1 bg-crimson"></div>
                <div className="col-start-9 row-start-14 animate-flicker-0 bg-crimson"></div>
                <div className="col-start-10 row-start-14 animate-flicker-0 bg-crimson"></div>
                <div className="col-start-11 row-start-14 animate-flicker-0 bg-crimson"></div>
                <div className="col-start-12 row-start-14 animate-flicker-1 bg-crimson"></div>
                <div className="col-start-13 row-start-14 animate-flicker-1 bg-crimson"></div>
                <div className="col-start-14 row-start-14 animate-flicker-0 bg-crimson"></div>
                <div className="col-start-3 col-span-2 row-start-4 row-span-5 bg-white z-10"></div>
                <div className="col-start-2 col-span-4 row-start-5 row-span-3 bg-white z-10"></div>
                <div className="col-start-9 col-span-2 row-start-4 row-span-5 bg-white z-10"></div>
                <div className="col-start-8 col-span-4 row-start-5 row-span-3 bg-white z-10"></div>
                <div className="col-start-2 col-span-2 row-start-6 row-span-2 bg-black z-20 animate-eyes-movement"></div>
                <div className="col-start-8 col-span-2 row-start-6 row-span-2 bg-black z-20 animate-eyes-movement"></div>
            </div>
            <div className="bg-black w-full h-full absolute rounded-full transform-[rotateX(80deg)] blur-[20px] top-[80%] animate-shadow-movement -z-10"></div>
        </div>
    );
}
