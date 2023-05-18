import Heading from "@/components/Heading";
import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import scss from "../styles/404.module.scss";

const PageNotFound: FC = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <div className={scss.wrapper}>
        <Heading tag="h1" text="Oops, something is going wrong..." />
      </div>
    </>
  );
};

export default PageNotFound;
