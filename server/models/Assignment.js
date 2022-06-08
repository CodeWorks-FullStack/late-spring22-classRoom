import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const AssignmentSchema = new Schema({
  title: {type: String, required: true},
  grade: {type: Number, min: 0, max: 100, default: 0},
  passed: {type: Boolean, default: false},
  studentId: {type: ObjectId, ref: 'Student', required: true},
  classRoomId: {type:ObjectId, ref: 'ClassRoom', required: true}
},
{timestamps: true, toJSON: {virtuals: true}})

AssignmentSchema.virtual('student', {
  localField: 'studentId',
  ref: 'Student',
  foreignField: '_id',
  justOne: true
})

AssignmentSchema.virtual('classRoom', {
  localField: 'classRoomId',
  ref: 'ClassRoom',
  foreignField: '_id',
  justOne: true
})
