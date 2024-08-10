import * as React from 'react';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { QuestionField } from '../components/QuestionField';
import { AnswerField } from '../components/AnswerField';
import { Download } from '../components/Download';
import { MainBox } from '../components/MainBox';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { setAllQuestions, setCurrentQuestion } from '../redux/slices/questionsSlice';
import { setCorrectAnswer, setCurrentAnswers } from '../redux/slices/answersSlice';

export const Home = () => {
  const testTypeName = useSelector((state) => state.testType.testTypeName);
  const currentQuestion = useSelector((state) => state.questions.currentQuestion);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/data/questions-test.json')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then((questions) => {
        dispatch(setAllQuestions(questions));
        if (questions.length > 0) {
          const randomQuestion = _.sample(questions);
          dispatch(setCurrentQuestion(randomQuestion));
          dispatch(setCurrentAnswers(randomQuestion.answers));
          dispatch(setCorrectAnswer(randomQuestion.correct_answer));
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
        Тестирование для {testTypeName} разработчика
      </Typography>
      <QuestionField />
      <AnswerField />
    </MainBox>
  );
};
