import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";

export default function BlogHome({ blog }) {
    return (
        <main>
            <div className="bg-white py-10 px-10 rounded-lg mt-10">
                <h2 className="text-center text-2xl font-bold">記事一覧</h2>
                <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10">
                    {blog.map((blog) => (
                        <div key={blog.id}>
                            {console.log(blog.eyecatch?.url)}
                            <li>
                                <Link
                                    href={`/blog/${blog.id}`}
                                    className="w-full"
                                >
                                    <div className=" ">
                                        <Image
                                            className="w-full aspect-video object-cover"
                                            src={
                                                blog.eyecatch?.url
                                                    ? blog.eyecatch?.url
                                                    : "https://placehold.jp/300x250.png?dammy"
                                            }
                                            alt=""
                                            width="300"
                                            height="200"
                                        />
                                    </div>
                                    <p className="font-bold mt-2">
                                        {blog.title}
                                    </p>
                                </Link>
                            </li>
                        </div>
                    ))}
                </ul>
                <div className="text-center mt-10">
                    <Link
                        className="inline-block px-6 py-4 text-md font-bold text-white bg-black border rounded-lg"
                        href="/blog/"
                    >
                        記事一覧を見る
                    </Link>
                </div>
            </div>
        </main>
    );
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blogs" });

    return {
        props: {
            blog: data.contents,
        },
    };
};
