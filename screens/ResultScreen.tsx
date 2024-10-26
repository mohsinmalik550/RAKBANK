import React from 'react';
import {View, Text, Button, StyleSheet, TouchableHighlight} from 'react-native';

const getRiskProfile = (score: any) => {
  if (score < 5) return 'Low Risk';
  if (score < 10) return 'Midium Risk';
  return 'High Risk';
};

const ResultScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const {score} = route.params;
  const riskProfile = getRiskProfile(score);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Your Risk Profile</Text>
        <Text style={styles.profile}>{riskProfile}</Text>
        <TouchableHighlight style={styles.button}>
          <Button
            title="Retake Questionnaire"
            onPress={() => navigation.navigate('Home')}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20%',
  },
  card: {
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 15,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  profile: {fontSize: 36, fontWeight: 'bold', color: 'blue'},
  button: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default ResultScreen;
