import { assignmentsService } from "../services/AssignmentsService";
import { studentsService } from "../services/StudentsService";
import BaseController from "../utils/BaseController";


export class StudentsController extends BaseController{
  constructor(){
    super('api/students')
    this.router
    .get('', this.getAll)
    .get('/:id/assignments', this.getAssignments)
    .post('', this.create)
    .delete('/:id', this.remove)
  }

  async getAll(req, res, next){
    try {
      let students = await studentsService.getAll(req.query)
      return res.send(students)
    } catch (error) {
      next(error)
    }
  }

  async getAssignments(req, res, next){
    try {
      let assignments = await assignmentsService.getAll({studentId: req.params.id})
      return res.send(assignments)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next){
    try {
      let student = await studentsService.create(req.body)
      return res.send(student)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next){
    try {
      let message = await studentsService.remove(req.params.id)
return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
