import { Box } from '@mui/material';

export const QuestionField = ({ currentQuestion }) => {
  const question = currentQuestion.question;

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
      <h1>{question}</h1>
    </Box>
  );
};
