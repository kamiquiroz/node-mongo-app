const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    }
}, {timestamps: {
    createAt: 'createAt',
    updateAt: 'updateAt'
}});

module.exports=mongoose.model('User', userSchema);

