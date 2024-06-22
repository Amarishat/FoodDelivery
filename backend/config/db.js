import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://amarishrcb:99999@cluster0.1l75n2y.mongodb.net/food-delivery').then(() => console.log("DB Connected"));
}