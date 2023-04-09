import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {HStack, VStack, Text, View} from 'native-base';
const data = [
  {
    author: 'Author 1',
    description:
      'You are what you eat, so don’t be fast, cheap, easy, or fake.',
  },
  {
    author: 'Author 2',
    description:
      'You are what you eat, so don’t be fast, cheap, easy, or fake.',
  },
  {
    author: 'Author 3',
    description:
      'You are what you eat, so don’t be fast, cheap, easy, or fake.',
  },
];
const CarouselItem = ({item}) => {
  return (
    <HStack justifyContent={'center'} alignItems={'center'}>
      <View
        backgroundColor="#0DB462"
        height={85}
        width="310"
        borderRadius={25}
        marginBottom={100}
        my={5}
        padding="1">
        <HStack px={3} py={2}>
          <View width={25} height={65}>
            <Text color={'black'} fontSize={20} bottom={1.5}>
              ❝
            </Text>
          </View>
          <VStack width={260}>
            <Text style={{fontSize: 18}} fontWeight={'medium'}>
              {item.description}
            </Text>
            <Text
              style={{fontSize: 16, alignSelf: 'flex-end', marginTop: 5}}
              fontWeight={'medium'}
              right={3}>
              - {item.author}
            </Text>
          </VStack>
        </HStack>
      </View>
    </HStack>
  );
};

const {width} = Dimensions.get('window');
console.log(width);
let itemWidth = width - width / 10;
export default function CustomSlider() {
  return (
    <Carousel
      data={data}
      renderItem={CarouselItem}
      sliderWidth={width}
      itemWidth={itemWidth}
      loop={true}
      autoplay={true}
      autoplayInterval={5000}></Carousel>
  );
}
