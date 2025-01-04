export type RecipeProps = {
  title: string;
  // author: string;
  image: Array<string>;
  video?: string | null;
  description?: string;
  duration?: number;
  author?: {
    _id?: string;
    firstName?: string;
    lastName?: string;
    meFollowing?: boolean;
    followingMe?: boolean;
    profileImage?: string | null;
  };
  ingredients?: Array<{
    title?: string;
    quantity?: string;
  }>;
  instructions?: Array<{
    title?: string;
    instruction?: Array<string>;
  }>;
};

export type BookmarkCollectionProps = {
  collection: string;
  recipes: Array<RecipeProps>;
};
