import { assignmentsService } from "../services/AssignmentsService";
import BaseController from "../utils/BaseController";



export class AssignmentsController extends BaseController{
  constructor(){
    super('api/assignments')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next){
    try {
      let assignments = await assignmentsService.getAll(req.query)
      return res.send(assignments)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next){
    try {
      let assignment = await assignmentsService.create(req.body)
      return res.send(assignment)
    } catch (error) {
      next(error)
    }

  }
    async remove(req, res, next){
      try {
        let message = await assignmentsService.remove(req.params.id)
        return res.send(message)
      } catch (error) {
        next(error)
      }
    }
}
