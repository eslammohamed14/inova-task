import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';

export const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 15,
  },
});

export default styles;
