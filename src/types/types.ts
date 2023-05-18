export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type userType = {
  name: string;
  email: string;
  address: AddressType;
};

export type postType = {
  title: string;
  body: string;
};

export type socialsType = {
  id: string;
  icon: string;
  path: string;
};
