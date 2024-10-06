import { notFound } from "next/navigation";
import { Link } from "@nextui-org/link";

import { title } from "@/components/primitives";
import { getAllPosts } from "@/lib/contentful/sdk";
import PostCard from "@/components/PostCard";
export default async function BlogPage() {
  const posts = await getAllPosts();

  if (!posts) {
    return notFound();
  }

  // console.log(posts);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className={title()}>Blog</h1>
      <ul className="flex grid grid-flow-row">
        {posts?.map((post) => (
          <li key={post?.slug}>
            <Link href={`/blog/${post?.slug}`}>
              <PostCard post={post} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
