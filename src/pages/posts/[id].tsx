import { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import PostInfo from "@/components/PostInfo";

import { postType } from "@/types/types";

type PostProps = {
  post: postType;
};

type Params = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map(({ id }: { id: number }) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps, Params> = async (
  context
) => {
  const { id } = context.params!;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: data },
  };
};

const Post: FC<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
