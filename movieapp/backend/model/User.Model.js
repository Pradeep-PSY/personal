const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    email:{type: 'string', required: true},
    password:{type: 'string', required: true},
    name:{type: 'string', required:true}
})

const UserModel = model('userbase', userSchema);

module.exports = UserModel;