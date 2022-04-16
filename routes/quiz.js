const express = require("express");
const router = express.Router();

const { getAllQuiz } = require("../controllers/quiz");

/**
 * @route GET api/quiz
 * @description get all quiz
 * @access public
 */

router.get("/", getAllQuiz);

module.exports = router;
