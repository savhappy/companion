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

const LoginForm = ({ navigation }) => {
  return (
    <View style={styles.topView}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={() => {
          navigation.navigate('Main');
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <TextInput
              style={[styles.input, { marginTop: 60 }]}
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

            <TouchableOpacity
              style={styles.buttonReg}
              onPress={props.handleSubmit}
            >
              <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
            <Text style={[styles.text, { color: '#17C3B2' }]}>
              Forgot password?
            </Text>
            <View style={styles.authSignInContainer}>
              <TouchableOpacity style={styles.fbGmail}>
                <FontAwesome name="facebook-square" size={24} color="#3b5998" />
                <Text style={{ color: '#ACACAC' }}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fbGmail}>
                <MaterialCommunityIcons
                  name="gmail"
                  size={24}
                  color="#EA4335"
                />
                <Text style={{ color: '#ACACAC' }}>Sign in</Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.text, { color: '#ACACAC' }]}>
              Don't have an account? Sign up!
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    height: 600,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#EDF0F7',
    borderRadius: 5,
    padding: 5,
    marginTop: 30,
    width: 255,
    height: 41,
  },
  buttonReg: {
    height: 40,
    width: 243,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    height: '60%',
    width: '100%',
  },
  authSignInContainer: {
    flexDirection: 'row',
    width: 243,
    justifyContent: 'space-between',
    marginTop: 80,
  },
  fbGmail: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EDF0F7',
    borderRadius: 5,
    color: '#ACACAC',
    width: 95,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
});

export default LoginForm;
