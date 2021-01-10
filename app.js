const notes = require('./notes')
const yargs = require('yargs')


const command = yargs.argv._[0]

if (command === 'add') 
{notes.adding(yargs.argv.title, yargs.argv.body)}

else if (command === 'read') 
{notes.reading(yargs.argv.title)}

else if (command === 'delete') 
{notes.deleting(yargs.argv.title)}

else if (command === 'list')
{notes.listing()}

else {console.log('choose a right command')}