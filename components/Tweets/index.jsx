import React from 'react';
import * as PropTypes from 'prop-types';
import Tweet from './Tweet';

const Tweets = ({ tweets, handleClickRetweet }) => (
  <div>
    {tweets.length > 0 &&
      tweets.map(tweet => (
        <Tweet handleClickRetweet={handleClickRetweet} tweet={tweet} key={tweet.id} />
      ))}
  </div>
);
Tweets.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.object,
    content: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
  handleClickRetweet: PropTypes.func,
};
export default Tweets;
