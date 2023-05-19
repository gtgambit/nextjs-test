import { FC } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import UserInfo from "../../components/UserInfo";
import { userType } from "../../types/types";
import { ParsedUrlQuery } from "querystring";

type usersProps = {
  user: userType;
};

interface MyQuery extends ParsedUrlQuery {
  id?: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as MyQuery;

  if (!id) {
    return {
      notFound: true,
    };
  }

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
