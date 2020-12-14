import Express from 'express'
import Allocation from '../allocation/index'

//Router Obj
const router = Express.Router()

router.post('/', async function(req, res, next) {
  const Allo = new Allocation()
  //TODO: Schema validation

  const calculated = await Allo.getAllocations(req.body)
  
  res.send(calculated);
});



export default router