import { NextFunction, Request, Response } from 'express';
import Answers from '../models/Answers';

const readAnswer = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const answerData = await Answers.find({ question_id: id });
        res.status(200).json({ answerData });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export default { readAnswer };
