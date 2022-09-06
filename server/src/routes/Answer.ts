import expess from 'express';
import controller from '../controllers/Answer';

const router = expess.Router();

router.get('/get/:id', controller.readAnswer);

export = router;
