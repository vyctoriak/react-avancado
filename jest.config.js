module.exports = {
  testEnvironment: 'jsdom', // pra dizer que tipo de ambiente teremos para testes e como mexeremos com broser, será o jsdom
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
