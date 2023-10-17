import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    width: '90%',
    height: 40,
    borderColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
