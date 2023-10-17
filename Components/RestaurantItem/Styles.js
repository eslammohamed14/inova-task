import {StyleSheet, Dimensions} from 'react-native';

export const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.65,
    zIndex: 4,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 40,
  },
  container: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  content: {
    padding: 20,
    height: '100%',
    width: '100%',
  },
  tag: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 30,
    width: 180,
    borderRadius: 10,
    bottom: 15,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 12,
  },
});

export default styles;
