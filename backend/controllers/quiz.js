const Quiz = require("../models/quiz");

//find() will return all quiz in collection. If collection empty, return 404
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

exports.getSingleQuiz = (req, res) => {
  Quiz.findById(req.params.id)
    .then((quiz) => {
      console.log({ quiz });
      res.json(quiz);
    })
    .catch((err) =>
      res.status(404).json({ message: "no quiz found", error: err.message })
    );
};

exports.postCreateQuiz = (req, res) => {
  Quiz.create(req.body)
    .then((data) => {
      console.log({ data });
      res.json({ message: "quiz added successfully", data });
    })
    .catch((err) =>
      res.status(400).json({
        message: "unable to add new quiz",
        error: err.message,
      })
    );
};

exports.putUpdateQuiz = (req, res) => {
  console.log("id: ", req.params.id);
  console.log("body: ", req.body);
  Quiz.findByIdAndUpdate(req.params.id, req.body)
    .then((quiz) => {
      console.log("edit", { quiz });
      res.json({ message: "updated successfully", quiz });
    })
    .catch((err) =>
      res
        .status(400)
        .json({ error: "unable to update quiz", message: err.message })
    );
};

exports.deleteQuiz = (req, res) => {
  Quiz.findByIdAndRemove(req.params.id, req.body).then((data) =>
    res
      .json({ message: "quiz deleted successfully", data })
      .catch((err) =>
        res.status(404).json({ error: "quiz not found", message: err.message })
      )
  );
};
