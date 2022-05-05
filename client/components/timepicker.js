import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const hrs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const min = ['00', '10', '20', '30', '40', '50'];
const pmAm = ['PM', 'AM'];

const TimePicker = () => {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [pmOrAm, setPmOrAm] = useState('');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedHours}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedHours(itemValue)}
      >
        {hrs.map((e) => {
          <Picker.Item label={e} value={e} />;
        })}
      </Picker>
      <Picker
        selectedValue={selectedMinutes}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedMinutes(itemValue)}
      >
        {min.map((e) => {
          <Picker.Item label={e} value={e} />;
        })}
      </Picker>
      <Picker
        selectedValue={pmOrAm}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setPmOrAm(itemValue)}
      >
        {pmAm.map((e) => {
          <Picker.Item label={e} value={e} />;
        })}
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
});

export default TimePicker;
