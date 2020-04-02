module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/mocked-image.ts',
    'rc-queue-anim': '<rootDir>/src/__mocks__/mocked-queue-anim.tsx',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^css/(.*)': '<rootDir>/src/css/$1',
    '^pages/(.*)': '<rootDir>/src/pages/$1',
    '^types/(.*)': '<rootDir>/src/types/$1',
    '^assets/(.*)': '<rootDir>/src/assets/$1'
  },
  preset: 'ts-jest',
  testMatch: ['**/**/*test.ts?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/helpers'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ]
}
