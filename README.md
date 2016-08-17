[![npm](https://img.shields.io/npm/v/apk-signer.svg?style=flat-square)](https://www.npmjs.com/package/apk-signer)
[![GitHub issues](https://img.shields.io/github/issues/beevelop/apk-signer.svg?style=flat-square)](https://github.com/beevelop/apk-signer/issues)
[![bitHound Score](https://www.bithound.io/github/beevelop/apk-signer/badges/score.svg?)](https://www.bithound.io/github/beevelop/apk-signer)

# apk-signer

> simple command line tool for easily signing apks

## Installation
```bash
sudo npm install -g apk-signer
```

## Options
```
Usage: apk-signer

Options:
  --help           Show help [boolean]
  -v, --version    Show version number [boolean]
  -c               Path to JSON config file
  -f, --file       (relative) path to the apk file [string] [required]
  -a, --alias      alias_name for your application [required]
  -k, --keystore   path to the keystore to sign your app with [required]
  -s, --storepass  password for keystore integrity [required]
  -p, --keypass    password for private key (if different)
  -l, --log        File to log stdout to
```

## Example
```bash
apk-signer -f android-release-unsigned.apk -a phoenix -k my.keystore -s ph03n!X
```