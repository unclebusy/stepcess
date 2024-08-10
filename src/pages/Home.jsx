import * as React from 'react';
import { QuestionField } from '../components/QuestionField';
import { AnswerField } from '../components/AnswerField';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import { Download } from '../components/Download';
import { MainBox } from '../components/MainBox';

export const Home = () => {
  const [testType, setTestType] = useState('Frontend');
  const [dataQuestions, setDataQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    fetch('/data/questions-test.json')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then((questions) => {
        setDataQuestions(questions);
        if (questions.length > 0) {
          setCurrentQuestion(_.sample(questions));
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!currentQuestion) {
    return <Download />;
  }

  return (
    <MainBox>
      <Typography variant="h6" component="h2">
        Тестирование для {testType} разработчика
      </Typography>
      <QuestionField currentQuestion={currentQuestion} dataQuestions={dataQuestions} />
      <AnswerField currentQuestion={currentQuestion} setTestType={setTestType} />
    </MainBox>
  );
};
