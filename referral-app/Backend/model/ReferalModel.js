const {Schema,model} = require('mongoose');

const referalSchema = Schema({
    referalcode:{ type: 'string', required: true},
    point:{ type: 'number', required: true},
    userId:{ type: 'string', required: true},
    topersonrefered:[],
})

const ReferalModel = model('refer',referalSchema);

module.exports = ReferalModel; 