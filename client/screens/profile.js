import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import ProfileForm from '../components/ProfileForm';
import { FontAwesome } from '@expo/vector-icons';
import EmergencyForm from '../components/ECForm';
import SmCompanionIcon from '../sm-companion-icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.topContainer, { alignItems: 'flex-start' }]}>
        <SmCompanionIcon />
      </View>
      <Text style={styles.titleText}>Hi Savannah</Text>
      <Text style={{ color: 'red', alignSelf: 'flex-start', margin: 17 }}>
        **Please fill out your Emergency Contacts
      </Text>
      <View style={styles.PFContainer}>
        <ProfileForm navigation={navigation} />

        <EmergencyForm />
        <Text style={{ color: '#D5FFF3' }}>View added contacts</Text>
        <View style={styles.homeButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Main');
            }}
          >
            <FontAwesome name="home" size={24} color="#D5FFF3" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#224878',
    alignItems: 'center',
  },
  topContainer: {
    alignSelf: 'flex-start',
    padding: 5,
    marginTop: 5,
    height: '10%',
    width: '20%',
  },
  PFContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    height: '55%',
    backgroundColor: 'rgba(172, 172, 172, 0.19)',
    borderRadius: 5,
    marginTop: 10,
  },
  titleText: {
    color: '#D5FFF3',
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 10,
  },
  bottomText: {
    color: '#ACACAC',
    textAlign: 'center',
    width: 300,
    marginTop: 20,
  },
  profileText: {
    color: '#ACACAC',
    fontSize: 13,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: '400',
  },
  homeButton: {
    width: '100%',
    alignItems: 'flex-end',
    margin: 20,
    marginRight: 40,
  },
});

export default Profile;
