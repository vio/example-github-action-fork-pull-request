# example-github-action-pull-request

[![Push](https://github.com/relative-ci/example-github-action-pull-request/actions/workflows/build.yaml/badge.svg)](https://github.com/relative-ci/example-github-action-pull-request/actions/workflows/relative-ci.yaml)
[![RelativeCI](https://badges.relative-ci.com/badges/n7hvYSuKi8g7YbFXKEe0?branch=master)](https://app.relative-ci.com/projects/n7hvYSuKi8g7YbFXKEe0)

> [@relative-ci/agent](https://github.com/relative-ci/agent) [Github Action](https://github.com/features/actions) example running on `pull_request` event


## Example app

Basic webpack setup:
- `Javascript`: babel with `@babel/preset-env` and `@babel/preset-react`
- `CSS`: `postcss`(`autoprefixer`, `cssnano`), `css-modules`, `mini-css-extract`
- assets:
  - `public`: `copy-webpack-plugin`
  - `src`: `file-loader`
  - `inline.svg`: - `svgr`
