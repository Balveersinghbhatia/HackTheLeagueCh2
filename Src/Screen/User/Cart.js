import {Box, Text, Center, NativeBaseProvider, View} from 'native-base';
import React, {useState, useEffect} from 'react';
import CartItems from '../../Components/CartItems.js';
import EmptyCart from '../../Components/EmptyCart.js';
import Coupon from '../../Screen/User/Coupon.js';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function CartScreen({navigation}) {
  const [empty, setEmpty] = useState(true);
  const [Data, setData] = useState({});

  const getData = async () => {
    let options = {
      method: 'GET',
    };

    // let x = await fetch("http://localhost:5000/api/login", options)
    await fetch(
      'https://me-and-my-tree-server2-bmdx.vercel.app/api/getcart',
      options,
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.success === 0) {
          setEmpty(true);
          console.log('Cart is emtpy');
        } else if (response.msg.length === 0) {
          setEmpty(true);
          console.log('Cart is emtpy');
        } else {
          setData(response.msg);
          setEmpty(false);
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <NativeBaseProvider>
      <Box flex={1} px={0} safeAreaTop>
        <View w="full" py={3} paddingLeft={5}>
          <Text color="black" bold fontSize={25} textAlign="left">
            My Cart
          </Text>
        </View>
        {empty === true ? (
          <EmptyCart />
        ) : (
          <CartItems navigation={navigation} treeData={Data} />
        )}
      </Box>
    </NativeBaseProvider>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={CartScreen} />
      <Stack.Screen name="Coupons" component={Coupon} />
    </Stack.Navigator>
  );
}
export default MyStack;
