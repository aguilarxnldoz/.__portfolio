import Image from "next/image";

export default function ShowStack({title, src, alt}: {title: string; src: string; alt: string}) {
    return (
        <>
            <div className="flex flex-col items-center text-center">
                <Image
                    src={src}
                    alt={alt}
                    className=""
                    width={50}
                    height={50}
                />
                <p>{title}</p>
            </div>
        </>
    );
}
