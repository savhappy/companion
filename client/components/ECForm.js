import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { Formik } from 'formik';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EmergencyContext, UserContext } from '../services/context';
import methods from '../services/apiServices';

const EmergencyForm = ({ navigation }) => {
  const { setEc } = useContext(EmergencyContext);
  const { user } = useContext(UserContext);

  return (
    <View style={{ marginTop: 20 }}>
      <Formik
        initialValues={{
          name: '',
          phoneNumber: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          const result = await methods.addEC(user._id, values);
          console.log(result);
          setEc((prevEc) => [...prevEc, result]);

          resetForm({ values: { name: '', phoneNumber: '' } });
        }}
      >
        {(props) => (
          <View>
            <TouchableOpacity
              style={styles.buttonReg}
              onPress={props.handleSubmit}
            >
              <Text
                style={[styles.profileText, { width: 200, color: '#D5FFF3' }]}
              >
                + Add Emergency Contacts
              </Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <TextInput
              style={[styles.input, { marginTop: 15, marginBottom: 10 }]}
              placeholder="Phone Number"
              onChangeText={props.handleChange('phoneNumber')}
              value={props.values.phoneNumber}
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
    padding: 8,
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
