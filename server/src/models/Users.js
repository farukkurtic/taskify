import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    userTask: {
        require: true,
        type: String
    },
})

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todo: [taskSchema],

});

export const User = mongoose.model("User", userSchema);