import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EmergencyForm = ({ navigation }) => {
  //Things to add/fix
  //must store this form as emergency contacts.
  return (
    <View style={styles.topView}>
      <Formik
        initialValues={{
          name: '',
          phoneNumber: '',
        }}
        onSubmit={() => {
          console.log('I work');
        }}
      >
        {(props) => (
          <View>
            <TouchableOpacity
              style={styles.buttonReg}
              onPress={props.handleSubmit}
            >
              <Text style={[styles.profileText, { width: 200 }]}>
                + Add Emergency Contacts
              </Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={props.handleChange('Name')}
              value={props.values.email}
            />
            <TextInput
              style={[styles.input, { marginTop: 15, marginBottom: 10 }]}
              placeholder="Phone Number"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 30,
    backgroundColor: '#EDF0F7',
    borderRadius: 5,
    marginTop: 5,
  },
  profileText: {
    color: '#ACACAC',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: '400',
  },
});

export default EmergencyForm;
