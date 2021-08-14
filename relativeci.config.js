module.exports = {
  payloadFilepath: './artifacts/relative-ci-agent.json',
  includeCommitMessage: true,
  webpack: {
    // Path to Webpack stats JSON file
    stats: './artifacts/webpack-stats.json'
  }
}
