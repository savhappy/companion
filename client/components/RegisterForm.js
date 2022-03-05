import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Formik } from 'formik';

const RegisterForm = ({ navigation }) => {
  return (
    <View>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phoneNumber: '',
        }}
        onSubmit={() => {
          navigation.navigate('Profile');
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <Text style={styles.topText}>Register</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={props.handleChange('firstName')}
              value={props.values.firstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              onChangeText={props.handleChange('lastName')}
              value={props.values.lastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
            />

            <TextInput
              style={styles.input}
              placeholder="Phone #"
              onChangeText={props.handleChange('phoneNumber')}
              value={props.values.phoneNumber}
            />
            <TouchableOpacity
              style={styles.buttonReg}
              onPress={props.handleSubmit}
            >
              <Text style={{ color: 'white' }}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Already have an account? Sign in</Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 472,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 35,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#EDF0F7',
    borderColor: '#ACACAC',
    borderRadius: 5,
    padding: 5,
    marginTop: 20,
    width: 255,
    height: 30,
  },
  buttonReg: {
    height: 40,
    width: 243,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#17C3B2',
    color: 'white',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  text: {
    color: '#17C3B2',
  },
  topText: {
    color: '#17C3B2',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default RegisterForm;
