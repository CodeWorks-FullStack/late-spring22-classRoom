import mongoose from 'mongoose';
import { AssignmentSchema } from '../models/Assignment';
import { ClassRoomSchema } from '../models/ClassRoom';
import { StudentSchema } from '../models/Student';
import { ValueSchema } from '../models/Value';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  ClassRooms = mongoose.model('ClassRoom', ClassRoomSchema)

  Students = mongoose.model('Student', StudentSchema)

  Assignments = mongoose.model('Assignment', AssignmentSchema)


}

export const dbContext = new DbContext()
