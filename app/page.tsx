import Link from "next/link";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Image from "next/image";

const HomePage = () => {
  const postMetadata = getPostMetadata().slice(0, 2);
  const postPreviews = postMetadata.map((post) => (
    <PostPreview {...post} key={post.slug} />
  ));
  return (
    <main>
      <section className="mb-8">
        <div>
          <h1 className="font-bold text-xl mb-8">
            👋 hey, I'm Vladyslav Freishmidt
          </h1>
          <div>
            <p>
              I'm a Front-End developer who loves creating great user interfaces
              and believes in the <em>power</em> of practice.
            </p>
          </div>
        </div>
      </section>
      {/* Photo grid */}
      <section className="mb-16">
        <div className="flex gap-3">
          <div className="w-1/3 flex gap-3 flex-col">
            <Image
              src="/images/008.jpg"
              width={212}
              height={320}
              alt="Vladyslav Freishmidt"
              className="rounded-md"
              quality={100}
            />
            <Image
              src="/images/005.jpg"
              width={212}
              height={320}
              alt="Vladyslav Freishmidt"
              className="rounded-md"
              quality={100}
            />
          </div>
          <div className="w-1/3 flex gap-3 flex-col">
            <Image
              src="/images/001.jpg"
              width={212}
              height={160}
              alt="Vladyslav Freishmidt"
              className="rounded-md"
              quality={100}
            />
            <Image
              src="/images/002.jpg"
              width={212}
              height={320}
              alt="Vladyslav Freishmidt"
              className="rounded-md"
              quality={100}
            />
          </div>
          <div className="w-1/3 flex gap-3 flex-col">
            <Image
              src="/images/006.jpg"
              width={212}
              height={160}
              alt="Vladyslav Freishmidt"
              className="rounded-md"
              quality={100}
            />
            <Image
              src="/images/003.jpg"
              width={212}
              height={160}
              alt="Vladyslav Freishmidt"
              className="rounded-md"
              quality={100}
            />
          </div>
          <div className="w-1/3 flex gap-3 flex-col">
            <Image
              src="/images/007.jpg"
              width={212}
              height={320}
              alt="Vladyslav Freishmidt"
              className="rounded-md"
              quality={100}
            />
            <Image
              src="/images/004.jpg"
              width={212}
              height={320}
              alt="Vladyslav Freishmidt"
              className="rounded-md"
              quality={100}
            />
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="mb-16">
        <h2 className="font-bold text-md mb-2">Recent dev activity</h2>
        <p className="mb-8 text-gray-700 leading-7">
          I&apos;m enthusiastic about collaborating with brilliant minds to
          innovate and build cutting-edge software solutions. Let's connect and
          create something amazing together!
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:grid-rows-1 md:gap-4">
          <div className="w-full flex flex-col justify-between gap-4 border rounded px-3 py-4 shadow-sm">
            <div className="flex flex-col gap-2">
              <h3>Migration Manager tool</h3>
              <p className="text-sm text-gray-700">
                Web platform tailored for data migration between diverse domains
              </p>
            </div>
            <div>
              <span className="text-xs border border-gray-200 text-gray-600 py-1 px-2 bg-gray-200 rounded-2xl mr-1">
                React.js
              </span>
              <span className="text-xs border border-gray-200 text-gray-600 py-1 px-2 bg-gray-200 rounded-2xl">
                Nest.js
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between gap-4 border rounded px-3 py-4 shadow-sm">
            <div className="flex flex-col gap-2">
              <h3>Doccy Web-App</h3>
              <p className="text-sm text-gray-700">
                Web-application to 'chat' with a PDF file
              </p>
            </div>
            <div className="flex gap-1">
              <span className="text-xs border border-gray-200 text-gray-600 py-1 px-2 bg-gray-200 rounded-2xl">
                Next.js
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Work section */}
      <section className="mb-16">
        <h2 className="font-bold text-md mb-2">Work</h2>
        <p className="mb-8 text-gray-700 leading-7">
          Throughout my professional journey, I&apos;ve had the opportunity to
          work with numerous esteemed organizations, which has helped me grow as
          a person and as a professional.
        </p>
        <ul className="flex flex-col gap-4 border-l pl-4">
          <li>
            <h3>
              MyClouder
              <span className="text-gray-700 text-sm"> &mdash; 2023</span>
            </h3>
            <span className="text-gray-500 text-sm">Full-Stack developer</span>
          </li>
          <li>
            <h3>
              LeverX Group
              <span className="text-gray-700 text-sm"> &mdash; 2022</span>
            </h3>
            <span className="text-gray-500 text-sm">Front-end developer</span>
          </li>
          <li>
            <h3>
              IMAP <span className="text-gray-700 text-sm"> &mdash; 2021</span>
            </h3>
            <span className="text-gray-500 text-sm">Front-end developer</span>
          </li>
          <li>
            <h3>
              Talking Edge Studios
              <span className="text-gray-700 text-sm"> &mdash; 2018</span>
            </h3>
            <span className="text-gray-500 text-sm">Web Developer</span>
          </li>
        </ul>
      </section>
      {/* Events section */}
      <section className="mb-16">
        <h3 className="font-bold text-md mb-2">
          Events I&apos;m interested in
        </h3>
        <p className="mb-8 text-gray-700 leading-7">
          Here, I share updates on upcoming events I plan to attend, as well as
          live events I'll be tuning into. Stay connected to the latest in the
          tech industry and join me in exploring the future of innovation.
        </p>

        <ul className="flex flex-col md:flex-row flex-wrap items-start">
          <li className="w-full md:w-1/2 p-2">
            <Image
              src="/events/event-github-universe-2023.jpg"
              width={752}
              height={380}
              alt="Github Universe cover"
              quality={100}
              className="rounded-md min-h-[149px] object-cover"
            />
            <h3 className="mt-2 text-4 font-semibold">Github Universe 2023</h3>
            <span className="text-gray-600 text-sm">Nov 8-9</span>
          </li>
          <li className="w-full md:w-1/2 p-2">
            <Image
              src="/events/event-nextjs-conf-2023.png"
              width={752}
              height={380}
              alt="Nextjs Conf 2023 cover"
              quality={100}
            />
            <h3 className="mt-2 text-4 font-semibold">Next.js Conf 2023</h3>
            <span className="text-gray-600 text-sm">Oct 26, 10am PT.</span>
          </li>
          <li className="w-full md:w-1/2 p-2">
            <Image
              src="/events/event-reactjs-amsterdam-2023.png"
              width={711}
              height={374}
              alt="Nextjs Conf 2023 cover"
              className="rounded-md"
              quality={100}
            />
            <h3 className="mt-2 text-4 font-semibold">
              React Live in Amsterdam 2023
            </h3>
            <span className="text-gray-600 text-sm">Sep 29, 9:30am CEST.</span>
          </li>
        </ul>
      </section>
      {/* Blog featured */}
      <section className="mb-16">
        <h3 className="font-bold text-md mb-2">Featured articles</h3>
        <p className="mb-8 text-gray-700 leading-7">
          Explore a sneak peek into my tech blog, where I share my thoughts,
          knowledge, and best practices.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">{postPreviews}</div>
      </section>
    </main>
  );
};

export default HomePage;
