module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js', 'dist/', 'generated/', '*.spec.ts'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'prettier/prettier': ['error'],
    },
    overrides: [
        {
            files: ['*.spec.ts', '*.e2e-spec.ts', 'main.ts'],
            rules: {
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
            },
        },
    ],
};
