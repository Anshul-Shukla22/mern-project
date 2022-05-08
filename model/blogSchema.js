const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: String,
    desc: String
})

module.exports = mongoose.model('Blog',blogSchema)