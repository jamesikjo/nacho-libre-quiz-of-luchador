import { NextFunction, Request, Response } from 'express';
import Questions from '../models/Questions';

const TOTAL_QUESTION_COUNT = 10;

const readAllQuestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await Questions.aggregate([{ $sample: { size: TOTAL_QUESTION_COUNT } }]);
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export default { readAllQuestions };
