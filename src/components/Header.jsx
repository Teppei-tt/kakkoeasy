import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

/**
 * Header.jsxのjsがうごあなかったのは、クライアントサイドのjsとして認識されなかったから。
 * _document.jsはサーバーサイド扱いになるのか？？
 * https://zenn.dev/maztak/scraps/0f219179dc55cd
 * next.jsの開発では、サーバーサイドで実行されるのjsなのか、クライアントサイドで呼ばれるjsなのかを意識して開発させる。
 */
export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className="flex justify-between h-20 border-solid border-b-2 bg-white shadow-md">
            <div>
                <h1 className="h-full flex justify-between items-center px-4 text-2xl tracking-widest">
                    <Link href="/">KAKKOEASY</Link>
                </h1>
            </div>

            <div className="flex items-center pr-5">
                <ul className="md:flex justify-between font-medium h-full hidden ">
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

                <button
                    onClick={handleMenuOpen}
                    type="button"
                    className="z-20 space-y-2 md:hidden block"
                >
                    <div
                        className={
                            openMenu
                                ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                        }
                    />
                    <div
                        className={
                            openMenu
                                ? "opacity-0 transition duration-500 ease-in-out"
                                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                        }
                    />
                    <div
                        className={
                            openMenu
                                ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                        }
                    />
                </button>
            </div>

            <div
                className={
                    openMenu
                        ? "text-left fixed bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
                        : "fixed right-[-100%] ease-linear duration-300"
                }
            >
                <ul>
                    <li>afafa</li>
                </ul>
            </div>
        </header>
    );
};
