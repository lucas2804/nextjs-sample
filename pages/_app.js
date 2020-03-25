import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import initializeStore from '../lib/initializeStore';
import Layout from '../containers/Layout';
import getPageContext from './_theme';

// Import CSS reset and Global Styles
import '../styles/global-styles';

import 'storm-react-diagrams/dist/style.min.css';
import '../static/css/srd.css';

const initialState = {};
let store;

const isServer = typeof window === 'undefined';
/* eslint-disable no-underscore-dangle */
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';
/* eslint-enable */

// Always make a new store if server, otherwise state is shared between requests
if (isServer) {
  store = initializeStore(initialState);
} else {
  // Create store if unavailable on the client and set it on the window object
  /* eslint-disable no-underscore-dangle */
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  store = window[__NEXT_REDUX_STORE__];
  /* eslint-enable */
}

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  componentDidCatch(error, errorInfo) {
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    Sentry.captureException(error);

    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={this.pageContext.theme}>
          <CssBaseline />
          <Layout>
            <Component pageContext={this.pageContext} {...pageProps} />
          </Layout>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
export default MyApp;
