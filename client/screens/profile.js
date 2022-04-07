import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useContext, useEffect } from 'react';
import ProfileForm from '../components/ProfileForm';
import { FontAwesome } from '@expo/vector-icons';
import EmergencyForm from '../components/ECForm';
import SmCompanionIcon from '../sm-companion-icon';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { EmergencyContext, UserContext } from '../services/context';
import methods from '../services/apiServices';

const Profile = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const { ec } = useContext(EmergencyContext);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.flatlistContainer}>
        <Text style={styles.flatlistText}>{item.name}</Text>
        <Text style={styles.flatlistText}>{item.phoneNumber}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.topContainer, { alignItems: 'flex-start' }]}>
        <SmCompanionIcon />
      </View>
      <Text style={styles.titleText}>{user.firstName}</Text>
      <Text style={{ color: 'red', alignSelf: 'flex-start', margin: 17 }}>
        **Please fill out your Emergency Contacts
      </Text>
      <View style={styles.PFContainer}>
        <ProfileForm navigation={navigation} />

        <EmergencyForm style={{ marginTop: 20 }} />
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
      <FlatList
        data={ec}
        renderItem={renderItem}
        keyExtractor={(item) => item.phoneNumber}
        style={styles.flatlist}
      />
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
    height: '50%',
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
  flatlist: {
    paddingVertical: 10,
    width: '100%',
  },
  flatlistText: {
    color: '#D5FFF3',
    fontSize: 20,

    marginBottom: 5,
    fontWeight: '400',
  },
  flatlistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(172, 172, 172, 0.19)',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Profile;
