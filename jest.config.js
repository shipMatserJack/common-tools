module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./scripts/setupJestEnv.ts'],
  globals: {
    'ts-jest': {
      tsconfig: {
        target: 'esnext',
        sourceMap: true
      }
    }
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx'
  ],
  testMatch: [
    '**/__tests__/**/*.(js|ts)?(x)',
    '**/?(*.)(spec).(js|ts)?(x)'
  ],
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  coverageDirectory: '<rootDir>/.coverage-report',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx,vue}',
    '!index.js',
    '!**/node_modules/**',
    '!**/*.d.ts'
  ]
}
