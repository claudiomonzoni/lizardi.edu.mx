const fs = require('fs')
const util = require('util')
const md5 = require('md5')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

let hashCss
let hashJs

const readCssFile = () => {
  return readFile('dist/style.css', (err, data) => {
    if (err) console.log(err)
  })
}

const readJsFile = () => {
  return readFile('dist/app.js', (err, data) => {
    if (err) console.log(err)
  })
}

readCssFile()
  .then((data) => {
    hashCss = md5(data).slice(0, 16)
    console.log(hashCss)
  })
  .then(() => {
    readJsFile()
      .then((data) => {
        hashJs = md5(data).slice(0, 16)
        console.log(hashJs)
      })
      .then(() => {
        const versionObject = {
          css: hashCss,
          js: hashJs
        }

        writeFile('src/_data/version.json', JSON.stringify(versionObject), (err) => {
          if (err) throw err
          console.log('The file has been saved!')
        })
      })
      .then(() => {
        fs.rename('dist/style.css', `dist/style${hashCss}.css`, function(err) {
          if ( err ) return console.log('ERROR: ' + err)
          console.log(`dist/style.css > dist/style${hashCss}.css`)
        })

        fs.rename('dist/app.js', `dist/app${hashJs}.js`, function(err) {
          if ( err ) return console.log('ERROR: ' + err)
          console.log(`dist/app.js > dist/app${hashJs}.js`)
        })
      })
  })

