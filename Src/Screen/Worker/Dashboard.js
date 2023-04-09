import React from 'react';
import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import {primaryBlue} from '../../Config/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DateCard from '../../Components/DateCard.js';
// import TreesToPlant from '../components/TreesToPlant';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import CircularProgress from "react-native-circular-progress-indicator";
// import TreeIndividual from './TreeIndividual';
import {
  HStack,
  NativeBaseProvider,
  Spacer,
  View,
  VStack,
  Text,
  Box,
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

      <ScrollView>
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

        <DateCard />
        {/* <View style={styles.section}>
            <Box  height={110} width="350">
                <DateCard/>
            </Box>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Monday Task</Text>
          <TreesToPlant/>
        </View> */}
      </ScrollView>
    </>
  );
};

const Dashboard = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <View style={styles.body}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="dashboard"
            component={Main}
            options=""></Stack.Screen>
          {/* <Stack.Screen
            name="treeIndividual"
            component={TreeIndividual}
            options=""></Stack.Screen> */}
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
