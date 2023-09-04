import mongoose, { Schema } from "mongoose";

const buzzSchema = new Schema(
    {
        title: String
    },
    {
        timestamps: true
    }
)

const Buzz = mongoose.models.Buzz || mongoose.model("Buzz", buzzSchema)
export default Buzz