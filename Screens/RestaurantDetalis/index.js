import React from 'react';
import {View, Text} from 'react-native';
import ApiService from '../../Services/ApiService';
import {LeafletView} from 'react-native-leaflet-view';
import styles from './Styles';

const RestaurantDetalis = ({navigation, route}) => {
  const [details, setDetails] = React.useState(null);

  const fetchResturantDetails = id => {
    ApiService.getBusinessInfo(id).then(res => {
      setDetails(res?.data);
    });
  };

  React.useEffect(() => {
    fetchResturantDetails(route?.params?.resturantID);
  }, [route?.params?.resturantID]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.name}>{details?.name}</Text>
        {details?.location?.display_address?.map(address => (
          <Text key={address} style={styles.address}>
            {address}
          </Text>
        ))}
      </View>

      <View style={styles.center}>
        <LeafletView
          zoom={500}
          mapCenterPosition={{
            lat: [details?.latitude],
            lng: [details?.longtude],
          }}
        />
      </View>
    </View>
  );
};

export default RestaurantDetalis;
