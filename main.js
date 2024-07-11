let score = 0;

function trueAnswer(selectedAnswer, richtige_antwort) {
  const result = document.getElementById("result");

  if (selectedAnswer) {
    const answerValue = selectedAnswer.value;
    if (answerValue === richtige_antwort) {
      result.textContent = "Richtig!";
      result.className = "mt-4 text-lg text-green-500";
      score++;
    } else {
      result.textContent = "Falsch, versuche es nochmal.";
      result.className = "mt-4 text-lg text-red-500";
      score--;
    }
  } else {
    result.textContent = "Bitte wähle eine Antwort aus.";
    result.className = "mt-4 text-lg text-yellow-500";
  }
}

function checkAnswer() {
  const form = document.getElementById("quiz-form-1");
  /* 
  1. You nested two forms where the second had no closing tag
  2. You use forms normaly to submit them and send the data to a get/post endpoint --> you don't need that here (you could use here insteed of the form a div)
  */

  const selectedAnswer = form.querySelector('input[name="answer1"]:checked');
  const selectedAnswer2 = form.querySelector('input[name="answer2"]:checked');

  trueAnswer(selectedAnswer, "delta");
  trueAnswer(selectedAnswer2, "sam"); // Sam was written with the first letter in upercase --> matched not with the value of the radio button

  console.log(score);
}
