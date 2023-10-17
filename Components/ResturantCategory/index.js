import React from 'react';
import {View, Text} from 'react-native';
import RestaurantItem from '../RestaurantItem';
import {ResturantCategory as ResturantCategoryEnum} from '../../Constants';
import styles from './Styles';

const ResturantCategory = ({header, data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{ResturantCategoryEnum[header]}</Text>
      <View>
        {data?.map(resturant => (
          <RestaurantItem key={resturant.id} resturant={resturant} />
        ))}
      </View>
    </View>
  );
};

export default ResturantCategory;
