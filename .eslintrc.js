module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    "plugin:@typescript-eslint/recommended", 
    "eslint:recommended", 
    "prettier", 
    "prettier/@typescript-eslint"
  ],
  env: {
    "es6": true,
    "node": true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // "@typescript-eslint/explicit-function-return-type": "error",
    // "@typescript-eslint/indent": ["error", 4],
    // "quotes": ["error", "single", {
    //   "allowTemplateLiterals": true
    // }],
    // "comma-dangle": ["error", "never"],
    'eslint-no-prototype-builtins': "off",
    "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/no-use-before-define": "off",
    // "semi": ["error", "always"],
    // "@typescript-eslint/no-parameter-properties": "off",
     "@typescript-eslint/interface-name-prefix": "off",
    // "@typescript-eslint/no-unused-vars": ["error", {
    //   "varsIgnorePattern": "^_",
    //   "argsIgnorePattern": "^_"
    // }],
    // "@typescript-eslint/camelcase": ["error", {
    //   "properties": "always", "allow": ["^assert_", "^__.+__$"]
    // }],
    // "@typescript-eslint/naming-convention": [
    //   "error",
    //   {
    //     "selector": "property",
    //     "modifiers": ["private", "protected"],
    //     "format": ["camelCase"],
    //     "leadingUnderscore": "require"
    //   },
    //   {
    //     "selector": "property",
    //     "modifiers": ["public"],
    //     "format": ["camelCase"],
    //     "leadingUnderscore": "allow",
    //     "trailingUnderscore": "allow"
    //   }
    // ],
    // "@typescript-eslint/no-non-null-assertion": "off",
    // "@typescript-eslint/explicit-member-accessibility": ["error"],
    // "@typescript-eslint/no-inferrable-types": "off",
    // "no-console": "error"
  
  }, 
  "plugins": [
    "prettier"
  ]
};
