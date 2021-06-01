// This is second screen (after clicking any meal type in first screen)
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  FlatList,
} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import CategoriesScreen from './CategoriesScreen';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  ); // this will give us the array of displayed meals that contain the catId

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId); // find in the array CATEGORIES the appropriate element that have the same id
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
