import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border border-gray-200 p-4 rounded-md shadow-sm bg-white">
      <p className="text-sm text-slate-400">{props.date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-gray-700 hover:underline mb-4">{props.title}</h2>
      </Link>

      <p className="text-sm text-slate-600">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
