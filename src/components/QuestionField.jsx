import { Box } from '@mui/material';

export const QuestionField = ({ dataQuestions }) => {
  const qstText = dataQuestions[0].question;

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
      <h1>{qstText}</h1>
    </Box>
  );
};
