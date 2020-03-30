const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

console.log(process.env);
module.exports = withCSS(
  withImages({
    serverRuntimeConfig: {
      // Will only be available on the server side
      apiKey: 'secret',
    },
    publicRuntimeConfig: {
      apiURL: process.env.API_URL,
      homeChannelLimit: 12,
      channelLimit: 48,
    },
  }),
);
