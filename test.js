'use strict'

/* very minimal test w/ no framework) */

const main = require('./')
const assert = require('assert')
const fs = require('fs')

const file = __filename

const run = async () => {
  await main(file, file + '.br')
  assert.ok(fs.statSync(file + '.br').size)
  const buff = fs.readFileSync(file)
  await main(buff, file + '2.br')
  assert.ok(fs.statSync(file + '2.br').size)
  try {
    await main(null, null)
    throw new Error('Missed failure')
  } catch (e) {
    assert.ok(e.message === 'Unknown input type')
  }
  fs.unlinkSync(file + '.br')
  fs.unlinkSync(file + '2.br')
}
run()
