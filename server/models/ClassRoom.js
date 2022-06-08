import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ClassRoomSchema = new Schema({
  name: {type: String, required: true},
  roomNumber: {type: Number, required: true},
  subject: {type: String, enum: ['Math', 'Science', 'Fire', 'Code']}
},
{timestamps: true, toJSON: {virtuals: true}})
