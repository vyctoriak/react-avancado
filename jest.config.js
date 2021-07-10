module.exports = {
  testEnvironment: 'jsdom', // pra dizer que tipo de ambiente teremos para testes e como mexeremos com browser, será o jsdom
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //pastas para o jest ignorar
  collectCoverage: true, // para fazer teste de cobertura, se está cobrindo todas as funções, variáveis, etc
  collectCoverageFrom: ['src/**/*.ts(x)'], //de onde coletar os arquivos para serem feitos os testes de cobertura
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'] //carregar configurações desse arquivo antes de rodar os testes
}
