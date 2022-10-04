import { useContext } from "react";
import { resetQuiz } from "../../stores/Actions";
import { QuizContext } from "../../stores/QuizState";
import getUserRanking from "../../utils/getUserRank";
import "./Results.css";

type Props = {
  totalQuestions: number;
};

type Ranking = {
  rank: string;
  rankDesc: string;
  rankImg: string;
};

const Results = ({ totalQuestions }: Props) => {
  const { quizState, dispatch } = useContext(QuizContext);
  const { userScore } = quizState;

  const handleClick = () => {
    dispatch(resetQuiz());
  };

  const { rank, rankDesc, rankImg } = getUserRanking(
    userScore,
    totalQuestions
  ) as Ranking;

  return (
    <div className="results">
      <h2>Results</h2>
      <h3>
        You got <span className="results-score">{quizState.userScore}/10</span>{" "}
        Right.
      </h3>
      <h3>
        Your Rank: <span className="results-rank">{rank}</span>
      </h3>
      <img src={rankImg} alt={rank} />
      <p>{rankDesc}</p>
      <button onClick={handleClick}>Try Again</button>
    </div>
  );
};

export default Results;
