export type UserProfileProps = {
  firstName: string;
  lastName: string;
  email: string;
  profileImageUrl: string | null;
  followers: number;
  following: number;
  verified: boolean;
  username: string;
};

export type UserStoreProps = {
  user: UserProfileProps | null;
};
