import globals from 'globals'
// import pluginJs from '@eslint/js'
// import pluginReactConfig from './node_modules/eslint-plugin-react/configs/recommended.js'

export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ignores: ['**/*.test.js'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    // plugins: ['flowtype', 'css-modules', 'prettier', 'jest'],
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
    rules: {
      eqeqeq: 'error',
      //   'react/jsx-uses-react': 'error',
      //   'react/jsx-uses-vars': 'error',
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'all',
          ignoreRestSiblings: false,
          reportUsedIgnorePattern: false,
        },
      ],
      // 'import/no-extraneous-dependencies': [
      //   'error',
      //   { devDependencies: ['**/*.test.js', '**/*.spec.js'] },
      // ],
      'no-console': [
        'error',
        {
          allow: ['warn', 'error', 'info'],
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      // 'jsx-a11y/anchor-is-valid': [
      //   'error',
      //   {
      //     components: ['Link'],
      //     specialLink: ['to'],
      //     aspects: ['noHref', 'invalidHref', 'preferButton'],
      //   },
      // ],
      // 'react/jsx-filename-extension': [
      //   'error',
      //   { extensions: ['.js', '.jsx'] },
      // ],
      // 'react/prefer-stateless-function': 'off',
      // 'prettier/prettier': 'error',
      // 'react/forbid-prop-types': 'off',
      // 'react/destructuring-assignment': 'off',
      // 'react/jsx-props-no-spreading': 'off',
      // 'react/prop-types': 'off',
      // 'import/no-cycle': 'off',
    },
  },
  // pluginJs.configs.recommended,
  // pluginReactConfig,
]
