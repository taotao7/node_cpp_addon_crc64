#!/usr/bin/env zx
const os = require('os')
const fs = require('fs')
const path = require('path')

const main = async () => {
  const folderName = os.platform() + os.arch();
  if (!fs.existsSync(path.join(__dirname, 'dist'))) {
    fs.mkdirSync('dist')
  }
  await $`npm run build`
  await $`mv build dist/${os.arch()}-${os.platform()}`
}
main()
