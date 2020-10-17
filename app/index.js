let question = document.querySelector(".question");
let answer = document.querySelector(".answer");

let openAccordion = () => {
  if (answer.style.display == "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
};

// Event listeners
question.addEventListener("click", openAccordion);
