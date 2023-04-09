import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EventSlider from '../../Components/EventSlider';
const handleViewAll = () => {};
export default function Profile() {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.h1}>Profile1</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.customerInfo}>
          <View style={styles.InfoTop}>
            <View style={styles.topLeft}>
              <Image
                source={{
                  uri: 'https://montgomeryii.com/wp-content/uploads/2019/01/Employee-Placeholder-Image.jpg',
                }}
                style={{width: 130, height: 130, borderRadius: 15}}
                alt="hello"></Image>
            </View>
            <View style={styles.topRight}>
              <View style={{marginBottom: 10}}>
                <Text style={styles.label}>Name</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 19, marginRight: 7}}>
                    Rudra Raval
                  </Text>
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={20}
                    color="black"
                  />
                </View>
              </View>
              <View>
                <Text style={styles.label}>Email</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 19, marginRight: 7}}>
                    abc@gmail.com
                  </Text>
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={20}
                    color="black"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.InfoBottom}>
            <View>
              <Text style={styles.label}>Address</Text>
              <Text style={{fontSize: 19, marginRight: 10}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                debitis?
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={styles.label}>Pincode</Text>
              <Text style={{fontSize: 19, marginRight: 10}}>283481</Text>
            </View>
          </View>
        </View>
        <View style={styles.eventsSection}>
          <Text style={styles.label}>Events Celebrated</Text>
          <EventSlider />
        </View>
        <View style={styles.selfieSection}>
          <Text style={styles.label}>Selfies Uploaded</Text>
          <View style={{position: 'relative'}}>
            <Image
              source={{
                uri: 'https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png',
              }}
              style={{marginTop: 20, width: '90%', height: 300}}></Image>
            <Pressable style={styles.button} onPress={handleViewAll}>
              <Text style={styles.buttonTxt}>View All</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    // //marginTop: StatusBar.currentHeight,
    flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    // paddingLeft: 35,
  },

  header: {
    height: RFPercentage('10'),
    // backgroundColor: "red",
    paddingLeft: 20,
    paddingTop: 10,
  },
  h1: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  main: {
    paddingLeft: 35,
  },
  InfoTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  topLeft: {
    marginRight: 20,
  },
  topRight: {
    // paddingTop: 10,
  },
  label: {fontWeight: 'bold', fontSize: 21},
  InfoBottom: {
    marginTop: 10,
  },
  eventsSection: {
    marginTop: 30,
  },
  selfieSection: {
    marginBottom: 100,
  },
  button: {
    backgroundColor: 'green',

    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 13,
    position: 'absolute',
    bottom: 10,
    right: RFPercentage(6),
    marginTop: 10,
    margin: 'auto',
    alignSelf: 'center',
  },
  buttonTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
