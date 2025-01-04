import {BookmarkCollectionProps, RecipeProps} from '../types/bookmark.type';

export const dummyCategories = [
  {name: 'Braakfast', image: 'https://img.icons8.com/color/48/breakfast.png'},
  {name: 'Launch', image: 'https://img.icons8.com/plasticine/100/salad.png'},
  {name: 'Dinner', image: 'https://img.icons8.com/fluency/48/spaghetti.png'},
  {name: 'Desert', image: 'https://img.icons8.com/plasticine/100/cake.png'},
  {name: 'Supper', image: 'https://img.icons8.com/bubbles/100/bread.png'},
];

export const dummyRecommendations: Array<RecipeProps> = [
  {
    title: 'Classic Ham Roll Cheese Eggs',
    duration: 20,
    description:
      'The best cremy past you have ever tasted in amillion years, The best cremy past you have ever tasted in amillion years,',
    author: {
      _id: '123',
      firstName: 'Kevin',
      lastName: 'Durant',
      profileImage: '',
      meFollowing: false,
      followingMe: false,
    },
    image: [
      'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg',
      'https://ecolonomics.org/wp-content/uploads/2014/09/sushi-354628_1280.jpg',
    ],
    ingredients: [
      {title: 'Chicken', quantity: '150g'},
      {title: 'Beef', quantity: '150g'},
      {title: 'Curry', quantity: '150g'},
      {title: 'Pepper & Tomatoe', quantity: '150g'},
      {title: 'Chicken', quantity: '150g'},
    ],
    instructions: [
      {
        title: 'Add the stew before',
        instruction: [
          'Add the stew before it turns red',
          'Stir for 30mins',
          'Lock in the quantity of salt',
        ],
      },
      {
        title: 'Add the stew before',
        instruction: [
          'Add the stew before it turns red',
          'Lock in the quantity of salt',
        ],
      },
      {
        title: 'Add the stew before',
        instruction: ['Stir for 30mins'],
      },
    ],
  },
  {
    title: 'Creamy pasta',
    duration: 20,
    description: 'The best cremy past you have ever tasted in amillion years',
    author: {
      _id: '123',
      firstName: 'Kevin',
      lastName: 'Durant',
      profileImage: '',
      meFollowing: false,
      followingMe: false,
    },
    image: [
      'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg',
    ],
    ingredients: [
      {title: 'Chicken', quantity: '150g'},
      {title: 'Beef', quantity: '150g'},
      {title: 'Curry', quantity: '150g'},
      {title: 'Pepper & Tomatoe', quantity: '150g'},
      {title: 'Chicken', quantity: '150g'},
    ],
    instructions: [
      {
        title: 'Add the stew before',
        instruction: [
          'Add the stew before it turns red',
          'Stir for 30mins',
          'Lock in the quantity of salt',
        ],
      },
    ],
  },
  {
    title: 'Creamy pasta',
    duration: 20,
    description: 'The best cremy past you have ever tasted in amillion years',
    author: {
      _id: '123',
      firstName: 'Kevin',
      lastName: 'Durant',
      profileImage: '',
      meFollowing: false,
      followingMe: false,
    },
    image: [
      'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg',
    ],
    ingredients: [
      {title: 'Chicken', quantity: '150g'},
      {title: 'Beef', quantity: '150g'},
      {title: 'Curry', quantity: '150g'},
      {title: 'Pepper & Tomatoe', quantity: '150g'},
      {title: 'Chicken', quantity: '150g'},
    ],
    instructions: [
      {
        title: 'Add the stew before',
        instruction: [
          'Add the stew before it turns red',
          'Stir for 30mins',
          'Lock in the quantity of salt',
        ],
      },
    ],
  },
  {
    title: 'Creamy pasta',
    duration: 20,
    description: 'The best cremy past you have ever tasted in amillion years',
    author: {
      _id: '123',
      firstName: 'Kevin',
      lastName: 'Durant',
      profileImage: '',
      meFollowing: false,
      followingMe: false,
    },
    image: [
      'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg',
    ],
    ingredients: [
      {title: 'Chicken', quantity: '150g'},
      {title: 'Beef', quantity: '150g'},
      {title: 'Curry', quantity: '150g'},
      {title: 'Pepper & Tomatoe', quantity: '150g'},
      {title: 'Chicken', quantity: '150g'},
    ],
    instructions: [
      {
        title: 'Add the stew before',
        instruction: [
          'Add the stew before it turns red',
          'Stir for 30mins',
          'Lock in the quantity of salt',
        ],
      },
    ],
  },
];

export const dummyBookmarkCollections: Array<BookmarkCollectionProps> = [
  {collection: 'Breakfast', recipes: dummyRecommendations.slice(0, 1)},
  {collection: 'Party Dishes', recipes: dummyRecommendations.slice(0, 2)},
  {collection: 'Reception', recipes: dummyRecommendations.slice(0, 3)},
  {collection: 'For Babe', recipes: dummyRecommendations},
];
