import React, {useState, useEffect} from 'react';
import {View, Text, HStack, Spacer} from 'native-base';
import MapView, {Marker} from 'react-native-maps';

export default function nearestLocation({lati, longi, markerTitle, Area}) {
  const [mapRegion, setMapRegion] = useState({
    // latitude:  	23.1021232230,
    // longitude: 72.5398788612,
    latitude: lati,
    longitude: longi,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View
      marginTop={5}
      style={{
        height: 230,
        width: 315,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: 'black',
      }}
      zIndex={1}>
      <MapView
        style={{
          height: 214,
          width: 300,
          top: 2,
          left: 2.5,
          borderRadius: 15,
          zIndex: 0.1,
        }}
        region={mapRegion}>
        <Marker coordinate={mapRegion} title={markerTitle} />
      </MapView>
      <HStack>
        <View
          height={50}
          width={85}
          style={{
            bottom: 43,
            right: 2,
          }}
          backgroundColor="#0DB462"
          borderTopRightRadius={25}
          borderBottomRightRadius={25}
          borderBottomLeftRadius={10}
          alignItems="center"
          justifyContent={'center'}
          borderWidth={2}>
          <Text fontSize={20} bold>
            {Area}
          </Text>
        </View>
        <Spacer />
      </HStack>
    </View>
  );
}
