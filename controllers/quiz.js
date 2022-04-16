const Quiz = require("../models/Quiz");

//find() will return all quiz items in collection. If collection empty, return 404
exports.getAllQuiz = async (req, res) => {
  await Quiz.find()
    .then((data) => {
      console.log({ data });
      res.status(200).json(data); //use res argument to send to client
    })
    .catch((err) =>
      res.status(404).json({ message: "no todo found", error: err.message })
    );
};
