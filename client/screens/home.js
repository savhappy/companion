import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import CompanionIcon from '../companion-icon';
import cloudHome from '../cloudHome';

const Home = ({ navigation, route }) => {
  return (
    <ImageBackground
      source={require('../assets/clouds-home.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.text}>Welcome to...</Text>
        </View>
        <CompanionIcon />
        <View>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: '#17C3B2', marginTop: 20 },
            ]}
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={[styles.buttonText, { color: 'white' }]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#FDFDFD' }]}
            onPress={() => {
              navigation.navigate('Register');
            }}
          >
            <Text style={[styles.buttonText, { color: '#17C3B2' }]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#D5FFF3',
    fontSize: 36,
    fontWeight: 'bold',
  },
  welcome: {
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
  },
  button: {
    height: 40,
    width: 243,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
