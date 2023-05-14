import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CategoryCard = ({item}) => {
  const {strCategory, strCategoryThumb, strCategoryDescription} = item;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{strCategory}</Text>
      <View style={styles.detailsContainer}>
        <Image source={{uri: strCategoryThumb}} style={styles.image} />
        <Text style={styles.description}>{strCategoryDescription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    elevation: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  description: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
    fontFamily: 'Times New Roman',
  },
});

export default CategoryCard;
