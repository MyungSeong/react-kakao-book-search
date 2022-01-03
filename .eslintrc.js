module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-prototype-builtins': 'warn',
        'no-unused-vars': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
