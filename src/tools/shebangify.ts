import fs from 'fs'

const [, , target] = process.argv

fs.readFile(target, (err, data) => {
  if (err) {
    return console.error(err)
  }

  fs.writeFile(target, '#!/usr/bin/env node\n\n' + data.toString(), err => {
    if (err) {
      console.error(err)
    }
  })
})
