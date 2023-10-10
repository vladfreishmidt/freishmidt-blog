import Link from "next/link";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import GithubIcon from "@/components/GithubIcon";
import InstagramIcon from "@/components/InstagramIcon";
import TwitterIcon from "@/components/TwitterIcon";
import LinkedInIcon from "@/components/LinkedInIcon";
import MailIcon from "@/components/MailIcon";

const LinksPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview {...post} key={post.slug} />
  ));
  return (
    <section>
      <h1 className="font-bold text-xl mb-2">
        🌍 Let's connect and create something amazing together!
      </h1>
      <div className="py-16">
        <div className="flex flex-col gap-2">
          <a
            href="mailto:vladfreishmidt.webdevelopment@gmail.com?subject=Email from freishmidt.com"
            target="_blank"
            className="flex items-center justify-center gap-2 border border-neutral-200  bg-neutral-50 rounded px-3 py-4 w-full"
          >
            <MailIcon />
          </a>
          <a
            href="https://github.com/vladfreishmidt"
            target="_blank"
            className="flex items-center justify-center gap-2 border border-neutral-200  bg-neutral-50 rounded px-3 py-4 w-full"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/vladfreishmidt/"
            target="_blank"
            className="flex items-center justify-center gap-2 border border-neutral-200  bg-neutral-50 rounded px-3 py-4 w-full"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/Vlad_Freishmidt"
            target="_blank"
            className="flex items-center justify-center gap-2 border border-neutral-200  bg-neutral-50 rounded px-3 py-4 w-full"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.instagram.com/devhappens/"
            target="_blank"
            className="flex items-center justify-center gap-2 border border-neutral-200  bg-neutral-50 rounded px-3 py-4 w-full"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinksPage;
