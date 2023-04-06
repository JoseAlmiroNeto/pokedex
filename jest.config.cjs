module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["vue", "js", "jsx", "json", "ts", "tsx", "node"],
  testMatch: ["**/*.spec.(js|jsx|ts|tsx)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
