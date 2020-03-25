import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import * as actions from './actions';
import Tweet from '../../components/Tweet';

const HomeContainer = ({ tweets, tweetsRequest, loadedTweets }) => {
  useEffect(() => {
    tweetsRequest();
  }, []);
  const tweet = tweets[0];
  const dom = <div>{loadedTweets && <Tweet tweet={tweet} />}</div>;
  return dom;
};

HomeContainer.propTypes = {
  tweets: PropTypes.array,
};

const mapStateToProps = state => {
  const {
    homeTweets: { tweets, loadedTweets },
  } = state;
  return { tweets, loadedTweets };
};

const mapDispatchToProps = {
  tweetsRequest: actions.tweetsRequest,
};

const withReducer = injectReducer({ key: 'homeTweets', reducer });
const withSaga = injectSaga({ key: 'homeContainer', saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withSaga, withConnect)(HomeContainer);
