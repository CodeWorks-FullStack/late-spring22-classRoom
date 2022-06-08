import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const StudentSchema = new Schema({
  name: {type: String, required: true},
  classRoomId: {type: ObjectId, ref: 'ClassRoom', required: true}
},
{timestamps: true, toJSON: {virtuals: true}})


