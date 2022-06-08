import { dbContext } from "../db/DbContext";



class StudentsService{
  async getAll(query = {}) {
    return await dbContext.Students.find(query)
  }
  async create(body) {
    return await dbContext.Students.create(body)
  }
  async  remove(id) {
    let original = await dbContext.Students.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }

// NOTE another way to support looking up the 'children' of classroom without supporting queries in the get all
  async getByClassRoomId(id) {
    return await dbContext.Students.find({classRoomId: id})
  }

}

export const studentsService = new StudentsService()
