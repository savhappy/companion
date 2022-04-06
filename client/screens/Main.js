import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import SmCompanionIcon from '../sm-companion-icon';
import MainFormCard from '../components/MainForm';

const Main = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/clouds-main.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.topContainer}>
        <SmCompanionIcon />
      </View>
      <MainFormCard modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <View style={styles.mainCard}>
        <Text style={styles.mainHeader}>Check-in By:</Text>
        <View style={styles.innerBox}>
          <Text style={styles.innerBoxText}>Today</Text>
          <Text style={styles.innerBoxText}>00:00 PM</Text>
        </View>
        <TouchableOpacity style={styles.checkInBtn}>
          <Text style={styles.checkInBtnText}>Check-in Now</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.viewCard}>View Card</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity name="close" onPress={() => setModalOpen(true)}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/main-plus-btn1.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={{ width: '100%', height: '75%' }}>
            <Text style={styles.logOut}>Log Out</Text>
          </View>
        </TouchableOpacity>
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
    padding: 5,
    marginTop: 30,

    width: '20%',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(196, 196, 196, 0.06)',
    // marginTop: 635,
    marginTop: 95,
  },
  mainCard: {
    alignSelf: 'center',
    backgroundColor: '#17C3B2',
    height: '60%',
    width: '90%',
    marginTop: 60,
    borderRadius: 5,
  },
  mainHeader: {
    color: '#D5FFF3',
    fontSize: 64,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 65,
    marginTop: 50,
  },
  innerBox: {
    backgroundColor: '#D5FFF3',
    alignSelf: 'center',
    borderRadius: 5,
    width: '90%',
    height: '30%',
    marginTop: 30,
  },
  innerBoxText: {
    color: '#224870',
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
  },
  checkInBtn: {
    backgroundColor: '#DB2B39',
    borderRadius: 5,
    height: 40,
    width: 234,
    alignSelf: 'center',
    marginTop: 30,
  },
  checkInBtnText: {
    color: '#D5FFF3',
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 8,
  },
  viewCard: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 50,
    color: '#D5FFF3',
    textDecorationLine: 'underline',
  },
  logOut: {
    alignSelf: 'flex-end',
    marginTop: 10,
    width: 70,
    height: 35,
    color: '#EDF0F7',
    marginRight: 20,
    fontWeight: 'bold',
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#17C3B2',
  },
});

export default Main;
