import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import LoginForm from '../components/LoginForm';
import SmCompanionIcon from '../sm-companion-icon';

const Login = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/3.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <View style={[styles.topContainer, { alignItems: 'flex-start' }]}>
          <SmCompanionIcon />
        </View>

        <LoginForm navigation={navigation} />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  topContainer: {
    alignSelf: 'flex-start',
    padding: 5,
    marginTop: 5,
    height: '35%',
    width: '20%',
  },
  titleText: {
    color: '#D5FFF3',
    fontSize: 36,
    fontWeight: 'bold',
  },
  bottomText: {
    color: '#ACACAC',
    textAlign: 'center',
    width: 300,
    marginTop: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
