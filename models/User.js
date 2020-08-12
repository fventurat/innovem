const { Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {type: String, require: true},
    email:{type: String, required: true},
    password:{ type: String, require: true}
}, {
    timestamps: true
});

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}; //to encrypt password

UserSchema.methods.matchPassword = function (password) {
    return await bcrypt.compare(password, this.password )
}  // true or false (match - do not match)

module.exports = model('User', UserSchema);

