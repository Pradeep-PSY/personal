const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    name:{ type: 'string', required: true},
    password:{ type: 'string', required: true},
    mobile:{ type: 'number', required: true},
    username:{ type: 'string', required: true}
})

const UserModel = model('user',userSchema);

module.exports = UserModel;