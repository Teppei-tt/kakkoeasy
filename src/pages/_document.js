import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ja">
            <Head />
            <body className="tracking-wider bg-slate-100">
                <Header />
                <Main />
                <Footer />
                <NextScript />
            </body>
        </Html>
    );
}
