import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rlyowlly19:123@rlyowlly.psioczd.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;