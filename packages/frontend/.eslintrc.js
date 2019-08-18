module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
        'plugin:react/recommended'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
        'no-use-before-define': 'off',
        'no-underscore-dangle': 'off',
        'react/display-name': 'off',
        'no-param-reassign': 'off'
    },
}
