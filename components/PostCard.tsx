"use client";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

import { Post } from "@/lib/contentful/generated/graphql";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-7"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{post.title}</p>
        <h4 className="font-medium text-xl">By: Patrick Kelly</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        isBlurred={true}
        src={
          post.coverImage?.url ||
          "https://nextui.org/images/card-example-5.jpeg"
        }
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://nextui.org/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny">Read more →</p>
          </div>
        </div>
        <Button as={"a"} href={`/blog/${post?.slug}`} radius="full" size="sm">
          Read more &rarr;
        </Button>
      </CardFooter>
    </Card>
  );
}
