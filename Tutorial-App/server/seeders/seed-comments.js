const db = require('../models')

async function seed() {
    let tutorial = await db.Tutorial.findOne({ title: 'How replace a lightbulb' })

    let comment = await db.Comment.create({
        author: 'Walking Blonde Joke',
        stars: 4.0,
        content: 'I had no idea changing a lightbulb was so simple!',
    })

    tutorial.comments.push(comment.id)

    await tutorial.save()

    process.exit()
}

seed()