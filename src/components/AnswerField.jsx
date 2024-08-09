import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export function AnswerField({ dataQuestions }) {
  const qstAnswer = dataQuestions[0].answers;

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
            Выбери правильный ответ
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
            {' '}
            {qstAnswer.map((el, index) => (
              <FormControlLabel key={index} value="answer-1" control={<Radio />} label={el} />
            ))}
          </RadioGroup>
          <Button sx={{ mt: 1, mr: 1, marginTop: '2rem' }} type="submit" variant="outlined">
            Следующий вопрос
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
