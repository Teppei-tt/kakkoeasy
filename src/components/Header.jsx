import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex justify-between h-20 border-solid border-b-2 bg-white shadow-md">
            <div>
                {/* <Link className=" w-10 h-10 block" href="/">
                    <Image
                        className="w-full h-auto"
                        src="/tinjer-logo.jpg"
                        width="200"
                        height="200"
                        alt="Picture of the author"
                    />
                </Link> */}
                <h1 className="h-full flex justify-between items-center px-4 text-2xl tracking-widest">
                    KAKKOEASY
                </h1>
            </div>

            <ul className="flex justify-between font-medium">
                <li>
                    <Link
                        className="h-full flex justify-between items-center px-4"
                        href="/"
                    >
                        TOP
                    </Link>
                </li>
                <li>
                    <Link
                        className="h-full flex justify-between items-center px-4"
                        href="/blog/"
                    >
                        BLOG
                    </Link>
                </li>
                <li>
                    <Link
                        className="h-full flex justify-between items-center px-4"
                        href="/contact/"
                    >
                        CONTACT
                    </Link>
                </li>
            </ul>
        </header>
    );
};
