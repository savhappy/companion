import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import SmCompanionIcon from '../sm-companion-icon';
import RegisterForm from '../components/RegisterForm';

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.topContainer, { alignItems: 'flex-start' }]}>
        <SmCompanionIcon />
      </View>
      <View>
        <RegisterForm navigation={navigation} />
        <Text style={styles.bottomText}>
          By tapping Create Account, I agree to Companion’s Privacy Policy and
          Terms of Service
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#224870',

    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 5,
    marginTop: 5,
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
});

export default Register;
