import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import * as React from 'react';

export const QuestionField = () => {
  const questions = useSelector((state) => state.questions.allQuestions || []);
  const remainingQuestions = questions.length;

  const currentQuestion = useSelector((state) => state.questions.currentQuestion);
  const currentQuestionText = currentQuestion
    ? currentQuestion.questionText
    : 'Нет доступных вопросов';
  const currentQuestionTopic = currentQuestion ? currentQuestion.questionTopic : 'Неизвестно';

  const testTypeName = useSelector((state) => state.testType.testTypeName);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '1rem 2rem',
        boxShadow: 1,
        borderRadius: '0.5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          color: 'gray',
        }}
      >
        <p>Тестирование для {testTypeName} разработчика</p>
        <p>Тема вопроса: {currentQuestionTopic}</p>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
        }}
      >
        <h1>{currentQuestionText ? currentQuestionText : 'Нет доступных вопросов'}</h1>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          color: 'gray',
        }}
      >
        <p>Осталось вопросов: {remainingQuestions}</p>
      </Box>
    </Box>
  );
};
