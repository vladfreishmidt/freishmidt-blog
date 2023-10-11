import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border border-gray-200 p-4 rounded-md shadow-sm bg-white">
      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-gray-700 font-medium hover:underline mb-4">
          {props.title}
        </h2>
      </Link>
      <p className="text-sm text-gray-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
