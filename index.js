var fs = require('q-io/fs')
var path = require('path')
var exec = require('child-process-promise').exec

module.exports = function (config) {
  var unalignedPath = config.output ? config.output + '.apk' : path.resolve(config.name + '-unaligned.apk')
  
  var jarsignerCmd = ['jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1']
  jarsignerCmd.push('-keystore ' + config.keystore)
  jarsignerCmd.push('-storepass ' + config.storepass)
  jarsignerCmd.push('-keypass ' + config.keypass)
  jarsignerCmd.push('-signedjar ' + unalignedPath)
  jarsignerCmd.push(config.file)
  jarsignerCmd.push(config.alias)

  var zipalignCmd = ['zipalign -f -v 4']
  zipalignCmd.push(unalignedPath)
  zipalignCmd.push(config.name + '.apk')

  var log = ''
  return exec(jarsignerCmd.join(' '), {
    cwd: process.cwd(),
    env: process.env
  })
    .then(function (res) {
      if (res.stderr.length > 0) throw stderr
      log += res.stdout
    })
    .catch(function (err) {
      console.log('jarsigner failed:', err)
      throw err; // don't swallow; cancel here
    })
    .then(function () {
      return exec(zipalignCmd.join(' '), {
        cwd: process.cwd(),
        env: process.env
      })
    })
    .then(function (res) {
      if (res.stderr.length > 0) throw stderr
      log += res.stdout
    })
    .catch(function (err) {
      console.log('zipalign failed:', err)
      throw err; // don't swallow; cancel here
    })
    .then(function () {
      if (config.log) {
        return fs.write(config.log, log)
          .then(function () {
            return fs.read(config.log)
          })
      }
      return true
    })
}
