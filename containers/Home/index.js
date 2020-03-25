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

const HomeContainer = ({ tweets, tweetsRequest }) => {
  useEffect(() => {
    tweetsRequest();
  }, []);

  const dom = (
    <div>
      <Tweet tweets={tweets} />
    </div>
  );
  return dom;
};

HomeContainer.propTypes = {
  tweets: PropTypes.array,
};

const mapStateToProps = state => {
  const { tweets } = state;
  return { tweets };
};

const mapDispatchToProps = {
  tweetsRequest: actions.tweetsRequest,
};

const withReducer = injectReducer({ key: 'homeTweets', reducer });
const withSaga = injectSaga({ key: 'homeContainer', saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withSaga, withConnect)(HomeContainer);
