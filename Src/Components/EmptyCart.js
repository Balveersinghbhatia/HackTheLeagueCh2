import React from 'react';
import {Box, Center, Text} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Btn from '../Components/Btn';

function EmptyCart() {
  return (
    <Box flex={1} px={4}>
      <Center h={'90%'}>
        <Center w={200} h={200} bg="white" rounded="full">
          <FontAwesome name="shopping-basket" size={64} color={'#48B600'} />
        </Center>
        <Text color={'#48B600'} fontSize={20} bold>
          Your cart is empty!
        </Text>
      </Center>
      <Btn bg={'black'} color={'white'}>
        START SHOPPING
      </Btn>
    </Box>
  );
}

export default EmptyCart;
