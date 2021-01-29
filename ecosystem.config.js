const NODE_ENV = "dev";

module.exports = {
  apps: [
    {
      name: NODE_ENV + "-test-demo",
      script: "./server.js",
      watch: true,
      ignore_watch: [
        "logs",
        ".git",
        ".idea",
        ".stubInbox",
        "node_modules",
        ".vs",
        ".idea",
      ],
      env: {
        NODE_ENV: NODE_ENV,
      },
    },
  ],
};
