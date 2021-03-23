const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "main",
    repo: "https://github.com/nelsontrangithub/nelsons-portfolio.git",
  },
  () => {
    console.log("Deploy Complete!");
  },
);
