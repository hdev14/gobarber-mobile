import React, {forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {InputShape, TextInput} from './styles';

function Input({style, icon, ...rest}, ref) {
  return (
    <InputShape style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(20, 14, 2, 0.8)" />}
      <TextInput ref={ref} {...rest} />
    </InputShape>
  );
}

export default forwardRef(Input);
