import {StyleSheet, Dimensions} from 'react-native';

export const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    padding: 24,
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },

  center: {
    width: '100%',
    height: 400,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 22,
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  address: {
    fontSize: 16,
  },
});

export default styles;
