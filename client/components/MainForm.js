import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  Pressable,
  Picker,
} from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';

const MainFormCard = ({ modalOpen, setModalOpen }) => {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalOpen}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
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

                  <TextInput
                    style={[styles.input, { marginTop: 15, marginBottom: 10 }]}
                    placeholder="TimeFrame? (ex. 1-2hr, >2hr)"
                    placeholderTextColor="#224870"
                    onChangeText={props.handleChange('timeFrame')}
                    value={props.values.timeFrame}
                  />

                  <TextInput
                    style={[styles.input, { marginTop: 15, marginBottom: 10 }]}
                    placeholder="Risk Level: 1-10"
                    placeholderTextColor="#224870"
                    onChangeText={props.handleChange('riskLevel')}
                    value={props.values.riskLevel}
                  />
                  <Text
                    style={[
                      {
                        padding: 10,
                        color: '#D5FFF3',
                        fontWeight: 'bold',
                        fontSize: 20,
                      },
                    ]}
                  >
                    Contacts to Alert
                  </Text>

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

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalOpen(!modalOpen)}
            >
              <Text style={styles.textStyle}>Create Card</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    alignSelf: 'center',
    backgroundColor: '#17C3B2',
    height: '70%',
    width: '90%',
    marginTop: 60,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 30,
    backgroundColor: '#D5FFF3',
    borderRadius: 5,
    margin: 5,
    padding: 10,
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
