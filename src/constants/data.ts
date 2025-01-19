import {
  BookmarkCollectionProps,
  ReviewProps,
  RecipeProps,
} from '../types/bookmark.type';
import {NotificationType} from '../types/enums';
import {NotificationProps} from '../types/notifications.types';
import {UserProfileProps} from '../types/profile.types';

export const dummyUser: UserProfileProps = {
  firstName: 'Ae',
  lastName: 'Kimena',
  username: 'aekimena',
  email: 'aekiemnawork@gmail.com',
  verified: true,
  followers: 4,
  following: 5,
  profileImageUrl: null,
};

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

export const dummyNotifications: Array<NotificationProps> = [
  {
    title: 'You have a new review from Wendy Williams',
    type: NotificationType.NEW_REVIEW,
    timeStamp: new Date(Date.now()).toISOString(),
    seen: false,
    user: dummyUser,
    recipe: dummyRecommendations[0],
  },
  {
    title: 'Wendy Williams liked your recipe',
    type: NotificationType.RECIPE_LIKED,
    timeStamp: new Date(Date.now()).toISOString(),
    seen: false,
    user: dummyUser,
  },
  {
    title: 'Wendy Williams just followed you',
    type: NotificationType.NEW_FOLLOWER,
    timeStamp: new Date(Date.now()).toISOString(),
    seen: true,
    user: dummyUser,
  },
  {
    title: "check out Wendy Williams' new recipe",
    type: NotificationType.NEW_RECIPE,
    timeStamp: new Date(Date.now()).toISOString(),
    seen: true,
    recipe: dummyRecommendations[0],
  },
  {
    title:
      "Congratulationa! Chicken salad recipe is number 1 on this week's recipes",
    type: NotificationType.RECIPE_OF_WEEK,
    timeStamp: new Date(Date.now()).toISOString(),
    seen: true,
    recipe: dummyRecommendations[0],
  },
];

export const dummyRatings: Array<ReviewProps> = [
  {
    user: dummyUser,
    rating: 5,
    comment:
      'Amaizing recipe. would try it for my husband! and also my kids; they love your dishes!!',
  },
  {
    user: dummyUser,
    rating: 5,
    comment: 'Amaizing recipe. would try it for my husband!',
  },
  {
    user: dummyUser,
    rating: 5,
    comment: 'Amaizing recipe. would try it for my husband!',
  },
  {
    user: dummyUser,
    rating: 5,
    comment: 'Amaizing recipe. would try it for my husband!',
  },
  {
    user: dummyUser,
    rating: 5,
    comment: 'Amaizing recipe. would try it for my husband!',
  },
  {
    user: dummyUser,
    rating: 5,
    comment: 'Amaizing recipe. would try it for my husband!',
  },
];

export const dummySearchResult: Array<UserProfileProps | RecipeProps> = [
  ...dummyRecommendations,
  dummyUser,
  dummyUser,
  dummyUser,
  dummyUser,
  dummyUser,
  dummyUser,
  dummyUser,
];
