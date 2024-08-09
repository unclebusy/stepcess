import * as React from 'react';
import { Box } from '@mui/material';
import { QuestionField } from '../components/QuestionField';
import { AnswerField } from '../components/AnswerField';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { makeRandomIndex } from '../utils/makeRandom';

export const Home = () => {
  const [testType, setTestType] = useState('Frontend');
  const [dataQuestions, setDataQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    fetch('/data/questions.json')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then((questions) => {
        setDataQuestions(questions);
        if (questions.length > 0) {
          const randomIndex = makeRandomIndex(questions);
          setCurrentQuestion(questions[randomIndex]);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!currentQuestion) {
    return <Typography>Загрузка...</Typography>;
  }
  //eslint-disable-next-line
  const questions = dataQuestions;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxHeight: 'calc(100vh - 60px)',
        mt: '50px',
      }}
    >
      <Box
        sx={{
          width: '60vw',
          height: 'calc(80vh - 60px)',
          borderRadius: '1rem',
          boxShadow: 10,
          display: 'grid',
          gridTemplateRows: ' 0fr 1fr 1fr',
          gap: '1rem',
          padding: '2rem',
        }}
      >
        <Typography variant="h6" component="h2">
          Тестирование для {testType} разработчика
        </Typography>
        <QuestionField currentQuestion={currentQuestion} />
        <AnswerField currentQuestion={currentQuestion} setTestType={setTestType} />
      </Box>
    </Box>
  );
};
