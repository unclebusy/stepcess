import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

export const QuestionField = () => {
  const currentQuestion = useSelector((state) => state.questions.currentQuestion.question);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        boxShadow: 1,
        borderRadius: '0.5rem',
      }}
    >
      <h1>{currentQuestion ? currentQuestion : 'Нет доступных вопросов'}</h1>
    </Box>
  );
};
