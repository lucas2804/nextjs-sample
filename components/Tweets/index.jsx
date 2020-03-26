import React from 'react';
import * as PropTypes from 'prop-types';
import Tweet from './Tweet';

const Tweets = ({ tweets }) => (
  <div>{tweets.length > 0 && tweets.map(tweet => <Tweet tweet={tweet} />)}</div>
);
Tweets.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.object,
    content: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
};
export default Tweets;
