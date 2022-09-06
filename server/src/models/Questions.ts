import mongoose, { Document, Schema } from 'mongoose';

export interface IQuestion {
    question: string;
    options: {
        option_value: number;
        option_title: string;
    }[];
}

export interface IQuestionModel extends IQuestion, Document {}

const QuestionSchema: Schema = new Schema(
    {
        question: { type: String, required: true },
        options: [
            {
                option_value: {
                    type: Number,
                    required: true
                },
                option_title: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IQuestionModel>('Question', QuestionSchema);
