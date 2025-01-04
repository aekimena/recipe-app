export type UserProfileProps = {
  firstName: string;
  lastName: string;
  email: string;
  profileImageUrl: string | null;
  followers: number;
  following: number;
  verified: boolean;
};

export type UserStoreProps = {
  user: UserProfileProps | null;
};
