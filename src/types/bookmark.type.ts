export type RecipeProps = {
  title: string;
  author: string;
  image: string;
};

export type BookmarkCollectionProps = {
  collection: string;
  recipes: Array<RecipeProps>;
};
