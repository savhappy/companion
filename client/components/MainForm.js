import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  RadioButton,
} from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MainFormCard = ({ navigation }) => {
  //Things to add/fix
  //must store this form as emergency contacts.
  return (
    <View style={styles.topView}>
      <Formik
        initialValues={{
          what: '',
          who: '',
          timeFrame: '',
          riskLevel: '',
          contacts: '',
          note: '',
          time: '',
        }}
        onSubmit={() => {
          console.log('I work');
        }}
      >
        {(props) => (
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <TextInput
              style={styles.input}
              placeholder="What are you doing?"
              placeholderTextColor="#224870"
              onChangeText={props.handleChange('Name')}
              value={props.values.email}
            />
            <TextInput
              style={[styles.input, { marginTop: 15, marginBottom: 10 }]}
              placeholder="With Who?"
              placeholderTextColor="#224870"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
            />
            <Text>TimeFrame</Text>
            <Text>Risk Level</Text>
            <Text>Contacts to Alert</Text>
            <Text>Note to send Contacts</Text>
            <TextInput
              style={[styles.multiInput, { padding: 15 }]}
              placeholder="Send a short summary of what your contacts should know if this card is sent."
              placeholderTextColor="#224870"
              multiline={true}
              numberOfLines={6}
              maxLength={40}
              onChangeText={props.handleChange('note')}
              value={props.values.password}
            />
            <Text>Check-in Time</Text>
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
    backgroundColor: '#D5FFF3',
    borderRadius: 5,
    margin: 5,
  },
  multiInput: {
    backgroundColor: '#D5FFF3',
    borderRadius: 5,
    margin: 5,
  },
  profileText: {
    color: '#ACACAC',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: '400',
  },
});

export default MainFormCard;
