import Link from "next/link";

export const AuthorRecommend = (props) => {
    const { blog } = props;

    return (
        <>
            <div className="bg-white py-10 px-5 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-bold">
                    管理人オススメ記事
                </h2>

                <div className="mt-10 text-center">
                    <Link
                        className="border-solid border-b-2 pb-2"
                        href={`/blog/${blog[0].id}`}
                    >
                        {blog[0].title}
                    </Link>
                </div>
            </div>
        </>
    );
};

{
}
