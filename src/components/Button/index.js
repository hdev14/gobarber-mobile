import React from 'react';
import {ActivityIndicator} from 'react-native';

import {ButtonShape, Text} from './styles';

export default function Button({children, loading, ...rest}) {
  return (
    <ButtonShape {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </ButtonShape>
  );
}
