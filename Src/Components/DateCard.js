import React, {useState} from 'react';
import {VStack, Text, HStack, Box, View, FlatList, Image} from 'native-base';
import date from '../DemoData/WorkerDate';
import data from '../DemoData/PlantationData';
import {Pressable, TouchableOpacity, StyleSheet} from 'react-native';

const DateCard = () => {
  const [day, setDay] = useState('Mon');
  const [dataList, setDataList] = useState(data.filter(e => e.day === 'Thu'));
  const setStatusFilter = day => {
    if (day == 'Mon') {
      setDataList([...data.filter(e => e.day === 'Mon')]);
    } else if (day == 'Tue') {
      setDataList([...data.filter(e => e.day === 'Tue')]);
    } else if (day == 'Wed') {
      setDataList([...data.filter(e => e.day === 'Wed')]);
    } else if (day == 'Thu') {
      setDataList([...data.filter(e => e.day === 'Thu')]);
    } else if (day == 'Fri') {
      setDataList([...data.filter(e => e.day === 'Fri')]);
    } else if (day == 'Sat') {
      setDataList([...data.filter(e => e.day === 'Sat')]);
    } else if (day == 'Sun') {
      setDataList([...data.filter(e => e.day === 'Sun')]);
    }
    setDay(day);
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={style.PlantCard} key={index}>
        <View
          height={85}
          width={85}
          borderWidth={1.5}
          borderRadius={50}
          alignItems={'center'}
          justifyContent={'center'}
          backgroundColor={'#61D49C'}>
          <Image
            source={{
              uri: 'https://strikers365news.com/wp-content/uploads/2022/10/mangoBg.png',
            }}
            alt={item.treeName}
            style={{height: 70, width: 70}}
          />
        </View>
        <View
          style={{
            height: 100,
            marginLeft: 5,
            paddingVertical: 5,
            flex: 1,
          }}>
          <Text bold fontSize={25}>
            {item.treeName}
          </Text>

          <Text bold fontSize={16} opacity={0.7}>
            {item.address}
          </Text>
        </View>
        <View alignItems="center">
          {/* <Text bold fontSize={18} >1</Text> */}
          <Pressable>
            <View
              height={45}
              width={45}
              borderWidth={2}
              borderRadius={50}
              alignItems={'center'}
              justifyContent={'center'}
              backgroundColor={'#0DB462'}
              left={1}>
              <Text fontSize={30} fontWeight="bold" bottom={1}>
                {'>'}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: '5%',
          marginVertical: 10,
        }}>
        <Box height={110} width="350">
          <HStack justifyContent={'space-between'}>
            {date.slice(0, 4).map(Plant => (
              <TouchableOpacity
                style={[
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0DB462',
                    width: 85,
                    height: 100,
                    borderWidth: 3,
                    borderRadius: 20,
                    opacity: 0.5,
                  },
                  day === Plant.day && {
                    backgroundColor: '#0DB462',
                    opacity: 1,
                  },
                ]}
                onPress={() => setStatusFilter(Plant.day)}>
                <Text color={'black'} fontSize={25} fontWeight={500}>
                  {Plant.day}
                </Text>
                <Text color={'black'} fontSize={30} fontWeight={500}>
                  {Plant.date}
                </Text>
              </TouchableOpacity>
            ))}
          </HStack>
        </Box>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: '5%',
          marginVertical: 10,
        }}>
        <Text
          style={{fontSize: 22, alignSelf: 'flex-start', fontWeight: 'bold'}}>
          {day}day Task
        </Text>
        <View paddingBottom={70}>
          <FlatList
            data={dataList}
            keyExtractor={(e, i) => i.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  PlantCard: {
    height: 110,
    elevation: 15,
    borderRadius: 25,
    marginVertical: 10,
    // marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    backgroundColor: '#0DB462',
  },
});

export default DateCard;
