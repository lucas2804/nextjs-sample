import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import * as actions from './actions';
import Tweets from '../../components/Tweets';
import UserTweet from '../../components/UserTweet';
import Tweet from '../../components/Tweets/Tweet';

const HomeContainer = ({
  tweets,
  createdTweet,
  tweetsRequest,
  loadedTweets,
  createTweetRequest,
  retweetRequest,
}) => {
  useEffect(() => {
    tweetsRequest();
  }, []);

  const handleSubmitTweet = content => {
    createTweetRequest(content);
  };
  const handleClickRetweet = tweetId => {
    retweetRequest(tweetId);
  };
  const tweet = tweets[0];
  const dom = (
    <div>
      {loadedTweets && (
        <div>
          <UserTweet tweet={tweet} handleSubmitTweet={handleSubmitTweet} />
          {createdTweet && (
            <Tweet tweet={createdTweet} />
          )}
          <Tweets tweets={tweets} handleClickRetweet={handleClickRetweet} />
        </div>
      )}
    </div>
  );
  return dom;
};

HomeContainer.propTypes = {
  tweets: PropTypes.array,
};

const mapStateToProps = state => {
  const {
    homeTweets: { tweets, loadedTweets, createdTweet },
  } = state;
  return { tweets, loadedTweets, createdTweet };
};

const mapDispatchToProps = {
  tweetsRequest: actions.tweetsRequest,
  createTweetRequest: actions.createTweetRequest,
  retweetRequest: actions.retweetRequest,
};

const withReducer = injectReducer({ key: 'homeTweets', reducer });
const withSaga = injectSaga({ key: 'homeContainer', saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withSaga, withConnect)(HomeContainer);
