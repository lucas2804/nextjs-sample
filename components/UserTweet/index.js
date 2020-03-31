import React, { useState } from 'react';
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
import Button from '@material-ui/core/Button';
import { useStyles } from './style';

const UserTweet = props => {
  const classes = useStyles();
  const [content, setContent] = useState('');
  const { tweet } = props;

  const resetForm = () => {
    setContent('');
  };

  const handleSubmitTweet = e => {
    e.preventDefault();
    props.handleSubmitTweet(content);
    resetForm();
  };

  return (
    <Card className={classes.root} style={{marginBottom: 40}}>
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
          <TextField
            fullWidth
            label="What's happening?"
            rowsMax="4"
            multiline
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </form>
      </CardContent>
      <CardActions disableSpacing style={{ float: 'right', marginBottom: 10 }}>
        <Button
          style={{
            color: '#fff',
            backgroundColor: '#1CA1F2',
          }}
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmitTweet}
        >
          Tweet
        </Button>
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
  handleSubmitTweet: PropTypes.func,
};
export default UserTweet;
