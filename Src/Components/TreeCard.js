import {
  Flex,
  Image,
  NativeBaseProvider,
  Pressable,
  Text,
  View,
} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import trees from '../DemoData/TreesInfo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TreeIndividual from '../Screen/User/TreeIndividual';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const TreesAll = ({navigation}) => {
  const handlePress = item => {
    navigation.navigate('treeIndividual', {
      item,
    });
  };
  return (
    <>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={5}
        mb={100}>
        {trees.map(tree => (
          <Pressable
            onPress={() => {
              handlePress(tree);
            }}
            key={tree.id}
            w="47%"
            bg="white"
            shadow={9}
            my={3}
            pb={0}
            h={160}
            mt={2}
            rounded="10">
            <View alignItems="center" top={0}>
              <Image
                source={{uri: tree.source}}
                alt={tree.title}
                w="120"
                h={100}
                resizeMode="contain"
              />
            </View>
            <View>
              <View px={3}>
                <Text fontSize={21} fontWeight="bold">
                  {tree.title}
                </Text>
              </View>
              <View px={3} flexDirection="row" justifyContent="space-between">
                <Text fontSize={17} fontWeight="bold">
                  ₹{tree.price}
                </Text>
              </View>
            </View>
            <Pressable
              backgroundColor={'#0DB462'}
              height={6}
              width={6}
              alignItems={'center'}
              justifyContent={'center'}
              style={{
                bottom: 152,
                right: 7,
                borderRadius: 7,
                alignSelf: 'flex-end',
              }}>
              <FontAwesome name="star" size={12} />
            </Pressable>
          </Pressable>
        ))}
      </Flex>
    </>
  );
};

const Stack = createNativeStackNavigator();
const TreeCard = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.body}>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen
            name="treesAll"
            component={TreesAll}
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
  gradientBg: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
  },
});

export default TreesAll;
