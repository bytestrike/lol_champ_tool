# LoL Champ Select Helper
a tool that will help you to create your build and masteries.

## Features
- Cross-Platform capability and most common browsers are supported
- Find build for normal and aram

## Installation

```
npm i -g @kounadev/lol
```

## Usage

```
lol champ <champion> [aram]
```

## Configuration

Place a `lol.config.js` in your home directory (or use `--config <path>` option in your command)
The file is loaded so you can use logic in it.

```js
module.exports = {
  browser: {
    /**
     * electron
     * chrome
     * firefox
     * opera
     * edge
     * safari
     * default
     * custom
     * ie
     * edge
     */
    type: 'chrome',
    /**
     * default
     * app
     * kiosk
     */
    // most unsupported configurations will throw
    // some do not throw an error but will just not work on your platform
    mode: 'app',
    path: 'path/to/the/browser/binary' // didn't test it with non absolute paths
  }
}
```

## Credits
Code: mostly [Kounah](https://github.com/kounah)
Idea: bytestrike
