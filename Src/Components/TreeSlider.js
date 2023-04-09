import React from 'react';
import {ParallaxImage} from 'react-native-snap-carousel';
import {View, Text, Pressable} from 'react-native';
import styles from '../Config/Style';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
const data = [
  {
    id: 1,
    title: 'Banyan Tree',
    description:
      'A banyan tree is important in the Hindu religion. It is profoundly worshipped and revered in India.',
    source:
      'https://i.pinimg.com/originals/37/66/e9/3766e91eda5ba4555ceac291c31e8887.jpg',
    price: 999,
    rating: 1,
    review: [
      {
        name: 'user 1',
        rating: 3,
        date: '12th Sept 2019',
        comment:
          'Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome',
      },
      {
        name: 'user 1',
        rating: 3,
        date: '12th Sept 2019',
        comment:
          'Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome',
      },
    ],
  },
  {
    id: 2,
    title: 'Neem Tree',
    description:
      'The leaves of the Neem tree have very good medical uses. It is also used to control pests and to prevent diseases. ',
    source:
      'https://images.freeimages.com/images/large-previews/6b8/neem-tree-1639620.jpg',
    price: 799,
    rating: 3.5,
    review: [
      {
        name: 'user 1',
        rating: 3,
        date: '12th Sept 2019',
        comment:
          'Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome',
      },
      {
        name: 'user 1',
        rating: 3,
        date: '12th Sept 2019',
        comment:
          'Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome',
      },
    ],
  },
  {
    id: 38,
    title: 'Mango Tree',
    description:
      'The bark of the mango tree is an astringent that is used in diphtheria and rheumatism. The gum is used to heal cracked feet and scabies	',
    source:
      'https://www.plantedshack.com/wp-content/uploads/2020/10/Do-Mango-Trees-Lose-Their-Leaves.jpg',
    // "https://www.gardeningknowhow.com/wp-content/uploads/2013/05/mango-tree.jpg",
    price: 899,
    rating: 2.5,
    review: [
      {
        name: 'user 1',
        rating: 3,
        date: '12th Sept 2019',
        comment:
          'Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome',
      },
      {
        name: 'user 1',
        rating: 3,
        date: '12th Sept 2019',
        comment:
          'Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome',
      },
    ],
  },
  {
    id: 39,
    title: 'Cocunut Tree',
    description:
      'The coconut tree is capable of fulfilling all primary needs of human beings, from food, clothing to shelter.',
    source:
      'https://www.panoramatreeservice.com/wp-content/uploads/2013/01/coconutpalm01.jpg',
    price: 199,
    rating: 5,
    review: [
      {
        name: 'user 1',
        rating: 3,
        date: '12th Sept 2019',
        comment:
          'Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome',
      },
      {
        name: 'user 1',
        rating: 3,
        date: '12th Sept 2019',
        comment:
          'Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome',
      },
    ],
  },
];

// This function represents whole slider
const {width} = Dimensions.get('window');
export default function CustomSlider() {
  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    data: data,
    renderItem: function CarouselItem({item, index}, parallaxProps) {
      return (
        <Pressable
          key={index}
          style={{marginVertical: 20}}
          onPress={() => {
            handlePress(item);
          }}>
          <View style={styles.item}>
            <ParallaxImage
              /* the source of the image */
              source={{uri: item.source}}
              containerStyle={styles.imageContainer}
              style={styles.image}
              showSpinner={true}
              spinnerColor="green"
              /* pass in the necessary props */
              {...parallaxProps}
            />
            <View style={{paddingVertical: 10, paddingHorizontal: 15}}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        </Pressable>
      );
    },
    hasParallaxImages: true,
    layout: 'default',

    // layoutCardOffset: `18`,
  };

  const navigation = useNavigation();
  const handlePress = item => {
    navigation.navigate('treeIndividual', {
      item,
    });
  };
  return (
    // <View style={styles.container}>
    <>
      <Carousel {...settings} />
    </>
    // </View>
  );
}
