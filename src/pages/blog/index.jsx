import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";

export default function BlogHome({ blog }) {
    return (
        <main>
            <div className="max-w-3xl my-20 mx-auto">
                <div className="rounded-lg mt-10">
                    <h2 className=" py-2 text-center text-2xl font-bold border-b-2 pb-2">
                        記事一覧
                    </h2>
                    <ul className="mt-5 grid grid-cols-2 gap-5">
                        {blog.map((blog) => (
                            <div key={blog.id} className="bg-white rounded-lg">
                                <li>
                                    <Link
                                        href={`/blog/${blog.id}`}
                                        className="w-full"
                                    >
                                        <div className="">
                                            <Image
                                                className="w-full aspect-video object-cover rounded-t-lg"
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
                                        <p className="font-bold px-3 pt-3 pb-5">
                                            {blog.title}
                                        </p>
                                    </Link>
                                </li>
                            </div>
                        ))}
                    </ul>
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
