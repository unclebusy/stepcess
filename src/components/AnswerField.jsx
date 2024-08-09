import React, { useMemo } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import _ from 'lodash';

export function AnswerField({ currentQuestion }) {
  const qstAnswers = useMemo(() => _.shuffle(currentQuestion.answers), [currentQuestion.answers]);

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
            {qstAnswers.length > 0 ? (
              qstAnswers.map((el, index) => (
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
