const fs = require('fs')

const fetchNotes = () => {
    try {return JSON.parse(fs.readFileSync('notes.txt', 'utf8'))}
    catch(err) {return [] }
}
const notes = fetchNotes()


const adding = (title, body) => {
let note={title, body}
notes.push(note)
fs.writeFile('notes.txt', JSON.stringify(notes) , err => {
    if (err) throw err;
    console.log('adding new note')
})} 

const deleting = (title) => {
const filteredNotes = notes.filter(el => el.title !== title)
fs.writeFile('notes.txt', JSON.stringify(filteredNotes) , err => {
    if (err) throw err;
    console.log('deleting note')
})} 


const reading = (title) => {
    const Note = notes.filter(el => el.title === title)
    fs.writeFile('notes.txt', `Title: ${Note[0].title}  Body: ${Note[0].body}`  , err => {
        if (err) throw err;
        console.log('reading note')
})}


const listing = () => {
    for(i=0;i<notes.length;i++) {
        console.log(`Title:${notes[i].title}, Body:${notes[i].body}`)
        console.log('****************')
        }
    console.log('listing notes')
}



module.exports = {adding, reading, deleting, listing} 


