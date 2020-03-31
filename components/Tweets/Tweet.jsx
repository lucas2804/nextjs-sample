import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Twitter from '@material-ui/icons/Twitter';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStyles } from './style';

const Tweet = props => {
  const classes = useStyles();
  const { tweet } = props;

  const handleClickRetweet = () => {
    props.handleClickRetweet(tweet.id);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{ title: classes.title }}
        avatar={
          <Avatar aria-label="recipe" style={{ backgroundColor: '#fff' }}>
            <IconButton aria-label="add to favorites">
              <Twitter style={{ color: '#1CA1F2' }} fontSize="large" />
            </IconButton>
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
        <Typography variant="body2" color="textSecondary" component="p">
          {tweet.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={handleClickRetweet} aria-label="share">
          <ShareIcon />
          {tweet.numberOfRetweet}
        </IconButton>
      </CardActions>
    </Card>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.object,
    content: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
  handleClickRetweet: PropTypes.func,
};
export default Tweet;
