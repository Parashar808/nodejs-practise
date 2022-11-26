const mongoose = require('mongoose');
const savedata123 = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");
    const productschema = new mongoose.Schema({
        name: String,
        brand: String,
        price: Number

    });
    const productmodel = mongoose.model('products', productschema);
    let data = new productmodel({ name: 'abcd', brand: 'xyz', price: 1000 });
    let result = await data.save();
    console.log(result);


}
// savedata123();
const update123 = async () => {

    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");
    const productschema = new mongoose.Schema({
        name: String,
        brand: String,
        price: Number

    });
    const productmodel = mongoose.model('products', productschema);
    let data = await productmodel.updateOne(
        { name: "abcd" },
        {
            $set: { price: 2000 }
        })
    console.log(data);
};
// update123();

const delete123 = async () => {

    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");
    const productschema = new mongoose.Schema({
        name: String,
        brand: String,
        price: Number

    });
    const productmodel = mongoose.model('products', productschema);
    let data = await productmodel.deleteOne({ name: "abcd" });
    console.log(data);
};
// delete123();


const find123 = async () => {

    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");
    const productschema = new mongoose.Schema({
        name: String,
        brand: String,
        price: Number

    });
    const productmodel = mongoose.model('products', productschema);
    let data = await productmodel.find({ name: "14pro" });
    console.log(data);
};
find123();