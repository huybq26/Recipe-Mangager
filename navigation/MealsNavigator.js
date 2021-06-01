import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import FavoritesScreen from '../screens/FavoritesScreen';
import CustomHeaderButton from '../components/HeaderButton';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {},
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {},
    },
    MealDetail: MealDetailScreen,
    Favorites: FavoritesScreen,
    FiltersScreen: FiltersScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
export default createAppContainer(MealsNavigator);
// const Tab = createBottomTabNavigator();
// function MealsFavTabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name='Meals' component={MealsNavigator} />
//       <Tab.Screen name='Favorites' component={FavoritesScreen} />
//     </Tab.Navigator>
//   );
// }
// // const MealsFavTabNavigator = createBottomTabNavigator({
// //   Meals: MealsNavigator,
// //   Favorites: FavoritesScreen,
// // });

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MealsFavTabNavigator />
//     </NavigationContainer>
//   );
// }
// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name='Meals' component={MealsNavigator} />
//       <Tab.Screen name='Favorites' component={FavoritesScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
