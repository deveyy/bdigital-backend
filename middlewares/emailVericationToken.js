const { default: mongoose } = require("mongoose");

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
     const hash =  await bcrypt.hash(this.token, 10);
        this.token = hash;
    }
    next();
});

module.exports = mongoose.model("EmailValidationToken", emailValidationTokenSchema)