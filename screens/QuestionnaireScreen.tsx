import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableHighlight} from 'react-native';
import questions from '../data/questions';

const QuestionnaireScreen = ({navigation}: {navigation: any}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (points: any) => {
    setScore(score + points);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigation.navigate('Result', {score});
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.card}>
        <View
          style={styles.questionContainer}>
          <Text style={styles.question}>
            {questions[currentQuestion].question}
          </Text>
        </View>
        <View style={{paddingVertical: 10}}>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableHighlight
              style={styles.button}>
              <Button
                key={index}
                title={option.text}
                onPress={() => handleAnswer(option.points)}
              />
            </TouchableHighlight>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F2F2F2',
    marginBottom: '20%'
  },
  card: {
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 15,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  questionContainer: {
    paddingBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
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

export default QuestionnaireScreen;
