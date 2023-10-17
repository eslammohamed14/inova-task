import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

const RestaurantItem = ({resturant}) => {
  const navigation = useNavigation();

  const openDetailsScreen = () => {
    navigation.navigate('RestaurantDetalis', {
      resturantID: resturant?.id,
    });
  };

  return (
    <TouchableOpacity onPress={openDetailsScreen} style={styles.container}>
      <ImageBackground
        source={{uri: resturant?.image_url}}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.overlay} />
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.text}>{resturant?.name}</Text>
        <View style={styles.tag}>
          <Text
            style={
              styles.tagText
            }>{`${resturant?.rating} stars, ${resturant?.review_count} reviews`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;
