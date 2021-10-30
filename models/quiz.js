const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      isCorrect: {
        type: Boolean,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  correctAnswer: {
    type: String,
    required: true,
  },
  answerImage: {
    type: String,
  },
  answerDesc: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model("quiz", QuizSchema);
module.exports = Quiz;
