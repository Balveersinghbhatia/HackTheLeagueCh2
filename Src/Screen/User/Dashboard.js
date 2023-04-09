import React from 'react';
import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import {primaryBlue} from '../../Config/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TreeSlider from '../../Components/TreeSlider';
import QuoteSldier from '../../Components/QuoteSlider';
import EventSlider from '../../Components/EventSlider';

import TreeIndividual from './TreeIndividual';
import {
  HStack,
  NativeBaseProvider,
  Spacer,
  View,
  VStack,
  Image,
  Text,
} from 'native-base';
const Main = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('orderHistory');
  };
  const handleAccPress = () => {
    navigation.navigate('Settings');
  };
  const handleNotifPress = () => {
    navigation.navigate('Notifications');
  };
  return (
    <>
      {/* <TopBar title="Dashboard"></TopBar> */}
      <StatusBar backgroundColor={'#4c9e2f'}></StatusBar>

      <ScrollView backgroundColor={'white'}>
        {/* Hello profile name */}
        <HStack py={5} px={3} alignItems="center">
          <View>
            <MaterialCommunityIcons
              onPress={handleAccPress}
              name="account-circle"
              size={60}></MaterialCommunityIcons>
          </View>
          <VStack>
            <Text fontSize={18}>Hello</Text>
            <Text fontSize={20} bold bottom={1}>
              Rudra Raval
            </Text>
          </VStack>
          <Spacer />
          <View>
            <MaterialCommunityIcons
              onPress={handleNotifPress}
              name="bell"
              size={40}></MaterialCommunityIcons>
          </View>
        </HStack>
        {/* Counters */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Trees Planted</Text>
          <VStack px={5}>
            <View
              backgroundColor="#333333"
              height={85}
              width="350"
              borderRadius={25}
              margin={2}>
              <HStack px={3} py={2}>
                <View
                  width={85}
                  height={65}
                  justifyContent={'center'}
                  alignItems={'center'}>
                  <Text color={'#0DB462'} fontSize={20}>
                    +50
                  </Text>
                </View>
                <VStack justifyContent={'center'}>
                  <Text color={'#0DB462'} fontSize={25} top={1}>
                    Total
                  </Text>
                  <Text color={'#0DB462'} fontSize={20} bottom={1}>
                    Planted Trees
                  </Text>
                </VStack>
                <HStack left={8} width={69} height={65}>
                  <Text color={'#0DB462'} fontSize={30} top={5} px={1}>
                    30
                  </Text>
                  <Text color={'#0DB462'} top={9}>
                    Days
                  </Text>
                </HStack>
              </HStack>
            </View>

            <View
              backgroundColor="#333333"
              height={85}
              width="350"
              borderRadius={25}
              margin={2}>
              <HStack px={3} py={2}>
                <View
                  width={85}
                  height={65}
                  justifyContent={'center'}
                  alignItems={'center'}>
                  <Text color={'#0DB462'} fontSize={20}>
                    +50
                  </Text>
                </View>
                <VStack justifyContent={'center'}>
                  <Text color={'#0DB462'} fontSize={25} top={1}>
                    You
                  </Text>
                  <Text color={'#0DB462'} fontSize={20} bottom={1}>
                    Planted Trees
                  </Text>
                </VStack>
                <HStack left={8} width={69} height={65}>
                  <Text color={'#0DB462'} fontSize={30} top={5} px={1}>
                    30
                  </Text>
                  <Text color={'#0DB462'} top={9}>
                    Days
                  </Text>
                </HStack>
              </HStack>
            </View>
          </VStack>
        </View>

        {/* Tree carousal */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Trees</Text>
          <TreeSlider> </TreeSlider>
        </View>

        {/* Quotes Slider*/}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: '5%',
          }}
          bottom={8}>
          <QuoteSldier></QuoteSldier>
        </View>

        {/* Occassion slider section */}
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: '5%',
            paddingBottom: 0,
          }}
          bottom={24}>
          <Text style={styles.sectionHeading}>Celebrate Occassions</Text>
          <EventSlider bgColor={'#0DB462'} bRadius={10} loop={true} />
        </View>
        <View>
          {/* <LinearGradient
            colors={['white', '#0DB462']}
            start={{
              x: 0,
              y: 0.3,
            }}
            style={{
              flex: 1,
              height: '100%',
              width: '100%',
              position: 'absolute',
              // borderWidth: 2,
              // borderBottomLeftRadius: 25,
              // borderBottomRightRadius: 25,
              // borderColor: "black",
            }}
          /> */}
          <View
            style={{
              alignItems: 'center',
              paddingHorizontal: '5%',
              paddingBottom: 20,
              paddingTop: 20,
              marginHorizontal: 12,
            }}
            borderWidth={1}
            borderColor={'black'}
            bottom={20}
            borderRadius={35}>
            <Text style={{fontSize: 25, fontWeight: 'bold', lineHeight: 25}}>
              Why Me And My Tree
            </Text>
            <View justifyContent={'center'} alignItems={'center'} w="full">
              <Image
                source={require('../../Assets/logoFinal.png')}
                alt="Logo"
                w={230}
                height={180}
                resizeMode="cover"
              />
              <Text fontSize={18} fontWeight="500">
                आजकल यहाँ बहुत से जन भौंकें मिलते ही occasion Ayy, no time, I
                got no patience तुझे चाहिए जंग, भेज अपनी location, ayy मेरे गाने
                on rotation, ये सोच से ग़रीब, दे दो donation Ayy, देसी हूँ मैं,
                South Asian पर skin colour लगे जैसे Caucasian, ayy No money, no
                conversation मैं तो unavailable, हमेशा on vacation, ayy
                Headshot, अगर confrontation इनकी टोपी भी उड़ा दूँ, लगे
                convocation, ayy Back with it, practicing, attack करूँ मैं facts
                लेके जैसे activist, accurate (accurate) Ravaging wrap in
                immaculate packaging करना calculate मेरी value है challenging
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const Stack = createNativeStackNavigator();
const Dashboard = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.body}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="dashboard"
            component={Main}
            options=""></Stack.Screen>
          <Stack.Screen
            name="treeIndividual"
            component={TreeIndividual}
            options=""></Stack.Screen>
        </Stack.Navigator>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  body: {
    // //marginTop: StatusBar.currentHeight,
    flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
  },
  container: {
    flex: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    // backgroundColor: "pink",
  },
  logo: {
    height: 100,
    // backgroundColor: "red",
    width: 100,
  },
  sectionHeading: {
    fontSize: 22,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    // textAlign: "center",
    // backgroundColor: "red",
    // alignSelf: "center",
  },
  subheading: {
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    marginTop: 10,
    // paddingLeft: 10,
  },
  sectionText: {fontSize: 18},
  section: {
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginVertical: 10,
  },
  mealsContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#929292',
    elevation: 3,
    padding: 10,
    // backgroundColor: "red",
  },
  mealImage: {height: 75, width: 75},
  mealHeading: {
    fontSize: 15,
  },
  rightStyle: {
    width: 75,
    borderBottomWidth: 75,
    borderBottomColor: primaryBlue,
    borderLeftColor: 'transparent',
    borderLeftWidth: 75,
  },
  rightArrow: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 99,
  },
  row: {
    marginVertical: 10,
  },
  // subscription section style
  icon: {
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  iconTxt: {
    color: 'gray',
    fontSize: 18,
  },
});
export default Dashboard;
