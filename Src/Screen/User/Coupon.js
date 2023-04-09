import React from 'react';
import {
  Box,
  NativeBaseProvider,
  Heading,
  VStack,
  HStack,
  Spacer,
  Text,
  Input,
  Pressable,
  View,
  FlatList,
  ScrollView,
} from 'native-base';
import {StyleSheet} from 'react-native';

export default function App() {
  const data = [
    {
      coupon: 'co2pk',
      description: 'Get upto 100rs off on next purchase',
    },
    {
      coupon: 'pause',
      description: 'Get upto 120rs off',
    },
    {
      coupon: 'NoCap',
      description: 'Get upto 200rs off',
    },
    {
      coupon: 'Drown',
      description: 'Get upto 80rs off on next purchase',
    },
    {
      coupon: 'Mishri',
      description: 'Get upto 20% off on next purchase',
    },
    {
      coupon: 'Mazaak',
      description: 'Get upto 100rs off on next purchase',
    },
  ];

  const CouponCard = ({tree}) => {
    return (
      <View style={style.cartCard}>
        <View
          style={{
            height: 100,
            flex: 1.2,
            paddingTop: 10,
          }}
          alignItems={'center'}>
          <View backgroundColor={'#0DB462'} padding={2} borderRadius={8}>
            <Text fontSize={20} fontWeight={'bold'}>
              {tree.coupon}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 2.5,
            height: 100,
            paddingTop: 5,
          }}>
          <VStack height={87}>
            <Text bold fontSize={18}>
              {tree.description}
            </Text>
            <Spacer />
            <Pressable
              height={30}
              width={75}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={'#4DB462'}
              borderWidth={2}
              borderRadius={8}
              alignSelf={'flex-end'}
              position="relative"
              right={1}>
              <Text fontWeight={500} fontSize={15}>
                Apply
              </Text>
            </Pressable>
          </VStack>
        </View>
      </View>
    );
  };

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} bg="white" px={5}>
        <HStack my={4} alignItems="center">
          <VStack space={1}>
            <Heading bold fontSize={25} lineHeight={25}>
              Coupons
            </Heading>
          </VStack>
        </HStack>
        <HStack
          mt={2}
          style={{paddingHorizontal: 45}}
          w="full"
          justifyContent="center"
          ml={-2}
          mb={5}>
          <Input
            placeholder="Search"
            size="lg"
            w="100%"
            borderWidth={2}
            type="search"
            borderRightRadius={0}
          />
          <Pressable
            height={50}
            width={70}
            justifyContent={'center'}
            alignItems={'center'}
            left={5}
            backgroundColor={'#4DB462'}
            borderWidth={2}
            borderRadius={8}>
            <Text fontWeight={700} fontSize={20}>
              Apply
            </Text>
          </Pressable>
        </HStack>
        <Heading left={2}>Coupons For You</Heading>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View mt={5}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 80}}
              data={data}
              renderItem={({item}) => <CouponCard tree={item} />}
            />
          </View>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
  cartCard: {
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 7,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
  },
});
