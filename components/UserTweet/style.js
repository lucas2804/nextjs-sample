import { makeStyles } from '@material-ui/core/styles';
import { red, blue, white } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginBottom: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
  },
}));
