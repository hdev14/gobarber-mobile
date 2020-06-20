import React, {useMemo} from 'react';
import {DatePickerAndroid} from 'react-native';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {DateInputShape, DateText} from './styles';

export default function DateInput({date, onChange}) {
  const formatedDate = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );

  async function handleDate() {
    const {action, year, month, day} = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      onChange(new Date(year, month, day));
    }
  }

  return (
    <DateInputShape onPress={handleDate}>
      <Icon name="event" color="rgba(20, 14, 2, 0.8)" size={20} />
      <DateText>{formatedDate}</DateText>
    </DateInputShape>
  );
}
