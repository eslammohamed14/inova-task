import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  BackHandler,
  Platform,
} from 'react-native';
import styles from './Styles';

const Header = ({name}) => {
  const [backButtonPress, setBackButtonPress] = useState(false);

  const handleBackButtonClick = useCallback(() => {
    BackHandler.exitApp();

    setBackButtonPress(!backButtonPress);
  }, [backButtonPress]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButtonClick,
    );
    return () =>
      Platform.OS !== 'ios'
        ? backHandler?.removeEventListener?.(
            'hardwareBackPress',
            handleBackButtonClick,
          )
        : null;
  }, [backButtonPress, handleBackButtonClick]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackButtonClick}>
        <Image
          style={styles.image}
          source={require('../../Assets/Images/arrow.png')}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default Header;
