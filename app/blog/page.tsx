import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { title } from "@/components/primitives";
import { getAllPosts } from "@/lib/contentful/sdk";
export default async function BlogPage() {
  const posts = await getAllPosts();

  console.log(posts);

  if (!posts) {
    return notFound();
  }

  return (
    <div>
      <h1 className={title()}>Blog</h1>
      <ul className="flex-wrap">
        {posts.map((post) => (
          <li key={post?.slug}>
            <Link href={`/blog/${post?.slug}`}>
              <h2 className="text-pretty, text-2xl mb-4">{post?.title}</h2>
              <Image
                alt={post?.title || ""}
                height={200}
                src={post?.coverImage?.url || ""}
                width={200}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
