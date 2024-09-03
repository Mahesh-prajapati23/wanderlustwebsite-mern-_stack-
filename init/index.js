const mongoose=require("mongoose");
const initData=require("./data.js");
// console.log(initData)
const Listing=require("../models/listing.js");

const urlMongo="mongodb://127.0.0.1:27017/wanderlust"
main().then(()=>{
    console.log("connected database!")
}).catch((err)=>{
    console.log(err)
});

async function main() {
    await mongoose.connect(urlMongo)
}

const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({ ...obj, owner: "66d32bd28646bdf25bce82fe"}));
    await Listing.insertMany(initData.data)
    console.log("Data was initialized");
}

initDB();