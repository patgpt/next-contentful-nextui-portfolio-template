import { notFound } from "next/navigation";
import { Image } from "@nextui-org/image";

import { getAllPosts, getPostBySlug } from "@/lib/contentful/sdk";
export async function generateStaticParams() {
  const posts = await getAllPosts();

  if (!posts) {
    return notFound();
  }

  return posts.map((post) => ({
    slug: post?.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await getPostBySlug(params.slug);

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <Image
        // fill
        alt={postData?.coverImage?.title ?? ""}
        src={postData?.coverImage?.url ?? ""}
      />
      <h2 className="text-3 xl bg-white">{postData?.title}</h2>
    </div>
  );
}
