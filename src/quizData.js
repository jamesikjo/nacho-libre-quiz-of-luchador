import cookGif from "./assets/cook-gif.gif";
import stevenCorn from "./assets/steven-corn.jpg";
import chips from "./assets/chips.gif";
import stevenPartner from "./assets/steven-partner.jpg";
import camelClutch from "./assets/camel-clutch.jpg";
import nachoAnimated from "./assets/nacho-animated.jpg";
import nachoSteven from "./assets/nacho-steven.jpg";
import nachoWrestling from "./assets/nacho-wrestling.jpg";
import machete from "./assets/machete.jpg";
import village from "./assets/village.jpg";
import { v4 as uuidv4 } from "uuid";
const quizData = [
  {
    questionId: uuidv4(),
    question: "What is Ignacio's primary job at the monastery?",
    answerChoices: [
      "a teacher",
      "a cook",
      "an alter boy",
      "a maintenance worker",
    ],
    correctAnswer: "a cook",
    correctImg: cookGif,
    answerDetails:
      "Ignacio's job at the monastery is a cook. His cooking is awful and he receives complaints from the people who eat his food. His food is rejected even by the children of the monastary.",
  },
  {
    questionId: uuidv4(),
    question: `Who says "Do you not realize that I've had diarrheas since Easters?"`,
    answerChoices: [
      "Steven",
      "Sister Encarnación",
      "one of the brothers from church",
      "Igancio",
    ],
    correctAnswer: "one of the brothers from church",
    correctImg: stevenCorn,
    answerDetails:
      "After Ignacio fails to bring back the chips that make his food flavorful he serves a meal to his brothers. One of them complains and says the food is terrible and goes on to tell him about the diarrhea he's had since Easter.",
  },
  {
    questionId: uuidv4(),
    question:
      "What special ingredient is added to the monastery's food that makes it flavorful?",
    answerChoices: ["lemon pepper", "chips", "chili peppers", "tortillas"],
    correctAnswer: "chips",
    correctImg: chips,
    answerDetails:
      "Ignacio mixes special chips into his food to make it flavorful. Without the chips the taste of his food is terrible.",
  },
  {
    questionId: uuidv4(),
    question:
      "Who is Ignacio's tag-team partner in his quest for wrestling stardom?",
    answerChoices: ["Steven", "Ramses", "Chancho", "Enrique"],
    correctAnswer: "Steven",
    correctImg: stevenPartner,
    answerDetails:
      "After picking up his chips to bring back to the monastery, Ignacio gets jumped by a stranger and is robbed of all his chips. He later returns to the scene of the crime and convinces the robber to become his tag-team wrestling partner.",
  },
  {
    questionId: uuidv4(),
    question:
      "What wrestling move does Nacho use to try and finish off his first opponent?",
    answerChoices: [
      "camel clutch",
      "anaconda squeeze",
      "chicken hold",
      "Mexican crab lock",
    ],
    correctAnswer: "anaconda squeeze",
    correctImg: camelClutch,
    answerDetails:
      "In his first match, Nacho uses the anaconda squeeze on his opponent. It works but the opponent's tag-team partner jumps in, gives Nacho a drop-kick and the match is lost.",
  },
  {
    questionId: uuidv4(),
    question:
      "After loosing his wrestling matches, Ignacio is frustrated and gets some advice from Steven. What does Steven say will help Ignacio become a better wrestler?",
    answerChoices: ["goat milk", "poppy seeds", "bader meat", "eagle eggs"],
    correctAnswer: "eagle eggs",
    correctImg: nachoAnimated,
    answerDetails:
      "Steven tells Ignacio that eagle eggs have magical powers and they could make him the greatest wrestler that ever lived. Ignacio thinks it's a stupid idea but Steven convinces him to meet a gypsy to help find some eagle eggs.",
  },
  {
    questionId: uuidv4(),
    question:
      "Ignacio and Steven decide to crash Ramses' party but only Steven is able to climb the wall and sneak into the house. How does Ignacio find his way into the house?",
    answerChoices: [
      "He pretends to be one of the musicians and walks in.",
      "He puts on a robe and get in as one of the wrestlers",
      "He climbs the roof and enters through in an open window.",
      "He pays the security person fifty pesos to let him through.",
    ],
    correctAnswer: "He pretends to be one of the musicians and walks in.",
    correctImg: nachoSteven,
    answerDetails:
      "Ignacio is too chubby for Steven to help him climb over the wall. He sees a bunch of musicians going to the house and blends in.",
  },
  {
    questionId: uuidv4(),
    question: "Does Nacho win any wrestling matches during the movie?",
    answerChoices: ["Yes", "No"],
    correctAnswer: "Yes",
    correctImg: nachoWrestling,
    answerDetails:
      "Nacho's only win is his last match with Ramses. He finishes in second place during the Battle Jam group match and moves on to the final match by default because the winner suffers an injury.",
  },
  {
    questionId: uuidv4(),
    question:
      "Ignacio is embarrassed by the trouble he has caused to the monastery and decides to leave to go into the wilderness. What does Chancho give Ignacio before he leaves?",
    answerChoices: [
      "his lucky jade charm",
      "an eagle egg",
      "his lucky machete",
      "a loaded pistol",
    ],
    correctAnswer: "his lucky machete",
    correctImg: machete,
    answerDetails:
      "Before Ignacio sets off to the wilderness, Chancho stops him and sees him off. Chancho gives Ignacio his lucky machete that he got from his mother before she died.",
  },
  {
    questionId: uuidv4(),
    question:
      "How does Steven find Ignacio after he has left for the wilderness?",
    answerChoices: [
      "He tracks his footprints.",
      "He makes some phone calls.",
      "He scours the desert.",
      "He sees him from the village.",
    ],
    correctAnswer: "He sees him from the village.",
    correctImg: village,
    answerDetails: `When Steven is asked by Ignacio how he found him, Steven points to some villagers down the hill and says "I saw you from the village."`,
  },
];

export default quizData;
