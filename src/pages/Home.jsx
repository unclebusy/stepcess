import * as React from 'react';
import { Box } from '@mui/material';
import { QuestionField } from '../components/QuestionField';
import { AnswerField } from '../components/AnswerField';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [dataQuestions, setDataQuestions] = useState([]);

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
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
          gridTemplateRows: '2fr 2fr',
          gap: '1rem',
          padding: '2rem',
        }}
      >
        <QuestionField dataQuestions={dataQuestions} />
        <AnswerField dataQuestions={dataQuestions} />
      </Box>
    </Box>
  );
};
