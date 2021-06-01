// This is React Component for the second screen (CategoryMealsScreen)
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
      <Button
        title='Favorites'
        onPress={() => {
          props.navigation.navigate('Favorites');
        }}
      />
      <Button
        title='Filter Meals'
        onPress={() => {
          props.navigation.navigate('FiltersScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  button: {
    flexDirection: 'row',
  },
});

export default MealList;
