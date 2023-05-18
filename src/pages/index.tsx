import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import scss from "@/styles/Home.module.scss";
import Heading from "@/components/Heading";
import Socials from "@/components/Socials";
import { socialsType } from "@/types/types";

type socialsProps = {
  socials: socialsType[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch("https://localhost:3000/api/socials/");
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

export const Home: FC<socialsProps> = ({ socials }) => {
  return (
    <>
      <div className={scss.wrapper}>
        <Head>
          <title>Home</title>
        </Head>
        <Heading tag="h1" text="Next.js app with TypeScript, SSR and SSG" />
        <Socials socials={socials} />
      </div>
    </>
  );
};

export default Home;
