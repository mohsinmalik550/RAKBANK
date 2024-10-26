const questions = [
  {
    question: 'How long are you willing to invest?',
    options: [
      {text: 'Less than 1 year', points: 1},
      {text: '1-3 years', points: 2},
      {text: '3-5 years', points: 3},
      {text: 'More than 5 years', points: 4},
    ],
  },
  {
    question: 'What is your main investment goal?',
    options: [
      {text: 'Preserve capital', points: 1},
      {text: 'Generate income', points: 2},
      {text: 'Growth with moderate risk', points: 3},
      {text: 'High growth with high risk', points: 4},
    ],
  },
  {
    question: 'How do you react to market fluctuations?',
    options: [
      {text: 'Sell to avoid losses', points: 1},
      {text: 'Feel uncomfortable but hold', points: 2},
      {text: 'Invest more to capitalize', points: 3},
    ],
  },
  {
    question: 'How do you feel about investment risks?',
    options: [
      {text: 'Very Risky', points: 3},
      {text: 'Moderate', points: 2},
      {text: 'Low Risk', points: 1},
    ],
  },
  {
    question: 'What portion of your savings are you looking to invest?',
    options: [
      {text: 'Less than 25%', points: 3},
      {text: '25% - 50%', points: 2},
      {text: 'Less than 25%', points: 1},
    ],
  },
];

export default questions;
