import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import CategoryCard from './CategoryCard';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const MenuScreen = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(API_URL);
        setMenuItems(response.data.categories);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  const renderMenuItem = ({item}) => <CategoryCard item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Restaurant Menu Categories</Text>
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default MenuScreen;
