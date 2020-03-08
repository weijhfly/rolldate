module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "ignorePatterns": ["config/", "node_modules/", 'dist/', 'src/lib', '*.config.js'],
    "rules": {
      "indent": ["error", 2],
      "comma-spacing": [2, {
        "before": false,
        "after": true
      }],
      "comma-style": [2, "last"]
    }
};