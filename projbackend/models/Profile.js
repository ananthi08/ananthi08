const mongoose = require("mongoose");


const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  image:{
   type: String, 
  },
  
  maritalstatus :{
    type : String,
    required : true
  },
  height :{
    type : String,
    required : true
  
  },
  familytype :{
    type : String,
    required : true
  },
  mothertongue :{
    type : String,
    
  },


  age: {
    type: Number,
    required : true
  },

  religion :{
    type : String,
    required : true
  },

  address: {
    type: String,
    required : true
  },
  gender: {
    type: String,
   
  },
 

  social: [
    {
      facebook: {
        type: String,
     },

      instagram: {
        type: String,

      },


      linkedin: {
        type: String,
      },

     
      
    
    },  
  ],

  profession: [
    {
      highesteducation: {
        type: String,
     },

      employeedin: {
        type: String,

      },


      occupation: {
        type: String,
      },

      annualincome: {
        type: String,
         },

         worklocation: {
          type: String,
  
        },
      
    
    },  
  ],


  



  
  partner: [
    {
      height: {
        type: String,
     },

      mothertongue: {
        type: String,

      },


      physicalstatus: {
        type: String,
      },

      qualification: {
        type: String,
         },

         annualincome: {
          type:  String,
  
        },
        age: {
          type: Number,
  
        },
        religion: {
          type: String,
  
        },
      
    
    },  
  ],



  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
