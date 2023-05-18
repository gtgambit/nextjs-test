import { FC } from "react";
import Link from "next/link";
import Head from "next/head";
import Heading from "@/components/Heading";

import { userType } from "@/types/types";

type userProps = {
  users: userType;
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { users: data },
  };
};

export const Users: FC<userProps> = ({ users }) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Heading text="Users List:" />
      <ul>
        {users &&
          users.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/users/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Users;
