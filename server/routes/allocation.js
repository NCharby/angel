import { router } from 'express'

router.get('/', function(req, res, next) {
  res.send('respond with an allocation');
});

export default router