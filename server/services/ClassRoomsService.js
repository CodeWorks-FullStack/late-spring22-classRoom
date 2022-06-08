import { dbContext } from "../db/DbContext"


class ClassRoomsService{
  async getAll() {
    const classRooms = await dbContext.ClassRooms.find().sort('roomNumber')
    return classRooms
  }
  async create(body) {
    const classRoom = await dbContext.ClassRooms.create(body)
    return classRoom
  }
  async remove(id) {
    const original = await dbContext.ClassRooms.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }

}

export const classRoomsService = new ClassRoomsService()
