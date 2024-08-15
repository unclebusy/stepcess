import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllQuestions, setCurrentQuestion } from '../redux/slices/questionsSlice';
import { setCorrectAnswer, setCurrentAnswers } from '../redux/slices/answersSlice';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import _ from 'lodash';

export function AnswersField() {
  const [userSelectedAnswer, setUserSelectedAnswer] = useState('');

  const allQuestions = useSelector((state) => state.questions.allQuestions);
  const idQuestions = useSelector((state) => state.questions.currentQuestion.id);
  const correctAnswer = useSelector((state) => state.answers.correctAnswer);
  const currentAnswers = useSelector((state) => state.answers.currentAnswers);
  const mixedAnswers = useMemo(() => _.shuffle(currentAnswers), [currentAnswers]);

  const dispatch = useDispatch();

  const handleChangeAnswer = (event) => {
    setUserSelectedAnswer(event.target.value);
  };

  const handleSelectAnswer = (event) => {
    event.preventDefault();

    if (userSelectedAnswer === correctAnswer) {
      const filteredAllQuestions = allQuestions.filter((question) => question.id !== idQuestions);

      dispatch(setAllQuestions(filteredAllQuestions));

      if (filteredAllQuestions.length > 0) {
        const nextQuestion = _.shuffle(filteredAllQuestions)[0];
        // eslint-disable-next-line
        console.log('Ответ верный');
        dispatch(setCurrentQuestion(nextQuestion));
        dispatch(setCurrentAnswers(nextQuestion.questionAnswers));
        dispatch(setCorrectAnswer(nextQuestion.questionCorrectAnswer));
      }
    } else {
      // eslint-disable-next-line
      console.log('Ответ неверный');
      setUserSelectedAnswer('');
      dispatch(setCurrentAnswers(mixedAnswers));
    }
  };

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
      <form onSubmit={handleSelectAnswer}>
        <FormControl sx={{ m: 1 }} variant="standard">
          <FormLabel id="radios" sx={{ marginBottom: '2rem' }}>
            Выбери правильный ответ {correctAnswer} {idQuestions}
          </FormLabel>
          <RadioGroup
            onChange={handleChangeAnswer}
            value={userSelectedAnswer}
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
                <FormControlLabel key={index} value={el} control={<Radio />} label={el} />
              ))
            ) : (
              <Typography>Нет доступных ответов</Typography>
            )}
          </RadioGroup>
          <Button
            onClick={handleSelectAnswer}
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
            Проверить ответ
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
