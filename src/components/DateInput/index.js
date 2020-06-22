import React, {useState, useMemo} from 'react';
// It need more configuration to android and IOS source code.
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {DateInputShape, DateText} from './styles';

export default function DateInput({date, onChange}) {
  const [opened, setOpened] = useState(false);
  
  const formatedDate = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );

  function handleDate(evt, selectedDate) {
    if (selectedDate !== undefined) {
      onChange(selectedDate);
    }
  }
  
  return (
    <>
      <DateInputShape onPress={() => setOpened(!opened)}>
        <Icon name="event" color="rgba(20, 14, 2, 0.8)" size={20} />
        <DateText>{formatedDate}</DateText>
      </DateInputShape>

      {opened && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          onChange={handleDate}
          minimumDate={new Date()}
          minuteInterval={60}
          locale="pt"
          mode="date"
          display="spinner"
          is24Hour={true}
        />
      )}
    </>
  );
}
