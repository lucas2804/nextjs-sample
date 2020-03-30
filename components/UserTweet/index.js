import React from 'react';
import * as PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStyles } from './style';

const UserTweet = ({ tweet }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{ title: classes.title }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {tweet.user.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={tweet.user.name}
        subheader={tweet.updatedAt}
      />
      <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField fullWidth label="What's happening?" rowsMax="4" multiline />
        </form>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

UserTweet.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.object,
    content: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
};
export default UserTweet;
