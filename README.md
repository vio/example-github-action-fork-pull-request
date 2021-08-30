# example-github-action-fork-pull-request

[![Push](https://github.com/relative-ci/example-github-action-fork-pull-request/actions/workflows/build.yaml/badge.svg)](https://github.com/relative-ci/example-github-action-fork-pull-request/actions/workflows/build.yaml)
[![RelativeCI](https://badges.relative-ci.com/badges/WHdD8qHoSgd45vPTKYvm?branch=master)](https://app.relative-ci.com/projects/WHdD8qHoSgd45vPTKYvm)

> [@relative-ci/agent](https://github.com/relative-ci/agent) [Github Action](https://github.com/features/actions) example running on forked pull request.


## Example app

Basic webpack setup:
- `Javascript`: babel with `@babel/preset-env` and `@babel/preset-react`
- `CSS`: `postcss`(`autoprefixer`, `cssnano`), `css-modules`, `mini-css-extract`
- assets:
  - `public`: `copy-webpack-plugin`
  - `src`: `file-loader`
  - `inline.svg`: - `svgr`
