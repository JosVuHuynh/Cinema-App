import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, uinque: true},
        type: {type: String},
        genre: {type: String},
        content: {type: Array}
    },
    {timestamps: true}
)

export default mongoose.model("List", ListSchema)