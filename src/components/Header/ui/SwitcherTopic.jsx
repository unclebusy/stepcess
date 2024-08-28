import styles from '../Header.module.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const SwitcherTopic = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" className={styles.switcherTopicActiveButton}>
        Frontend
      </Button>
      <Button variant="contained">Backend</Button>
      <Button variant="contained">Fullstack</Button>
    </Stack>
  );
};
