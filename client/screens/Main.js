/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import SmCompanionIcon from '../sm-companion-icon';
import MainFormCard from '../components/MainForm';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import InfoModal from '../components/InfoModal';

const Main = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(true);

  const openInfo = () => {
    setInfoModalVisible(!infoModalVisible);
  };
  const openCardForm = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <ImageBackground
      source={require('../assets/clouds-main.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.topContainer}>
        <SmCompanionIcon />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={openInfo}>
            <Entypo name="info-with-circle" size={34} color="#D5FFF3" />
            <InfoModal
              infoModalVisible={infoModalVisible}
              setInfoModalVisible={setInfoModalVisible}
            />
          </TouchableOpacity>
          <TouchableOpacity name="close" onPress={openCardForm}>
            <Ionicons name="create" size={34} color="#D5FFF3" />
            <MainFormCard modalOpen={modalOpen} setModalOpen={setModalOpen} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <MaterialIcons name="logout" size={34} color="#D5FFF3" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  topContainer: {
    alignItems: 'flex-start',
    height: '20%',
    width: '20%',
    paddingTop: 45,
    paddingLeft: 10,
  },
  mainContainer: {
    height: '80%',
    justifyContent: 'flex-end',
  },

  bottomContainer: {
    backgroundColor: 'rgba(196, 196, 196, 0.06)',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
});

export default Main;
