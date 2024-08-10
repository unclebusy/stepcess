import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import _ from 'lodash';

export function AnswerField() {
  const currentAnswers = useSelector((state) => state.answers.currentAnswers);
  const mixedAnswers = useMemo(() => _.shuffle(currentAnswers), [currentAnswers]);
  const idQuestions = useSelector((state) => state.questions.currentQuestion.id);
  const correctAnswer = useSelector((state) => state.answers.correctAnswer);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: '1rem',
      }}
    >
      <form>
        <FormControl sx={{ m: 1 }} variant="standard">
          <FormLabel id="radios" sx={{ marginBottom: '2rem' }}>
            Выбери правильный ответ {correctAnswer} {idQuestions}
          </FormLabel>
          <RadioGroup
            aria-labelledby="answer-buttons-radios"
            name="answer-buttons-radios"
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1,
            }}
          >
            {mixedAnswers.length > 0 ? (
              mixedAnswers.map((el, index) => (
                <FormControlLabel
                  key={index}
                  value={`answer-${index}`}
                  control={<Radio />}
                  label={el}
                />
              ))
            ) : (
              <Typography>Нет доступных ответов</Typography>
            )}
          </RadioGroup>
          <Button
            // onClick={}
            sx={{
              mt: 1,
              mr: 1,
              padding: '0.5rem 1rem',
              minWidth: 'auto',
              textAlign: 'center',
              marginTop: '2rem',
              alignSelf: 'center',
            }}
            type="submit"
            variant="outlined"
          >
            Следующий вопрос
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
