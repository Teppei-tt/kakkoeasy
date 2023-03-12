import Link from "next/link";
import { client } from "../../libs/client";

export default function BlogId({ blog }) {
    return (
        <main>
            <div className="max-w-3xl my-20 mx-auto bg-white p-10 ">
                <h1 className=" py-2 text-2xl font-bold border-b-2 pb-2">
                    {blog.title}
                </h1>
                <div
                    className="mt-10 leading-7"
                    dangerouslySetInnerHTML={{
                        __html: `${blog.content}`,
                    }}
                />

                <div className="text-center mt-10">
                    <Link
                        className="inline-block px-6 py-4 text-md font-bold text-white bg-black border rounded-lg"
                        href="/blog/"
                    >
                        記事一覧に戻る
                    </Link>
                </div>
            </div>
        </main>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blogs" });
    const paths = data.contents.map((content) => `/blog/${content.id}`);

    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blogs", contentId: id });

    return {
        props: {
            blog: data,
        },
    };
};
