const express = require("express");
const router = express.Router();

const {
  getAllQuiz,
  postCreateQuiz,
  putUpdateQuiz,
  deleteQuiz,
  getSingleQuiz,
} = require("../controllers/quiz");

/**
 * @route GET api/quiz
 * @description get all quiz
 * @access public
 */

router.get("/", getAllQuiz);

/**
 * @route GET api/quiz/:id
 * @description get all quiz
 * @access public
 */

router.get("/:id", getSingleQuiz);

/**
 * @route POST api/quiz
 * @description Add a new quiz
 * @access public
 */

router.post("/", postCreateQuiz);

/**
 * @route PUT api/quiz/:id
 * @description update quiz
 * @access public
 */
router.put("/:id", putUpdateQuiz);

/**
 * @route DELETE api/quiz/:id
 * @description delete quiz by id
 * @access public
 */

router.delete("/:id", deleteQuiz);

module.exports = router;
