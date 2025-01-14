const mongoose = require('mongoose')


const Schema = mongoose.Schema


const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    }, 
    price:{
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('Product', productSchema)