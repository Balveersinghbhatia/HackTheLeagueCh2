import React from 'react';
import {
  Box,
  NativeBaseProvider,
  Heading,
  VStack,
  HStack,
  Text,
  Input,
  View,
  ScrollView,
} from 'native-base';
import {MaterialCommunityIcons, EvilIcons} from 'react-native-vector-icons';
import TreesAll from '../../Components/TreeCard.js';
import OfferSlider from '../../Components/Offers.js';

function App({navigation}) {
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} bg="white" px={5}>
        <HStack my={4} alignItems="center">
          <VStack space={1}>
            <Heading bold fontSize={25} lineHeight={25}>
              Shop
            </Heading>
          </VStack>
        </HStack>
        <HStack
          mt={2}
          px={20}
          w="full"
          alignItems="center"
          justifyContent="center"
          ml={2}
          mb={5}>
          <Input
            placeholder="Search"
            size="lg"
            w="170%"
            borderWidth={2}
            type="search"
            borderRightRadius={0}
          />
        </HStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Heading left={2}>Offers</Heading>
            <View style={{right: 70}}>
              <OfferSlider />
            </View>
          </View>
          <View mt={5}>
            <Heading left={2}>Trees</Heading>
            <View mt={2}>
              <TreesAll navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}

export default App;
