import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import * as React from 'react';

export const QuestionField = () => {
  const currentQuestion = useSelector((state) => state.questions.currentQuestion.questionText);
  const currentQuestionTopic = useSelector(
    (state) => state.questions.currentQuestion.questionTopic
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 2rem',
        boxShadow: 1,
        borderRadius: '0.5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <h1>{currentQuestion ? currentQuestion : 'Нет доступных вопросов'}</h1>
      </Box>
      <Box
        sx={{
          margin: 0,
          alignSelf: 'flex-end',
        }}
      >
        <p>Тема вопроса: {currentQuestionTopic}</p>
      </Box>
    </Box>
  );
};
