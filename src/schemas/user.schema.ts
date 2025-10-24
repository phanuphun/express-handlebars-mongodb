import { Schema } from "mongoose";

const userSchema = new Schema({
    displayName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
}, { timestamps: true, collection: 'users', strict: false });

export default userSchema;