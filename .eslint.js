const accessiblityRules = {
  // Disable these accessibility rules until general web accessibility is prioritised
  "jsx-a11y/interactive-supports-focus": 0,
  "jsx-a11y/click-events-have-key-events": 0,
  "jsx-a11y/no-noninteractive-element-interactions": 0,
  "jsx-a11y/no-static-element-interactions": 0,
  "jsx-a11y/label-has-for": 0,
  "jsx-a11y/anchor-is-valid": 0
};

const base = {
  parser: "typescript-eslint-parser",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },

  extends: [
    // Airbnb provides almost all our linting rules
    "airbnb",

    // Prettier provides opinionated defaults for all code-layout choices
    "prettier"
  ],
  
  // Allows assuming the presence of globals provided by all these environments
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jest: true
  },

  plugins: ["prettier", "typescript"],

  rules: {
    ...accessiblityRules,

    // Allows importing from files with explicit '.js' extensions
    "import/extensions": 0,

    // Prevent assigning to arguments, but allow modifying them.
    "no-param-reassign": [2, { props: false }],

    // Applies our code-layout customizations
    "prettier/prettier": [
      2,
      {
        singleQuote: true,
        trailingComma: "all"
      }
    ],

    // Allow labels to have dynamic content, even when it may not include a form control
    "jsx-a11y/label-has-associated-control": 0,

    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/label-has-for": 0,
    "import/no-unresolved": 0, // handled by typescript
    "no-undef": 0, // handled by typescript
    "no-unused-vars": 0, // handled by typescript
    "no-restricted-globals": 0, // conflicts with typescript type declaration
  }
};

module.exports = base;