import Image from "next/image";

export default function ShowStack({title, src, alt, className}: {title: string; src: string; alt: string; className?: string}) {
    return (
        <>
            <div className={`flex flex-col items-center text-center bg-platinum p-5 border shadow-sm shadow-crimson rounded-xl`}>
                <Image
                    src={src}
                    alt={alt}
                    className={`${className}`}
                    width={50}
                    height={50}
                />
                <p className={`${className}`}>{title}</p>
            </div>
        </>
    );
}
