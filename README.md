[![npm](https://img.shields.io/npm/v/apk-signer.svg?style=flat-square)](https://www.npmjs.com/package/apk-signer)
[![GitHub issues](https://img.shields.io/github/issues/beevelop/apk-signer.svg?style=flat-square)](https://github.com/beevelop/apk-signer/issues)
[![bitHound Score](https://www.bithound.io/github/beevelop/apk-signer/badges/score.svg?)](https://www.bithound.io/github/beevelop/apk-signer)
[![Travis](https://img.shields.io/travis/beevelop/ng-stomp.svg?style=flat-square)](https://travis-ci.org/beevelop/apk-signer)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![Beevelop](https://links.beevelop.com/honey-badge)](https://beevelop.com)

# apk-signer

> simple command line tool for easily signing apks

## Installation
```bash
npm install -g apk-signer
```

## Options
```
--help           Show help                                           [boolean]
-c               Path to JSON config file
-f, --file       (relative) path to the apk file           [string] [required]
-a, --alias      alias_name for your application                    [required]
-k, --keystore   path to the keystore to sign your app with         [required]
-s, --storepass  password for keystore integrity                    [required]
-p, --keypass    password for private key (if different)
-l, --log        File to log stdout to
-o, --output     Define output name for signed apk
-v, --version    Show version number                                 [boolean]
```

## Example
```bash
apk-signer -f android-release-unsigned.apk -a foobar -k foobar.keystore -s foobar

# Optionally specify the wished output filename (.apk will be appended)
apk-signer -f android-release-unsigned.apk -a foobar -k foobar.keystore -s foobar -o foobar
```

## Development
```sh
# Generate a new Keystore
keytool -genkey -v -keystore foobar.keystore -alias foobar -keyalg RSA -keysize 2048 -validity 10000
```