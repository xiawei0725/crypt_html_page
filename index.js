const glob = require('glob')
const shell = require('shelljs');
const del = require('del')
glob('html/**/*.html', (err, match) => {
    del.sync(['public/*/'])
    match.forEach(file => {
        const name = file.substring(5)
        const command = `npx staticrypt ${file} 123456 -f template.html -o public/${name}`
        shell.exec(command)
        console.log(command);
    })
})