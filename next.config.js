const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = () => {
  return {

    // I18n localization
    i18n,
    localePath: path.resolve('localization'),
    async rewrites() {
      return [
        // en
        { destination: '/en/default-locale-url', source: '/en/locale-url', locale: false },
        // de
        { destination: '/de/default-locale-url', source: '/de/locale-url', locale: false },
      ]
    },

    reactStrictMode: true,

  }
}