const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //빈칸없앰
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //1이면 관리자고 이렇게하기위해서
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { //토큰 사용기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }