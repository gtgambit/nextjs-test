import { FC } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import UserInfo from "@/components/UserInfo";
import { userType } from "@/types/types";

type usersProps = {
  user: userType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      user: data,
    },
  };
};

export const User: FC<usersProps> = ({ user }) => {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <UserInfo user={user} />
    </>
  );
};

export default User;
