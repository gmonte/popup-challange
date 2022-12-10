module.exports = {
  env: {
    es2021: true
  },
  extends: ['eslint:recommended', 'standard-with-typescript', 'plugin:import/typescript', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:storybook/recommended'],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    project: './tsconfig.json'
  },
  plugins: ['import-helpers', 'modules-newlines', 'newline-destructuring', 'react-hooks', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-assertions': ['warn', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow'
    }],
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'generator-star-spacing': ['error', {
      before: false,
      after: true
    }],
    'import-helpers/order-imports': ['error', {
      newlinesBetween: 'always',
      groups: ['/^react/', 'module', '/^~/', ['parent', 'sibling', 'index']],
      alphabetize: {
        order: 'asc',
        ignoreCase: true
      }
    }],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'modules-newlines/import-declaration-newline': 'error',
    'modules-newlines/export-declaration-newline': 'error',
    'newline-destructuring/newline': 'error',
    'object-curly-newline': ['warn', {
      ObjectExpression: {
        multiline: true,
        minProperties: 2
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 3
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 3
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 3
      }
    }],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false
    }],
    'object-shorthand': ['error', 'always', {
      avoidExplicitReturnArrows: true
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-curly-spacing': ['warn', {
      when: 'always'
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx']
    }],
    'react/function-component-definition': [2, {
      namedComponents: 'function-declaration'
    }],
    'space-before-function-paren': ['error', 'always'],
    'template-curly-spacing': [2, 'always']
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.*']
      },
      typescript: {
        alwaysTryTypes: true,
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: './tsconfig.json'
      }
    }
  }
};