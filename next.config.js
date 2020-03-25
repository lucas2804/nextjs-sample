const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withImages({
    serverRuntimeConfig: {
      // Will only be available on the server side
      apiKey: 'secret',
    },
    publicRuntimeConfig: {
      apiURL:
        process.env.NODE_ENV === 'production'
          ? process.env.API_URL
          : 'http://api-localhost.innogr.am',
      homeChannelLimit: 12,
      channelLimit: 48,
    },
  }),
);
