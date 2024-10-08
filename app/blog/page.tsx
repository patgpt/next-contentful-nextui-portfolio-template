import { notFound } from "next/navigation";
import { Link } from "@nextui-org/link";

import { title } from "@/components/primitives";
import { getAllPosts } from "@/lib/contentful/sdk";
import PostCard from "@/components/PostCard";
import BlogCard from "@/components/project-card";
export default async function BlogPage() {
  const posts = await getAllPosts();

  if (!posts) {
    return notFound();
  }

  // console.log(posts);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className={title()}>Blog</h1>
      <ul className="grid grid-flow-row gap-4 w-full md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <li key={post?.slug}>
            <Link href={`/blog/${post?.slug}`}>
              <PostCard post={post} />
            </Link>
          </li>
        ))}

        <BlogCard
          description="This is the description for my first blog post."
          href="/blog/my-first-blog-post"
          title="My First Blog Post"
        />
      </ul>
    </div>
  );
}
