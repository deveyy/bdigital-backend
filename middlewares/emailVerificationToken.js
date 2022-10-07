const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');

const emailValidationTokenSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        expires: 3600,
        default: Date.now() 
    }
});

emailValidationTokenSchema.pre('save', async function(next) {
    if(this.isModified('token')) {
        this.token =  await bcrypt.hash(this.token, 10);
    }
    next();
});

module.exports = mongoose.model("EmailValidationToken", emailValidationTokenSchema)