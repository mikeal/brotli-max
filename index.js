const zlib = require('zlib')
const fs = require('fs')
const { stat, writeFile } = fs.promises

const main = async (input, output) => {
  let size
  if (Buffer.isBuffer(input)) {
    size = input.length
  } else if (typeof input === 'string') {
    size = (await stat(input)).size
  } else {
    throw new Error('Unknown input type')
  }

  const stream = zlib.createBrotliCompress({
    params: {
      [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      [zlib.constants.BROTLI_PARAM_SIZE_HINT]: size
    }
  })
  if (typeof input === 'string') {
    const o = fs.createReadStream(input).pipe(stream).pipe(fs.createWriteStream(output))
    return new Promise(resolve => o.on('close', resolve))
  }
  return writeFile(output, input)
}

module.exports = main
