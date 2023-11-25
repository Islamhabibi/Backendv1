const mongoose = require("mongoose")
const product_schema= new mongoose.Schema(
    {   //name est required
        name:{type:String,required:true},
        description:String,
        price: Number,
        image: String
    },
    {   //date de la creation ou bien la modification
       timestamps: true 
    }
)
//creation de la schema
module.exports=mongoose.model("products",product_schema) 


const user_schema= new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name']
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
        },
        
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true,
    }
    )
    module.exports= mongoose.model('User', user_schema)
