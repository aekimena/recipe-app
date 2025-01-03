import {BookmarkCollectionProps} from '../types/bookmark.type';

export const dummyCategories = [
  {name: 'Braakfast', image: 'https://img.icons8.com/color/48/breakfast.png'},
  {name: 'Launch', image: 'https://img.icons8.com/plasticine/100/salad.png'},
  {name: 'Dinner', image: 'https://img.icons8.com/fluency/48/spaghetti.png'},
  {name: 'Desert', image: 'https://img.icons8.com/plasticine/100/cake.png'},
  {name: 'Supper', image: 'https://img.icons8.com/bubbles/100/bread.png'},
];

export const dummyRecommendations = [
  {
    title: 'Creamy pasta',
    author: 'Kevin Durant',
    image:
      'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg',
  },
  {
    title: 'Creamy pasta',
    author: 'Kevin Durant',
    image:
      'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg',
  },
  {
    title: 'Creamy pasta',
    author: 'Kevin Durant',
    image:
      'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg',
  },
  {
    title: 'Creamy pasta',
    author: 'Kevin Durant',
    image:
      'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg',
  },
  {
    title: 'Creamy pasta',
    author: 'Kevin Durant',
    image:
      'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg',
  },
];

export const dummyRecipeOfWeek = [
  {
    title: 'Creamy pasta',
    author: 'Kevin Durant',
    image:
      'https://ecolonomics.org/wp-content/uploads/2014/09/sushi-354628_1280.jpg',
  },
  {
    title: 'Creamy pasta',
    author: 'Kevin Durant',
    image:
      'https://wallsdesk.com/wp-content/uploads/2017/01/Fast-Food-Photos.jpg',
  },
  {
    title: 'Creamy pasta',
    author: 'Kevin Durant',
    image:
      'https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Food-Images-Download.jpg',
  },
  {
    title: 'Creamy pasta',
    author: 'Kevin Durant',
    image:
      'https://ecolonomics.org/wp-content/uploads/2014/09/sushi-354628_1280.jpg',
  },
];

export const dummyBookmarkCollections: Array<BookmarkCollectionProps> = [
  {collection: 'Breakfast', recipes: dummyRecipeOfWeek.slice(0, 1)},
  {collection: 'Party Dishes', recipes: dummyRecipeOfWeek.slice(0, 2)},
  {collection: 'Reception', recipes: dummyRecipeOfWeek.slice(0, 3)},
  {collection: 'For Babe', recipes: dummyRecipeOfWeek},
];
