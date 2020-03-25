import React from 'react';
import dynamic from 'next/dynamic';

const HomeContainer = dynamic(import('../containers/Home'), {
  ssr: false,
});

class HomePage extends React.Component {
  render() {
    return <HomeContainer />;
  }
}

export default HomePage;
