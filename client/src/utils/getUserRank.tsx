const getUserRanking = (score: number, questionTotal: number) => {
  let ranking;
  const percent = (score / questionTotal) * 100;

  switch (true) {
    case percent < 30:
      ranking = {
        rank: "YOUNG IGNACIO",
        rankDesc: "ARE YOU SURE YOU SAW THE MOVIE?",
        rankImg:
          "https://res.cloudinary.com/jjo/image/upload/v1650079310/Quiz-of-Luchador/machete_xecf92.jpg",
      };
      break;
    case percent >= 30 && percent < 60:
      ranking = {
        rank: "MONASTERY SERVANT",
        rankDesc: "NOT A LUCHADOR YET!",
        rankImg:
          "https://res.cloudinary.com/jjo/image/upload/v1650080151/Quiz-of-Luchador/monastery_adzvwr.jpg",
      };
      break;
    case percent >= 60 && percent < 80:
      ranking = {
        rank: "LUCHADOR TRAINEE",
        rankDesc: "NOT BAD, ALMOST THERE",
        rankImg:
          "https://res.cloudinary.com/jjo/image/upload/v1650080144/Quiz-of-Luchador/young-luchador_yqk3su.jpg",
      };
      break;
    case percent >= 80 && percent <= 100:
      ranking = {
        rank: "LUCHADOR NACHO",
        rankDesc: "Excellent! OFFICIALLY A LUCHADOR!",
        rankImg:
          "https://res.cloudinary.com/jjo/image/upload/v1650080158/Quiz-of-Luchador/luchador_px2ouq.jpg",
      };
      break;
    default:
      return;
  }
  return ranking;
};

export default getUserRanking;
