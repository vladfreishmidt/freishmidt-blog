import Link from "next/link";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

const BlogPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview {...post} key={post.slug} />
  ));
  return (
    <section>
      <h1 className="font-bold text-xl mb-2">✏️ Read my Blog</h1>
      <p className="mb-8 text-sm text-gray-600">
        My blog is a cosy place where I share my thoughts and reflections on
        <em> tech</em> topics.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </section>
  );
};

export default BlogPage;
