const db = require('../models')

db.Tutorial.create([{
    title: 'How replace a lightbulb',
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})