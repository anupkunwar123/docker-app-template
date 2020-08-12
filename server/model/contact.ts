import mongoose, { mongo } from 'mongoose'

const contact = new mongoose.Schema({
    firstLine: String,
    secondLine: String
})

export default mongoose.model('Contact', contact)