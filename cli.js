#!/usr/bin/env node
'use strict'
const max = require('./')

const options = yargs => {
  yargs.positional('input', {
    desc: 'Input file'
  })
  yargs.positional('output', {
    desc: "Output file, defaults to input + '.br'"
  })
}
const run = argv => {
  const output = argv.output || argv.input + '.br'
  return max(argv.input, output)
}

require('yargs') // eslint-disable-line
  .command('$0 <input> [output]', 'Parse schema file', options, run)
  .argv
