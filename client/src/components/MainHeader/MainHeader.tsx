import { useContext } from "react";
import nachoHeader from "../../assets/images/nacho_header.png";
import { resetQuiz } from "../../stores/Actions";
import { QuizContext } from "../../stores/QuizState";
import "./MainHeader.css";

const MainHeader = () => {
  const { dispatch } = useContext(QuizContext);

  const handleClick = () => {
    dispatch(resetQuiz());
  };

  return (
    <header>
      <nav className="nav-main">
        <button onClick={handleClick}>Start Over</button>
      </nav>
      <img className="header-image" src={nachoHeader} alt="header logo" />
    </header>
  );
};

export default MainHeader;
