// jest.config.js
module.exports = {
  rootDir: __dirname,
  // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
