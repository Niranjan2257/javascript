// Quiz data
const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "Berlin", "London", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    }
  ];
  
  // Variables
  let currentQuestion = 0;
  let score = 0;
  
  // DOM elements
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const submitButton = document.getElementById("submit");
  const scoreElement = document.getElementById("score");
  
  // Load the first question
  loadQuestion();
  
  // Load question and choices
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = "";
  
    currentQuizData.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.innerText = choice;
      button.addEventListener("click", checkAnswer);
      choicesElement.appendChild(button);
    });
  }
  
  // Check the selected answer
  function checkAnswer(event) {
    const selectedChoice = event.target.innerText;
    const currentQuizData = quizData[currentQuestion];
  
    if (selectedChoice === currentQuizData.correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  // Display the final score
  function showScore() {
    questionElement.innerText = "Quiz Completed!";
    choicesElement.style.display = "none";
    submitButton.style.display = "none";
    scoreElement.innerText = `Your score: ${score} out of ${quizData.length}`;
  }
  