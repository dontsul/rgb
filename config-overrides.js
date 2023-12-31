const path = require('path');

module.exports = function override(config, env) {
  // Добавьте следующую конфигурацию внутри функции override

  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    path: require.resolve('path-browserify'),
  };

  return config;
};
