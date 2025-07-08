export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: 'src',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    collectCoverageFrom: ['**/*.ts'],
    coverageDirectory: '../coverage',
    coverageReporters: ['html', 'text-summary'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/$1',
    },
  };
  