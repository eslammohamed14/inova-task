import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import groupBy from 'lodash/groupBy';
//local imports
import styles from './Styles';
import ApiService from '../../Services/ApiService';
import {Header, ResturantCategory} from '../../Components';

const SearchBar = ({searchText, setSearchText}) => {
  return (
    <View style={styles.searchContainer}>
      <Image
        style={styles.searchIcon}
        source={require('../../Assets/Images/search.png')}
      />
      <TextInput
        inputContainerStyle={{}}
        style={{width: '85%', height: '100%'}}
        value={searchText}
        onChangeText={value => setSearchText(value)}
      />
      <TouchableOpacity onPress={() => setSearchText('')}>
        <Image
          style={{width: 15, height: 15, resizeMode: 'contain'}}
          source={require('../../Assets/Images/close.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const Home = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [dataList, setDataList] = useState([]);

  React.useEffect(() => {
    ApiService.getBusinessesList(searchText).then(res => {
      const grouped = groupBy(res?.data?.businesses, 'price');

      setDataList(Object.entries(grouped));
    });
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header name={'Resturants'} />

        <SearchBar searchText={searchText} setSearchText={setSearchText} />

        <View style={{marginTop: 40}}>
          <FlatList
            data={dataList}
            keyExtractor={([key]) => key}
            renderItem={({item}) => (
              <ResturantCategory header={item[0]} data={item[1]} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
