import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

function InfoModal({ infoModalVisible, setInfoModalVisible }) {
  return (
    <Modal animationType="slide" transparent={true} visible={infoModalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.header}> Welcome to Companion!</Text>
          <Text>
            Whatever adventure you're going on, we have your back. Start by
            clicking the icon in the middle to create a new card. This allows
            you to fill out a form that will be sent to the emergency contacts
            you select if you don not check-in within the timeframe you set.
          </Text>
          <Pressable
            style={styles.button}
            onPress={() => setInfoModalVisible(!infoModalVisible)}
          >
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#17C3B2',
    borderRadius: 5,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
    shadowColor: '#000',
  },
  button: {
    marginTop: '7%',
    borderRadius: 10,
    padding: '2%',
    paddingHorizontal: '12%',
    elevation: 2,
  },
  header: {
    color: '#D5FFF3',
    fontSize: 34,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    margin: 10,
  },
});

export default InfoModal;
