import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';

export const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: Platform.OS == 'android' ? 15 : 0,
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 100,
  },
});

export default styles;
