import expess from 'express';
import controller from '../controllers/Questions';

const router = expess.Router();

router.get('/get', controller.readAllQuestions);

export = router;
