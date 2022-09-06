import mongoose, { Document, Schema } from 'mongoose';

type AnswerDocument = Document & {
    question_id: string;
    correct_answer: number;
    answer_img: string;
    answer_desc: string;
};

type AnswerInput = {
    question: AnswerDocument['question_id'];
    correctAnswer: AnswerDocument['correct_answer'];
    answerImage: AnswerDocument['answer_img'];
    answerDesc: AnswerDocument['answer_desc'];
};

const AnswerSchema: Schema = new Schema(
    {
        question_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Question'
        },
        correct_answer: {
            type: Number,
            required: true
        },
        answer_img: {
            type: String
        },
        answer_desc: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<AnswerDocument>('Answer', AnswerSchema);
