import {Button} from 'native-base';
import React from 'react';

const Btn = ({mt, bg, color, children, onPress, borderRadius}) => {
  return (
    <Button
      w="full"
      h={55}
      mb={mt}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: 'bold',
      }}
      _pressed={{
        bg: bg,
      }}
      onPress={onPress}
      borderRadius={borderRadius}>
      {children}
    </Button>
  );
};

export default Btn;
