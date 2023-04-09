import React, {useState} from 'react';
import {Dimensions, StyleSheet, ToastAndroid} from 'react-native';
import {
  Text,
  ScrollView,
  HStack,
  Heading,
  Image,
  Box,
  NativeBaseProvider,
  Spacer,
  View,
} from 'native-base';
import NumericInput from 'react-native-numeric-input';
import Rating from '../../Components/Rating';
import Btn from '../../Components/Btn';
import Maps from '../../Components/Maps';
import Feather from 'react-native-vector-icons/Feather';

const height = Dimensions.get('screen').height;

export default function TreeIndividual({route, navigation}) {
  const [value, setValue] = useState(0);

  const {
    title: treeName,
    price,
    review,
    rating,
    description,
    id,
  } = route.params.item;
  const addToCart = async () => {
    console.log('Started adding to cart');
    let body = {
      item_id: id,
      item_qty: 1,
      item_price: price,
      item_total_price: price,
      remarks: 'Testing',
    };
    const option = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    };
    try {
      let response = await fetch(
        'https://me-and-my-tree-server2-bmdx.vercel.app/api/addtocart',
        option,
      );
      let json = await response.json();
      console.log(json);
      // if json.success is 1 means otp send success
      if (json.success === 1) {
        navigation.navigate('dashboard');
        ToastAndroid.show('Add to Cart Success', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Error: Cannot add to cart', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} paddingBottom={20}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* <LinearGradient
              colors={['white', '#0DB462']}
              start={{
                x: 0,
                y: 0.6,
              }}
              style={{
                flex: 1,
                height: '100%',
                width: '100%',
                position: 'absolute',
                // borderWidth: 2,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                // borderColor: "black",
              }}
            /> */}
            <Image
              source={require('../../Assets/cropedTree.png')}
              alt="Apple Tree"
              w="full"
              height={height / 2.5}
              resizeMode="contain"
            />
          </View>
          {
            //resizeMode="contain"
          }
          <View px={5} mt={5}>
            <Heading bold fontSize={22} mb={2} lineHeight={22}>
              {treeName}
            </Heading>
            <Rating value={rating} size={17} />
            <HStack space={2} alignItems="center" my={5}>
              <NumericInput
                value={value}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={25}
                minValue={1}
                borderColor="#E1F0D7"
                rounded
                textColor="black"
                iconStyle={{color: 'white'}}
                rightButtonBackgroundColor="#0DB462"
                leftButtonBackgroundColor="#0DB462"
                onChange={setValue}
              />
              <Spacer />
              <Heading bold color="black" fontSize={20}>
                {price}Rs
              </Heading>
            </HStack>
            <Text lineHeight={24} fontSize={15}>
              {description}
            </Text>
            <Text lineHeight={24} fontSize={15}>
              {description}
            </Text>
            {/* <Btn bg="#0DB462" color="white" mt={10}>
            ADD TO CART
          </Btn> */}
            <View my={5}>
              <Btn
                bg={'#0DB462'}
                color={'black'}
                borderRadius={5}
                onPress={addToCart}>
                <HStack>
                  <Feather name="shopping-cart" size={30} />
                  <Text ml={3} bold fontSize={20}>
                    Add to Cart
                  </Text>
                </HStack>
              </Btn>
            </View>

            <View style={{alignItems: 'center', paddingBottom: 20}}>
              <Text style={styles.sectionHeading}>Location near you</Text>
              <View mx={4}>
                <Maps
                  lati={23.102123223}
                  longi={72.5398788612}
                  markerTitle={'ICB Flora'}
                  Area={'Gota'}
                />
              </View>
            </View>

            {/* <Review data={review} /> */}
            {/* <View justifyContent={"center"} alignItems={"center"}w="full"
              height={height / 5}>
            <Image
              source={require("../../assets/logoFinal.png")}
              alt="Logo"
              w={230}
              height={180}
              resizeMode="cover"
            />
          </View> */}
          </View>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 22,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    // textAlign: "center",
    // backgroundColor: "red",
    // alignSelf: "center",
  },
});
