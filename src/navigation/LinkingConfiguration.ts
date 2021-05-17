import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          TabOne: {
            screens: {
              FavoriteScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              SeriesScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
