const mongoose = require('mongoose');
const connectToMongo = () => {
    mongoose.connect("mongodb://127.0.0.1/react",{ //  /react will create react name db in the mongodb compass
        useNewUrlParser:true,useUnifiedTopology:true
    });
    console.log("Connected to MongoDB Succesfully");
}


// const rectSchema = new mongoose.Schema({ 
//     name: String
// });

// // kittySchema.methods.speak = function speak() {
// //     const greeting = "My name is " + this.name;
// //     console.log(greeting);
// // };
  
// const Kitten = mongoose.model('AKsBook', reactSchema);//Converting the schema into a model(Locking your schema and once it is locked it cant be altered)
// //Model is a compiled schema
// //ajmatman plural form means ajmatmen collection will be created in the ajmatKart database.

// const ajmatkitty = new Kitten({ name: 'ajmatkitty' });//Creating an object corresponding to the model.
// // console.log(ajmatkitty.name);

// ajmatkitty.save(); //Saving the data

// run();
// async function run(){
//     const kitty = await Kitten.find(); //to find the the documents in the react collection and to print them in the console.
//     console.log(kitty);
// }

module.exports = connectToMongo;