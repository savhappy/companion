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
import { UserContext } from '../services/context';

const ProfileForm = ({ navigation }) => {
  const { user } = useContext(UserContext);

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
              {user ? (
                <Text style={styles.smallText}>{user.firstName}</Text>
              ) : (
                <TextInput
                  style={[styles.input]}
                  onChangeText={props.handleChange('firstName')}
                  value={props.values.email}
                />
              )}
              <Text style={styles.profileText}>Phone Number</Text>
              {user ? (
                <Text style={styles.smallText}>{user.phoneNumber}</Text>
              ) : (
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  onChangeText={props.handleChange('phoneNumber')}
                  value={props.values.password}
                />
              )}
              <Text style={styles.profileText}>Email</Text>
              {user ? (
                <Text style={[styles.smallText, { width: 300 }]}>
                  {user.email}
                </Text>
              ) : (
                <TextInput
                  style={[styles.input, { width: 200 }]}
                  placeholder="email"
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              )}
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.profileText}>Last Name</Text>
              {user ? (
                <Text style={styles.smallText}>{user.lastName}</Text>
              ) : (
                <TextInput
                  style={[styles.input]}
                  onChangeText={props.handleChange('Last Name')}
                  value={props.values.lastName}
                />
              )}

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
    height: '50%',
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
  smallText: {
    marginTop: 5,
    color: '#D5FFF3',
    fontSize: 20,
    fontWeight: '600',
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
