import { client } from "../../libs/client";

export default function BlogHome({ blog }) {
    return (
        <main>
            <h1>{blog.title}</h1>
            <p>この辺りのルーティングの仕組みが分からん</p>
            <p>ヘッダーは共通部分として機能してる</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: `${blog.content}`,
                }}
            />
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
