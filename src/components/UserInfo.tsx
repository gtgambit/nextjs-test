import React, { FC } from "react";
import Heading from "./Heading";
import { userType } from "@/types/types";

type userInfoProps = {
  user: userType;
};

const UserInfo: FC<userInfoProps> = ({ user }) => {
  const { name, email, address } = user || {};
  const { street, city, suite, zipcode } = address || {};

  if (!user) {
    return (
      <div>
        <Heading tag="h3" text="Empty user" />
      </div>
    );
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email:</strong>
        {email}
      </div>
      <div>
        <strong>Address:{`${street},${suite},${city},${zipcode}`}</strong>
      </div>
    </>
  );
};

export default UserInfo;
