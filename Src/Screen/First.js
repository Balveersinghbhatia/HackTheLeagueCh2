import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import React from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

const Firstscreen = ({navigation}) => {
  const handlePress = async () => {
    await EncryptedStorage.setItem('firstTime', 'false');
    console.log('navigating to login now');
    navigation.navigate('Login');
  };
  return (
    <>
      <View style={Styles.body}>
        <View style={Styles.imageContainer}>
          <Image
            source={require('../Assets/StartingImage.png')}
            style={Styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={Styles.textContainer}>
          <Text style={Styles.heading}>Plant Trees</Text>
          <Text style={Styles.heading}>Invest in Nature</Text>
          <Pressable style={Styles.button} onPress={handlePress}>
            <Text style={Styles.buttonTxt}>Get Started </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
let imageRadius = 0;
const Styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#04724D',
    marginTop: 0,
    backgroundColor: '#004E24',
  },
  imageContainer: {
    flex: 7.5,
    zIndex: 99,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: imageRadius,
    borderBottomRightRadius: imageRadius,
    resizeMode: 'cover',
    zIndex: 99,
  },
  textContainer: {
    zIndex: 1,
    flex: 2.5,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontWeight: '800',
    color: 'white',
    fontSize: RFPercentage(3.5),
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#312509',
    backgroundColor: '#65532F',
    backgroundColor: '#B56B45',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 50,

    marginTop: 20,
    margin: 'auto',
    alignSelf: 'center',
  },
  buttonTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Firstscreen;
