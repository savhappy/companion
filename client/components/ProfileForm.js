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

const ProfileForm = ({ navigation }) => {
  return (
    <View style={styles.topView}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
        }}
        onSubmit={() => {
          console.log('i also work pro form');
        }}
      >
        {(props) => (
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.nameContainer}>
              <Text style={styles.profileText}>First Name</Text>
              <TextInput
                style={[styles.input]}
                onChangeText={props.handleChange('firstName')}
                value={props.values.email}
              />
              <Text style={styles.profileText}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                onChangeText={props.handleChange('phoneNumber')}
                value={props.values.password}
              />
              <Text style={styles.profileText}>Email</Text>
              <TextInput
                style={[styles.input, { width: 200 }]}
                placeholder="email"
                onChangeText={props.handleChange('email')}
                value={props.values.email}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.profileText}>Last Name</Text>
              <TextInput
                style={[styles.input]}
                onChangeText={props.handleChange('Last Name')}
                value={props.values.lastName}
              />

              <TouchableOpacity
                style={styles.buttonReg}
                onPress={props.handleSubmit}
              >
                <Text style={{ color: 'white' }}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'column',
    width: '50%',
    paddingLeft: 30,
    alignItems: 'flex-start',
  },
  input: {
    backgroundColor: '#EDF0F7',
    borderRadius: 5,
    width: '70%',
  },
  buttonReg: {
    height: 25,
    width: 64,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#17C3B2',
    color: 'white',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  text: {
    marginTop: 20,
  },

  topView: {
    height: '50%',
    width: '100%',
  },
  profileText: {
    color: '#ACACAC',
    fontSize: 13,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: '400',
  },
});

export default ProfileForm;
