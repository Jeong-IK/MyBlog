module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb',
        'plugin:prettier/recommended',
        'plugin:react/recomended',
    ],
    rules: {
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/prefer-default-export': 'off',
        'react/function-component-definition': [
            2,
            {
                namedConmponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
    },
};
