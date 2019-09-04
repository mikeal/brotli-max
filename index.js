const zlib = require('zlib')
const fs = require('fs')

const main = async (input, output) => {
  const stream = zlib.createBrotliCompress({
    params: {
      [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      [zlib.constants.BROTLI_PARAM_SIZE_HINT]: fs.statSync(input).size
    }
  })
  const o = fs.createReadStream(input).pipe(stream).pipe(fs.createWriteStream(output))
  return new Promise(resolve => o.on('close', resolve))
}

module.exports = main
