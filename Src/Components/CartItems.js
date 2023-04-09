import {HStack, Spacer, Text, View, VStack, Pressable} from 'native-base';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
// import data from '../DemoData/TreesInfo';
import {StyleSheet, Image} from 'react-native';
import Rating from '../Components/Rating';
import NumericInput from 'react-native-numeric-input';
import Btn from '../Components/Btn';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

let totalPrice = 0;
let totalItems = 0;

function CartItems({navigation, treeData}) {
  console.info(treeData);
  const handleCouponPress = () => {
    navigation.navigate('Coupons');
    console.log('Moving to coupons page');
  };
  const handlePayNow = () => {
    setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 2000);
  };
  const CartCard = ({tree}) => {
    const [value, setValue] = useState(tree.cd_item_qty);
    totalPrice += tree.price;
    totalItems++;
    return (
      <View style={style.cartCard}>
        <View
          style={{
            height: 100,
            flex: 1.2,
          }}
          justifyContent={'center'}
          alignItems={'center'}
          borderRightWidth={2}>
          <Image
            source={{
              uri: 'https://demo.dcgcopper.com/wp-content/uploads/2023/04/mangoBg.png',
            }}
            alt={tree.type}
            style={{height: 80, width: 80}}
          />
        </View>
        <View
          style={{
            flex: 2.3,
            paddingHorizontal: 15,
            paddingVertical: 5,
            height: 100,
            // width: 241,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderTopWidth: 2,
            borderBottomWidth: 2,
          }}
          backgroundColor={'#0DB462'}>
          <VStack>
            <Text bold fontSize={16} opacity={0.7}>
              {tree.t_type}
            </Text>

            <Text bold fontSize={17}>
              ₹{tree.t_price}{' '}
            </Text>

            <Spacer />
            <HStack>
              <Rating value={tree.rating} size={13} />
              <Spacer />
              <NumericInput
                value={value}
                totalWidth={100}
                totalHeight={30}
                iconSize={10}
                step={1}
                // maxValue={25}
                // minValue={1}
                borderColor="black"
                rounded
                textColor="black"
                iconStyle={{color: 'black'}}
                rightButtonBackgroundColor="#61D49C"
                leftButtonBackgroundColor="#61D49C"
                onChange={value => {
                  console.log(value);
                  setValue(value);
                }}
              />
            </HStack>
          </VStack>
        </View>
        {/* <View alignItems="center"> */}
        {/* </View> */}
      </View>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 80}}
      data={treeData}
      renderItem={({item}) => <CartCard tree={item} />}
      ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
      ListFooterComponent={() => (
        <View mb={50}>
          <Pressable
            onPress={handleCouponPress}
            justifyContent={'center'}
            borderWidth={0.5}
            bg={'#0DB462'}
            h={55}
            color={'black'}
            borderRadius={5}
            marginBottom={2}>
            <HStack>
              <View flex={0.2} justifyContent="center" alignItems={'center'}>
                <MaterialCommunityIcons
                  name="sale"
                  color={'#FFD700'}
                  size={40}
                />
              </View>
              <VStack flex={0.6}>
                <Text fontSize={19} lineHeight={19} bold>
                  Apply Coupon
                </Text>
                <Spacer />
                <Text fontSize={15} lineHeight={15} fontWeight={'semibold'}>
                  Save upto 100rs now
                </Text>
              </VStack>
              <View
                flex={0.2}
                justifyContent="center"
                left={2}
                alignItems={'center'}>
                <FontAwesome5 name="chevron-right" size={20} />
              </View>
            </HStack>
          </Pressable>

          <View
            mx={6}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 7,
            }}>
            <Text bold fontSize={18}>
              Sub Total
            </Text>
            <Text bold fontSize={21}>
              ₹{totalPrice}
            </Text>
          </View>
          <View
            mx={6}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginBottom: 5,
            }}>
            <Text bold fontSize={18}>
              Discount
            </Text>
            <Text bold fontSize={21}>
              ₹{totalItems}
            </Text>
          </View>
          <Text>_____________________________________________________</Text>
          <HStack mt={3} borderWidth={1} borderRadius={10} py={1} px={5}>
            <Text fontSize={19} bold>
              Total
            </Text>
            <Spacer />
            <Text bold fontSize={22}>
              ₹{totalPrice - totalItems}
            </Text>
          </HStack>
          <Btn
            mt={4}
            bg={'#0DB462'}
            color={'black'}
            borderRadius={5}
            onPress={handlePayNow}>
            <HStack>
              {/* <Feather name="shopping-cart" size={30} /> */}
              <FontAwesome name="rupee" size={30} />
              <Text ml={3} bold fontSize={20}>
                Pay Now
              </Text>
            </HStack>
          </Btn>
        </View>
      )}
    />
  );
}

const style = StyleSheet.create({
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    // paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
  },
});

export default CartItems;
