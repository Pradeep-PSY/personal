const {Schema,model} = require('mongoose');

const bmiSchema =  Schema({
    bmivalue:{type: 'string', required: true},
    userId:{type: 'string', required: true}
    
})

const BmiModel = model('bmi',bmiSchema)

module.exports = BmiModel; 