module.exports = {
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/__tests__/pretest.ts'],
  moduleNameMapper: {
    '^@control-set/(.*)$': '<rootDir>/../$1/src',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.html?$': 'html-loader-jest',
  },
  testEnvironment: 'node',
  testRegex: '\\.spec\\.(ts|js)$',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageDirectory: './__tests__/coverage',
  coverageReporters: [
    'text-summary',
    'html',
  ],
  reporters: [
    "default",
    [
      "jest-trx-results-processor",
      {
        outputFile: "./__tests__/jestTestresults.trx",
        "defaultUserName": "user name to use if automatic detection fails"
      }
    ]]
};
