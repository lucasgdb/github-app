module.exports = {
    env: {
        es6: true,
    },
    extends: [
        'airbnb-base'
    ],
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
        'no-underscore-dangle': 'off'
    },
}
