module.exports = {
  preset: "jest-puppeteer",
  roots: ["tests"],
  setupFilesAfterEnv: ["./tests/setup.js"],
};
