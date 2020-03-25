import React from 'react';
import Tweet from '../../components/Tweet';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <Tweet />
        <Tweet />
      </div>
    );
  }
}

export default HomeContainer;
