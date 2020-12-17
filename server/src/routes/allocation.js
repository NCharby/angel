import Express from 'express'
import Allocation from '../allocation/index'

//Router Obj
const router = Express.Router()

router.post('/', async function(req, res, next) {
  const Allo = new Allocation()
  //TODO: Schema validation
  try {
    console.log(req.body)
    const calculated = await Allo.getAllocations(req.body) 
    res.send(calculated)
  } catch (error) {
    console.warn(error)
    return res.status(400).send(error); 
  }
  
});



export default router