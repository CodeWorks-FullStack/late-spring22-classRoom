import { assignmentsService } from "../services/AssignmentsService";
import { classRoomsService } from "../services/ClassRoomsService";
import { studentsService } from "../services/StudentsService";
import BaseController from "../utils/BaseController";


export class ClassRoomsController extends BaseController{
  constructor(){
    super('api/classrooms')
    this.router
    .get('', this.getAll)
    .get('/:id/students', this.getStudents)
    .get('/:id/assignments', this.getAssignments)
    .post('', this.create)
    .delete('/:id', this.remove)
  }

  async getAll(req, res, next){
    try {
      let classRooms = await classRoomsService.getAll()
      return res.send(classRooms)
    } catch (error) {
      next(error)
    }
  }
  async getStudents(req, res, next){
    try {
      let students = await studentsService.getAll({classRoomId: req.params.id})
      return res.send(students)
    } catch (error) {
      next(error)
    }
  }

  async getAssignments(req, res, next){
    try {
      let assignments = await assignmentsService.getAll({classRoomId: req.params.id})
      return res.send(assignments)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next){
    try {
      let classRoom = await classRoomsService.create(req.body)
      return res.send(classRoom)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next){
    try {
      let message = await classRoomsService.remove(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
