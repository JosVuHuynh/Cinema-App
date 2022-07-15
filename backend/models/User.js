import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, uinque: true},
        email: {type: String, required: true, uinque: true},
        password: { type: String, required: true },
        profilePic: {type: String, default: ""},
        isAdmin: {type: Boolean, default: false},
    },
    {timestamps: true}
)

export default mongoose.model("User", UserSchema)