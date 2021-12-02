const config = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
  testEnvironment: 'node',
}

export default config
