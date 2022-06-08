import { dbContext } from "../db/DbContext";


class AssignmentsService {
  async getAll(query ={}) {
    return await dbContext.Assignments.find(query).populate('student', 'name').populate('classRoom', ['name', 'roomNumber'])
  }
  async create(body) {
    const assignment = await  dbContext.Assignments.create(body)
    // FIXME idk yet? it was a version error this now works but you need to update your mongoose version.  The template will be updated so don't worry about this
    await assignment.populate('student')
    await assignment.populate('classRoom')
    return assignment
  }
  async remove(id) {
    const original = await dbContext.Assignments.findById(id)
    await original.remove()
    return `deleted ${original.title}`
  }

}

export const assignmentsService = new AssignmentsService()
