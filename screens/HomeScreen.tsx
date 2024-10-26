import React from 'react';
import {View, Text, Button, StyleSheet, TouchableHighlight} from 'react-native';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Welcome to the Risk Profile Questionnaire
        </Text>
        <TouchableHighlight style={styles.button}>
          <Button
            onPress={() => navigation.navigate('Questionnaire')}
            title="Start Questionnaire"
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
    backgroundColor: '#F2F2F2',
    marginBottom: '20%',
  },
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  card: {
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 15,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
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

export default HomeScreen;
