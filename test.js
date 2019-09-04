'use strict'

/* very minimal test w/ no framework) */

const main = require('./')
const assert = require('assert')
const fs = require('fs')

const file = __filename

const run = async () => {
  await main(file, file + '.br')
  assert.ok(fs.statSync(file + '.br').size)
}
run()
